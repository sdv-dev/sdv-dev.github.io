import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import SdGymHero from "./SdGymHero";
import NewsSliderSection from "../community-stats/NewsSliderSection";
import BannerSection from "../community-stats/BannerSection";
import SdGymLeaderboard from "./SdGymLeaderboard";
import AboutSdGym from "./AboutSdGym";
// import PrivacyTradeoffs from "./PrivacyTradeoffs";
import SpeedTradeoffs from "./SpeedTradeoffs";

export default function SdGymContent() {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [dateTags, setDateTags] = useState([]);
  const activeDateTag = dateTags.find((dt) => dt.active);

  const fileUrl =
    "https://raw.githubusercontent.com/sdv-dev/sdv-dev.github.io/gatsby-home/assets/sdgym-leaderboard-files/SDGym Monthly Run.xlsx";

  useEffect(() => {
    async function fetchExcel() {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];
        const rawData = XLSX.utils.sheet_to_json(worksheet);
        setRawData(rawData);

        // Date tags for the tables
        const rawDateTags = extractSortedDates(rawData);
        setDateTags(rawDateTags);

        // Table content
        const initialActiveDateTag = rawDateTags.find((dt) => dt.active);
        const tableData = buildTableData(rawData, initialActiveDateTag.date);
        setData(tableData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    }

    fetchExcel();
  }, []);

  useEffect(() => {
    if (activeDateTag && rawData.length) {
      const tableData = buildTableData(rawData, activeDateTag.date);
      setData(tableData);
    }
  }, [activeDateTag, rawData]);

  const extractSortedDates = (data) => {
    const datesSet = new Set();

    data.forEach((row) => {
      Object.keys(row).forEach((key) => {
        const match = key.match(/^(\d{2}-\d{2}-\d{4})/);
        if (match) {
          datesSet.add(match[1]);
        }
      });
    });

    const dates = Array.from(datesSet);
    dates.sort((a, b) => new Date(b) - new Date(a));

    return dates.map((date, index) => ({
      label: new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      date,
      active: index === 0,
    }));
  };

  const buildTableData = (data, selectedDate) => {
    return data.map((row) => {
      let model = row["Outperfoms GaussianCopula"] || "-";
      model = model.replace(/Synthesizer/g, "").trim();

      const key = Object.keys(row).find((k) => k.startsWith(selectedDate));
      const wins = key && row[key] !== undefined ? row[key] : "-";

      return { model, wins };
    });
  };

  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdGymHero />
      <SdGymLeaderboard data={data} tags={dateTags} setTags={setDateTags} />
      <AboutSdGym />
      {/* <PrivacyTradeoffs /> */}
      <SpeedTradeoffs />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
