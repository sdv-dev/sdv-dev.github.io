import React from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import sdvPieChartLogo from "../../../static/sdv-pie-chart-logo.svg";
import gretelSvg from "../../../static/gretel.svg";
import useWindowWidth from "../../hooks/useviewport";

const COLORS = [
  "#01E0C9",
  "#03AFF1",
  "#77DAFF",
  "#0690D1",
  "#C1C8DB",
  "#959FBD",
  "#2EC8FF",
  "#E5E8F2",
  "#0690D1",
  "#525C80",
];

const renderCustomizedLabel = ({ name, value, index, isTablet, isMobile }) => {
  const labelPositions = [
    { x: -290, y: -450 }, // hidden
    { x: isTablet ? 140 : 50, y: 50 },
    { x: isTablet ? 104 : 90, y: 120 },
    { x: isTablet ? 104 : 90, y: 190 },
    { x: isTablet ? 110 : 90, y: 260 },
    // right side
    { x: isTablet ? 680 : 900, y: 50 },
    { x: isTablet ? 685 : 884, y: 120 },
    { x: isTablet ? 702 : 924, y: 190 },
    { x: isTablet ? 702 : 923, y: 260 },
    { x: isTablet ? 702 : 922, y: 330 },
  ];

  const polylinePaths = [
    { from: [-270, -450], bend: [-290, -475], to: [-290, -500] }, // hidden
    {
      from: [isTablet ? 380 : 475, 50],
      bend: [isTablet ? 300 : 370, 50],
      to: [isTablet ? 250 : 170, 50],
    },
    {
      from: [isTablet ? 425 : 533, 60],
      bend: [isTablet ? 320 : 250, 122],
      to: [187, 122],
    },
    {
      from: [isTablet ? 430 : 550, 80],
      bend: [isTablet ? 320 : 220, 190],
      to: [187, 190],
    },
    {
      from: [isTablet ? 430 : 556, 100],
      bend: [isTablet ? 320 : 220, 260],
      to: [187, 260],
    },
    // right side
    {
      from: [isTablet ? 465 : 583, 50],
      bend: [isTablet ? 640 : 740, 50],
      to: [isTablet ? 755 : 780, 50],
    },
    {
      from: [isTablet ? 461 : 588, 65],
      bend: [isTablet ? 640 : 735, 122],
      to: [isTablet ? 760 : 751, 122],
    },
    {
      from: [isTablet ? 454 : 591, 80],
      bend: [isTablet ? 670 : 780, 190],
      to: [isTablet ? 805 : 825, 190],
    },
    {
      from: [isTablet ? 448 : 590, 100],
      bend: [isTablet ? 670 : 790, 260],
      to: [isTablet ? 805 : 830, 260],
    },
    {
      from: [isTablet ? 441 : 586, 120],
      bend: [isTablet ? 670 : 785, 330],
      to: [isTablet ? 805 : 830, 330],
    },
  ];

  const strokeColors = Array(10).fill("#353E67");

  const label = labelPositions[index];
  const path = polylinePaths[index];

  if (!label) return null;

  return (
    <g>
      {path && (
        <>
          <polyline
            points={`
              ${path.from[0]},${path.from[1]}
              ${path.bend[0]},${path.bend[1]}
              ${path.to[0]},${path.to[1]}
            `}
            stroke={strokeColors[index]}
            strokeWidth={1}
            fill="none"
          />
          <circle
            cx={path.from[0]}
            cy={path.from[1]}
            r={1.4}
            fill={strokeColors[index]}
          />
        </>
      )}
      {name.toLowerCase() === "gretel" ? (
        <>
          <image
            href={gretelSvg}
            x={label.x - 40}
            y={label.y - 10}
            width={65}
            height={23}
          />
          <text
            x={label.x + 30}
            y={label.y}
            color="#000036"
            fontSize={isMobile || isTablet ? 18 : 20}
            fontWeight={500}
            textAnchor="start"
            dominantBaseline="central"
          >
            ({value}%)
          </text>
        </>
      ) : (
        <text
          x={label.x}
          y={label.y}
          fontSize={isMobile || isTablet ? 18 : 20}
          color="#000036"
          fontWeight={500}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {`${name} (${value}%)`}
        </text>
      )}
    </g>
  );
};

export default function CustomPieChart({ data }) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width > 768 && width < 1024;
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[42%] md:top-[55%] z-10"
        draggable={false}
      />
      <PieChart width={isMobile ? 400 : isTablet ? 800 : 1000} height={550}>
        <Pie
          data={sortedData}
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 180 : isTablet ? 220 : 275}
          dataKey="percentage"
          startAngle={60}
          endAngle={-300}
          isAnimationActive={false}
          stroke="none"
          labelLine={false}
          label={
            !isMobile
              ? (props) =>
                  renderCustomizedLabel({ ...props, isTablet, isMobile })
              : false
          }
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
