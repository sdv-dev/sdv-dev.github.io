import React from "react";
import StatusBadge from "./StatusBadge";
import Tags from "./Tags";
import Table from "../common/table/Table";
import TableHeader from "../common/table/TableHeader";
import TableHeaderCell from "../common/table/TableHeaderCell";
import TableBody from "../common/table/TableBody";
import ModelsIcon from "./ModelsIcon";
import NumOfWinsIcon from "./NumOfWinsIcon";
import TableRow from "../common/table/TableRow";
import TableRowCell from "../common/table/TableRowCell";

const SdGymLeaderboard = ({ data, tags, setTags }) => {
  const metricLabels = ["Models", "Number of wins"];
  const tableColDimensions = "minmax(160px, 379px) minmax(140px, 379px)";
  const lastRunLabel = tags[0]?.label;

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col items-center py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg text-[36px] md:text-5xl text-center pb-8">
          Leaderboard
        </h1>
        <StatusBadge dateText={lastRunLabel} />
        <div className="w-full flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-full mb-8 md:mb-0">
            <Tags tags={tags} setTags={setTags} />
          </div>
          <Table tableColDimensions={tableColDimensions}>
            <TableHeader>
              {metricLabels.map((ml) => (
                <TableHeaderCell key={ml}>
                  {ml === "Models" && <ModelsIcon />}
                  {ml === "Number of wins" && <NumOfWinsIcon />}
                  {ml}
                </TableHeaderCell>
              ))}
            </TableHeader>
            <TableBody>
              {data?.map((row, idx) => {
                const isLast = idx === data.length - 1;

                return (
                  <TableRow key={row.model} index={idx} isLast={isLast}>
                    <TableRowCell>
                      <div className="flex font-medium text-midnight-950 tracking-lg">
                        {row.model}
                      </div>
                    </TableRowCell>
                    <TableRowCell>
                      <div className="flex font-consolas font-normal antialiased">
                        {row.wins}
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
};

export default SdGymLeaderboard;
