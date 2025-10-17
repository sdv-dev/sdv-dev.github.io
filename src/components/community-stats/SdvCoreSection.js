import React from "react";
import Table from "../common/table/Table";
import TableHeader from "../common/table/TableHeader";
import TableHeaderCell from "../common/table/TableHeaderCell";
import TableBody from "../common/table/TableBody";
import TableRow from "../common/table/TableRow";
import TableRowCell from "../common/table/TableRowCell";

export default function SdvCoreSection({ dependenciesData }) {
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col md:items-center py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg pb-6 text-center md:leading-lg md:pb-12">
          SDV Community <span className="text-blue-600">downloads</span>
        </h1>
        <div>
          <Table tableColDimensions="minmax(134px, 199px) minmax(136px, 488px) minmax(136px, 488px)">
            <TableHeader>
              <TableHeaderCell />
              <TableHeaderCell>To date</TableHeaderCell>
              <TableHeaderCell>{currentYear}</TableHeaderCell>
            </TableHeader>

            <TableBody>
              {dependenciesData.map((row, idx) => {
                const isLast = idx === dependenciesData.length - 1;

                return (
                  <TableRow key={row.name} index={idx} isLast={isLast}>
                    <TableRowCell>
                      <div className="flex font-medium text-midnight-950">
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
          </Table>
        </div>
      </div>
    </div>
  );
}
