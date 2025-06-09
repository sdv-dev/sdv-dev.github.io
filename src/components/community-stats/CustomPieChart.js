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
    { x: 80, y: 100 },
    { x: 80, y: 130 },
    { x: 80, y: 160 },
    { x: 670, y: 100 },
    { x: 710, y: 130 },
    { x: 720, y: 160 },
    { x: 730, y: 190 },
  ];

  const lineCoordinates = [
    { from: [-270, -450], to: [-290, -500] },
    { from: [310, 100], to: [170, 100] },
    { from: [365, 130], to: [150, 130] },
    { from: [400, 160], to: [140, 160] },
    { from: [430, 100], to: [620, 100] },
    { from: [450, 130], to: [640, 130] },
    { from: [450, 160], to: [660, 160] },
    { from: [445, 190], to: [670, 190] },
  ];

  const strokeColors = [
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
    "rgba(227, 234, 255, 0.93)",
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
            stroke={strokeColors[index]}
            strokeWidth={2}
            fill="none"
          />
          <circle
            cx={line.from[0]}
            cy={line.from[1]}
            r={3}
            fill={strokeColors[index]}
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

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[42%] md:top-[55%] z-10"
        draggable={false}
      />
      <PieChart width={isMobile ? 400 : 800} height={550}>
        <Pie
          data={sortedData}
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 180 : 275}
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
            fontSize={isMobile ? 28 : 38}
            fontWeight="medium"
            fill="#000036"
            dy={isMobile ? 110 : 120}
          />
        </Pie>
        {isMobile && (
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            content={() => (
              <ul className="flex flex-wrap justify-center items-center mt-4">
                {sortedData.map((entry, index) => (
                  <li
                    key={`legend-item-${index}`}
                    className="flex flex-col items-center text-center mx-[9px] mb-1"
                  >
                    <div className="flex items-center">
                      <span
                        className="w-3 h-3 mr-2"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-midnight-950">
                        {`${entry.name} (${sortedData[index].percentage}%)`}
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
