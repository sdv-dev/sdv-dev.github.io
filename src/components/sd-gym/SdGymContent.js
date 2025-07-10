import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import SdGymHero from "./SdGymHero";
import NewsSliderSection from "../community-stats/NewsSliderSection";
import BannerSection from "../community-stats/BannerSection";
import SdGymLeaderboard from "./SdGymLeaderboard";
import AboutSdGym from "./AboutSdGym";

export default function SdGymContent() {
  const [data, setData] = useState([]);
  const [dateTags, setDateTags] = useState([]);
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

        // Date tags for the tables
        const rawDateTags = extractSortedDates(rawData);
        setDateTags(rawDateTags);

        // Tables content
        setData(rawData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    }

    fetchExcel();
  }, []);

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

  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdGymHero />
      <SdGymLeaderboard tags={dateTags} setTags={setDateTags} />
      <AboutSdGym />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
