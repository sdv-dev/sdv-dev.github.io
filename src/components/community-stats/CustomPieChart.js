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
    { x: isTablet ? 65 : 50, y: isTablet ? 100 : 50 },
    { x: isTablet ? 96 : 90, y: isTablet ? 170 : 120 },
    { x: isTablet ? 97 : 90, y: isTablet ? 240 : 190 },
    { x: isTablet ? 101 : 90, y: isTablet ? 310 : 260 },
    // right side
    { x: isTablet ? 703 : 900, y: isTablet ? 100 : 50 },
    { x: isTablet ? 705 : 884, y: isTablet ? 170 : 120 },
    { x: isTablet ? 725 : 924, y: isTablet ? 240 : 190 },
    { x: isTablet ? 725 : 923, y: isTablet ? 310 : 260 },
    { x: isTablet ? 725 : 922, y: isTablet ? 380 : 330 },
  ];

  const polylinePaths = [
    { from: [-270, -450], bend: [-290, -475], to: [-290, -500] }, // hidden
    {
      from: [isTablet ? 380 : 475, isTablet ? 100 : 50],
      bend: [isTablet ? 300 : 370, isTablet ? 100 : 50],
      to: [isTablet ? 175 : 170, isTablet ? 100 : 50],
    },
    {
      from: [isTablet ? 425 : 533, isTablet ? 115 : 60],
      bend: [isTablet ? 320 : 250, isTablet ? 170 : 122],
      to: [isTablet ? 188 : 187, isTablet ? 170 : 122],
    },
    {
      from: [isTablet ? 443 : 550, isTablet ? 110 : 80],
      bend: [isTablet ? 320 : 220, isTablet ? 240 : 190],
      to: [isTablet ? 178 : 187, isTablet ? 240 : 190],
    },
    {
      from: [isTablet ? 456 : 556, isTablet ? 100 : 100],
      bend: [isTablet ? 320 : 220, isTablet ? 310 : 260],
      to: [isTablet ? 180 : 187, isTablet ? 310 : 260],
    },
    // right side
    {
      from: [isTablet ? 464 : 583, isTablet ? 100 : 50],
      bend: [isTablet ? 600 : 740, isTablet ? 100 : 50],
      to: [isTablet ? 600 : 780, isTablet ? 100 : 50],
    },
    {
      from: [isTablet ? 471 : 588, isTablet ? 105 : 65],
      bend: [isTablet ? 570 : 735, isTablet ? 171 : 122],
      to: [isTablet ? 596 : 751, isTablet ? 171 : 122],
    },
    {
      from: [isTablet ? 472 : 591, isTablet ? 120 : 80],
      bend: [isTablet ? 630 : 780, isTablet ? 241 : 190],
      to: [isTablet ? 645 : 825, isTablet ? 241 : 190],
    },
    {
      from: [isTablet ? 474 : 590, isTablet ? 130 : 100],
      bend: [isTablet ? 630 : 790, isTablet ? 311 : 260],
      to: [isTablet ? 650 : 830, isTablet ? 311 : 260],
    },
    {
      from: [isTablet ? 475 : 586, isTablet ? 140 : 120],
      bend: [isTablet ? 610 : 785, isTablet ? 381 : 330],
      to: [isTablet ? 650 : 830, isTablet ? 381 : 330],
    },
  ];

  const strokeColors = Array(10).fill("#727C9E");

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
            fontSize={isMobile || isTablet ? 18 : 20}
            textAnchor="start"
            dominantBaseline="central"
          >
            <tspan fill="#727C9E" fontWeight={400}>
              ({value}%)
            </tspan>
          </text>
        </>
      ) : (
        <text
          x={label.x}
          y={label.y}
          fontSize={isMobile || isTablet ? 18 : 20}
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fill="#000036" fontWeight={500}>
            {name}{" "}
          </tspan>
          <tspan fill="#727C9E" fontWeight={400}>
            ({value}%)
          </tspan>
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
