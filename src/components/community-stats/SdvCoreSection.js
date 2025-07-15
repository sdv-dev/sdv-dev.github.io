import React, { useState, useRef, useEffect } from "react";
import Table from "../common/table/Table";
import TableHeader from "../common/table/TableHeader";
import TableHeaderCell from "../common/table/TableHeaderCell";
import TableBody from "../common/table/TableBody";
import TableRow from "../common/table/TableRow";
import TableRowCell from "../common/table/TableRowCell";
import useWindowWidth from "../../hooks/useviewport";

export default function SdvCoreSection({ dependenciesData }) {
  const currentYear = new Date().getFullYear().toString();
  const metricKeys = ["toDate", "yearToDate"];
  const metricLabels = ["To date", currentYear];
  const [tableColDimensions, setTableColDimensions] = useState(
    "minmax(134px, 199px) minmax(136px, 488px) minmax(136px, 488px)"
  );
  const width = useWindowWidth();
  const isMobile = width < 768;

  const [activeMetricIndex, setActiveMetricIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setTableColDimensions(
      isMobile
        ? "minmax(134px, 199px) minmax(136px, 488px)"
        : "minmax(134px, 199px) minmax(136px, 488px) minmax(136px, 488px)"
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

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col md:items-center py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg pb-6 text-center md:leading-lg md:pb-12">
          SDV Community <span className="text-blue-600">downloads</span>
        </h1>
        <div className="flex justify-center">
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
                  {metricLabels.map((ml) => (
                    <TableHeaderCell key={ml}>{ml}</TableHeaderCell>
                  ))}
                </>
              )}
            </TableHeader>

            <TableBody>
              {dependenciesData.map((row, idx) => {
                const isLast = idx === dependenciesData.length - 1;

                return (
                  <TableRow key={row.name} index={idx} isLast={isLast}>
                    <div className="relative">
                      <TableRowCell>
                        <div className="flex font-medium text-midnight-950">
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
                          <div className="flex justify-end font-consolas font-normal antialiased">
                            {row[metricKeys[activeMetricIndex]]}
                          </div>
                        </TableRowCell>
                      </div>
                    ) : (
                      <>
                        <TableRowCell>
                          <div className="flex justify-end font-consolas font-normal antialiased">
                            {row.toDate}
                          </div>
                        </TableRowCell>
                        <TableRowCell>
                          <div className="flex justify-end font-consolas font-normal antialiased">
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
        </div>
      </div>
    </div>
  );
}
