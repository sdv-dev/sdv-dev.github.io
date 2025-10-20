import React, { useState } from "react";
import ScrollableTable from "../common/table/ScrollableTable";
import TableHeader from "../common/table/TableHeader";
import TableHeaderCell from "../common/table/TableHeaderCell";
import TableBody from "../common/table/TableBody";
import TableRow from "../common/table/TableRow";
import TableRowCell from "../common/table/TableRowCell";
import Tab from "../common/Tab";
import CustomPieChart from "./CustomPieChart";

export default function SdvInNumbersSection({ data }) {
  const currentYear = new Date().getFullYear().toString();

  const [tabs, setTabs] = useState([
    { label: "Visualize", isActive: true },
    { label: "Downloads", isActive: false },
    // { label: "Users", isActive: false },
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
            href="https://datacebo.com/announcements/sdv-reaches-10-million-downloads/"
            target="_blank"
            rel="noreferrer"
            className="text-lg text-blue-600 hover:text-midnight-950 font-semibold duration-200 leading-none cursor-pointer"
          >
            Learn more
          </a>
        </div>
        <div
          id="numbers"
          className="flex justify-center items-center gap-2.5 mb-6"
        >
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
        <div className="flex justify-center">
          {activeTab.label === "Downloads" && (
            <ScrollableTable tableColDimensions="minmax(191px, 191px) minmax(40px, 350px) minmax(136px, 488px)">
              <TableHeader>
                <TableHeaderCell />
                <TableHeaderCell>To date</TableHeaderCell>
                <TableHeaderCell>{currentYear}</TableHeaderCell>
              </TableHeader>

              <TableBody>
                {data.map((row, idx) => {
                  const isLast = idx === data.length - 1;

                  return (
                    <TableRow key={row.name} index={idx} isLast={isLast}>
                      <TableRowCell>
                        <div className="flex font-medium text-midnight-950 tracking-lg">
                          {row.name}
                        </div>
                      </TableRowCell>
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
                    </TableRow>
                  );
                })}
              </TableBody>
            </ScrollableTable>
          )}
          {activeTab.label === "Visualize" && <CustomPieChart data={data} />}
        </div>
      </div>
    </div>
  );
}
