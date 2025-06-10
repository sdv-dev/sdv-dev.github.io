import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import SdvCommunityHero from "./SdvCommunityHero";
import NewsSliderSection from "./NewsSliderSection";
import SynthesizeCardsSection from "./SynthesizeCardsSection";
import CommunityUsersSection from "./CommunityUsersSection";
import SdvInNumbersSection from "./SdvInNumbersSection";
import SdvCoreSection from "./SdvCoreSection";
import SdvOpenCoreSection from "./SdvOpenCoreSection";
import BannerSection from "./BannerSection";

export default function CommunityStatsContent() {
  const [data, setData] = useState([]);
  const fileUrl =
    "https://raw.githubusercontent.com/sdv-dev/sdv-dev.github.io/gatsby-home/assets/GitHub_Summary.xlsx";

  useEffect(() => {
    async function fetchExcel() {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const firstSheet = workbook.SheetNames[0];
        const secondSheet = workbook.SheetNames[1];
        // const thirdSheet = workbook.SheetNames[2];
        const worksheet = workbook.Sheets[secondSheet];
        // const secondWorksheet = workbook.Sheets[secondSheet];
        // const thirdWorksheet = workbook.Sheets[thirdSheet];
        const rawData = XLSX.utils.sheet_to_json(worksheet);
        // const secondRawData = XLSX.utils.sheet_to_json(secondWorksheet);
        // const thirdRawData = XLSX.utils.sheet_to_json(thirdWorksheet);

        function formatThousands(value) {
          if (value >= 1_000_000)
            return (value / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
          if (value >= 1_000) return (value / 1_000).toFixed(0) + "K";
          return value.toString();
        }

        const filtered = rawData.filter(
          (item) =>
            item["Total Since Beginning"] !== undefined &&
            item["2025"] !== undefined
        );

        const total = filtered.reduce(
          (sum, item) => sum + item["Total Since Beginning"],
          0
        );

        const enrichedData = filtered.map((item) => ({
          name: item.Ecosystem,
          percentage: parseFloat(
            ((item["Total Since Beginning"] / total) * 100).toFixed(2)
          ),
          toDate: formatThousands(item["Total Since Beginning"] * 1000),
          yearToDate: formatThousands(item["2025"] * 1000),
        }));

        setData(enrichedData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    }

    fetchExcel();
  }, []);

  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdvCommunityHero />
      <SynthesizeCardsSection />
      <CommunityUsersSection />
      <SdvInNumbersSection data={data} />
      <SdvCoreSection />
      <SdvOpenCoreSection />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
