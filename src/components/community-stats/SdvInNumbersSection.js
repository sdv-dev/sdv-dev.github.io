import React, { useState, useEffect, useRef } from "react";
import Table from "../common/table/Table";
import TableHeader from "../common/table/TableHeader";
import TableHeaderCell from "../common/table/TableHeaderCell";
import TableBody from "../common/table/TableBody";
import TableRow from "../common/table/TableRow";
import TableRowCell from "../common/table/TableRowCell";
import Tab from "../common/Tab";
import useWindowWidth from "../../hooks/useviewport";
import CustomPieChart from "./CustomPieChart";
import LatestsNewsSubSection from "./LatestsNewsSubSection";

export default function SdvInNumbersSection() {
  const metricKeys = ["toDate", "monthly", "yearToDate"];
  const metricLabels = ["To date", "Monthly", "Year to date"];
  const [tableColDimensions, setTableColDimensions] = useState(
    "minmax(204px, 204px) minmax(181px, 348px) minmax(181px, 348px) minmax(181px, 348px)"
  );
  const data = [
    { name: "SDV", toDate: "8M", monthly: "131K", yearToDate: "10M" },
    { name: "Gretle", toDate: "998K", monthly: "16K", yearToDate: "1M" },
    { name: "Synthesized", toDate: "269K", monthly: "4K", yearToDate: "323K" },
    { name: "YData", toDate: "221K", monthly: "3K", yearToDate: "405K" },
    { name: "SynthCity", toDate: "84K", monthly: "1,413", yearToDate: "106K" },
    {
      name: "Realtabformer",
      toDate: "78K",
      monthly: "1,304",
      yearToDate: "97K",
    },
    { name: "Datomize", toDate: "73K", monthly: "1,216", yearToDate: "81K" },
    {
      name: "Smartnoise",
      toDate: "68K",
      monthly: "1,134",
      yearToDate: "92K",
    },
    { name: "Be-great", toDate: "66K", monthly: "1,101", yearToDate: "90K" },
    { name: "Mostly-AI", toDate: "22K", monthly: "373", yearToDate: "62K" },
  ];
  const width = useWindowWidth();
  const isMobile = width < 768;

  const [activeMetricIndex, setActiveMetricIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setTableColDimensions(
      isMobile
        ? "minmax(204px, 204px) minmax(181px, 348px)"
        : "minmax(204px, 204px) minmax(181px, 348px) minmax(181px, 348px) minmax(181px, 348px)"
    );
  }, [isMobile]);

  const handleSwipeStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleSwipeMove = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const threshold = 50;

    if (deltaX > threshold) {
      setActiveMetricIndex((prev) => Math.max(prev - 1, 0));
      touchStartX.current = null;
    } else if (deltaX < -threshold) {
      setActiveMetricIndex((prev) => Math.min(prev + 1, metricKeys.length - 1));
      touchStartX.current = null;
    }
  };

  const [tabs, setTabs] = useState([
    { label: "Downloads", isActive: true },
    { label: "Users", isActive: false },
    { label: "Visualize", isActive: false },
  ]);
  const activeTab = tabs.find((t) => t.isActive);

  const clickTab = (label) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.label === label,
      }))
    );
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg pb-6 text-center md:leading-lg">
          The Synthetic Data Vault{" "}
          <br className="hidden md:inline-block lg:hidden" />
          <span className="text-blue-600">in numbers</span>
        </h1>
        <div className="text-center pt-1.5 pb-12">
          <a
            href="https://docs.sdv.dev/sdv"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
          >
            Learn more
          </a>
        </div>
        <div className="flex gap-2.5 lg:gap-9 border-b border-b-midnight-200 mb-6">
          {tabs.map((t) => (
            <Tab
              key={t.label}
              isActive={t.isActive}
              onClick={() => clickTab(t.label)}
            >
              {t.label}
            </Tab>
          ))}
        </div>
        {(activeTab.label === "Downloads" || activeTab.label === "Users") && (
          <Table tableColDimensions={tableColDimensions}>
            <TableHeader>
              <div className="relative">
                <TableHeaderCell />

                {isMobile && (
                  <div className="absolute right-0 top-0 h-full w-6 z-50 pointer-events-none">
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.01) 100%)",
                        boxShadow: "7px 0px 20px -10px rgba(0, 0, 54, 0.14)",
                      }}
                    />
                  </div>
                )}
              </div>
              {isMobile ? (
                <div
                  onTouchStart={handleSwipeStart}
                  onTouchMove={handleSwipeMove}
                  className="touch-pan-x w-full"
                >
                  <TableHeaderCell>
                    {metricLabels[activeMetricIndex]}
                  </TableHeaderCell>
                </div>
              ) : (
                <>
                  <TableHeaderCell>To date</TableHeaderCell>
                  <TableHeaderCell>Monthly</TableHeaderCell>
                  <TableHeaderCell>Year to date</TableHeaderCell>
                </>
              )}
            </TableHeader>

            <TableBody>
              {data.map((row, idx) => {
                const isLast = idx === data.length - 1;

                return (
                  <TableRow key={row.name} index={idx} isLast={isLast}>
                    <div className="relative">
                      <TableRowCell>
                        <div className="flex font-semibold text-midnight-950">
                          {row.name}
                        </div>
                      </TableRowCell>

                      {isMobile && (
                        <div className="absolute right-0 top-0 h-full w-6 z-50 pointer-events-none">
                          <div
                            className="h-full w-full"
                            style={{
                              background:
                                "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.01) 100%)",
                              boxShadow:
                                "7px 0px 20px -10px rgba(0, 0, 54, 0.14)",
                            }}
                          />
                        </div>
                      )}
                    </div>
                    {isMobile ? (
                      <div
                        onTouchStart={handleSwipeStart}
                        onTouchMove={handleSwipeMove}
                        className="w-full touch-pan-x"
                      >
                        <TableRowCell>
                          <div
                            className={`flex justify-end ${
                              isLast
                                ? "font-bold text-midnight-950"
                                : "font-normal"
                            }`}
                          >
                            {row[metricKeys[activeMetricIndex]]}
                          </div>
                        </TableRowCell>
                      </div>
                    ) : (
                      <>
                        <TableRowCell>
                          <div
                            className={`flex justify-end ${
                              isLast
                                ? "font-bold text-midnight-950"
                                : "font-normal"
                            }`}
                          >
                            {row.toDate}
                          </div>
                        </TableRowCell>
                        <TableRowCell>
                          <div
                            className={`flex justify-end ${
                              isLast
                                ? "font-bold text-midnight-950"
                                : "font-normal"
                            }`}
                          >
                            {row.monthly}
                          </div>
                        </TableRowCell>
                        <TableRowCell>
                          <div
                            className={`flex justify-end ${
                              isLast
                                ? "font-bold text-midnight-950"
                                : "font-normal"
                            }`}
                          >
                            {row.yearToDate}
                          </div>
                        </TableRowCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
        {activeTab.label === "Visualize" && <CustomPieChart />}
        <LatestsNewsSubSection />
      </div>
    </div>
  );
}
