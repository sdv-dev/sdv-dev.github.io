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
import LatestsNewsSubSection from "./LatestsNewsSubSection";

export default function CommunityStatsContent() {
  const [data, setData] = useState([]);
  const [dependenciesData, setDependenciesData] = useState([]);
  const fileUrl =
    "https://raw.githubusercontent.com/sdv-dev/sdv-dev.github.io/gatsby-home/assets/Downloads_Summary.xlsx";

  useEffect(() => {
    async function fetchExcel() {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const firstSheet = workbook.SheetNames[0];
        const thirdSheet = workbook.SheetNames[2];
        const worksheet = workbook.Sheets[firstSheet];
        const dependenciesWorksheet = workbook.Sheets[thirdSheet];

        const rawData = XLSX.utils.sheet_to_json(worksheet);
        const rawDependencies = XLSX.utils.sheet_to_json(dependenciesWorksheet);

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
          toDate: formatThousands(item["Total Since Beginning"]),
          yearToDate: formatThousands(item["2025"]),
        }));

        setData(enrichedData);

        const dependencies = rawDependencies
          .filter(
            (item) =>
              item["Library"] !== undefined &&
              item["Total Since Beginning"] !== undefined &&
              item["2025"] !== undefined
          )
          .map((item) => ({
            name: item["Library"],
            toDate: formatThousands(item["Total Since Beginning"]),
            yearToDate: formatThousands(item["2025"]),
          }));

        setDependenciesData(dependencies);
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
      <LatestsNewsSubSection />
      <SdvCoreSection dependenciesData={dependenciesData} />
      <SdvOpenCoreSection />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
