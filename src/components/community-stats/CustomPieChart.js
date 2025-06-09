import React from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import sdvPieChartLogo from "../../../static/sdv-pie-chart-logo.svg";
import useWindowWidth from "../../hooks/useviewport";

const COLORS = [
  "#01E0C9",
  "#03AFF1",
  "#77DAFF",
  "#1376B1",
  "#C1C8DB",
  "#959FBD",
  "#525C80",
  "#B7E9FF",
  "#0690D1",
  "#000036",
];

const renderCustomizedLabel = ({ name, value, index }) => {
  const labelPositions = [
    { x: -290, y: -450 },
    { x: 90, y: 130 },
    { x: 90, y: 160 },
    { x: 90, y: 190 },
    { x: 630, y: 100 },
    { x: 650, y: 130 },
    { x: 650, y: 160 },
    { x: 650, y: 190 },
  ];

  const lineCoordinates = [
    { from: [-270, -450], to: [-290, -500] },
    { from: [310, 130], to: [170, 130] },
    { from: [365, 160], to: [150, 160] },
    { from: [400, 190], to: [155, 190] },
    { from: [430, 100], to: [570, 100] },
    { from: [450, 130], to: [570, 130] },
    { from: [450, 160], to: [580, 160] },
    { from: [445, 190], to: [590, 190] },
  ];

  const label = labelPositions[index];
  const line = lineCoordinates[index];

  if (!label) return null;

  return (
    <g>
      {line && (
        <>
          <polyline
            points={`${line.from[0]},${line.from[1]} ${line.to[0]},${line.to[1]}`}
            stroke="rgba(227, 234, 255, 0.93)"
            strokeWidth={2}
            fill="none"
          />
          <circle
            cx={line.from[0]}
            cy={line.from[1]}
            r={3}
            fill="rgba(227, 234, 255, 0.93)"
          />
        </>
      )}
      <text
        x={label.x}
        y={label.y}
        fill="#000036"
        fontSize={13}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${name} (${value}%)`}
      </text>
    </g>
  );
};

export default function CustomPieChart({ data }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);
  console.log(sortedData);

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[42%] md:top-[54%] z-10"
        draggable={false}
      />
      <PieChart width={isMobile ? 400 : 800} height={550}>
        <Pie
          data={sortedData}
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 180 : 200}
          dataKey="percentage"
          startAngle={60}
          endAngle={-300}
          isAnimationActive={false}
          stroke="none"
          labelLine={false}
          label={!isMobile ? renderCustomizedLabel : false}
        >
          {sortedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label
            value={`${sortedData[0]?.percentage}%`}
            position="center"
            fontSize={24}
            fontWeight="medium"
            fill="#000036"
            dy={isMobile ? 120 : 110}
          />
        </Pie>
        {isMobile && (
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            content={({ payload }) => (
              <ul className="flex flex-wrap justify-center items-center mt-4">
                {payload.map((entry, index) => (
                  <li
                    key={`legend-item-${index}`}
                    className="flex flex-col items-center text-center mx-[9px] mb-1"
                  >
                    <div className="flex items-center">
                      <span
                        className="w-3 h-3 mr-2"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-midnight-950">
                        {`${entry.percentage} (${sortedData[index].percentage}%)`}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          />
        )}
      </PieChart>
    </div>
  );
}
