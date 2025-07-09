import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import SdGymHero from "./SdGymHero";
import NewsSliderSection from "../community-stats/NewsSliderSection";
import BannerSection from "../community-stats/BannerSection";
import SdGymLeaderboard from "./SdGymLeaderboard";
import AboutSdGym from "./AboutSdGym";

export default function SdGymContent() {
  const [data, setData] = useState([]);
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
        setData(rawData);
      } catch (error) {
        console.error("Error loading Excel file:", error);
      }
    }

    fetchExcel();
  }, []);

  return (
    <div className="pt-16 relative bg-white flex flex-col justify-center overflow-hidden">
      <SdGymHero />
      <SdGymLeaderboard />
      <AboutSdGym />
      <NewsSliderSection />
      <BannerSection />
    </div>
  );
}
