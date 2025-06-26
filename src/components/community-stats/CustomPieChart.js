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
  const gradientStops = [
    ["#BCC4DE", "#FCFCFD"], // hidden
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
    ["#FCFCFD", "#BCC4DE"],
  ];
  const gradientOffsets = [
    100,
    isTablet ? 31 : 27,
    isTablet ? 60.5 : 53,
    isTablet ? 72.5 : 63.5,
    isTablet ? 77.5 : 69,
    isTablet ? 24.5 : 20.5,
    isTablet ? 48 : 39,
    isTablet ? 58.5 : 50,
    isTablet ? 65.5 : 58.5,
    isTablet ? 67.5 : 62.5,
  ];

  const labelPositions = [
    { x: -290, y: -450 },
    { x: isTablet ? 65 : 50, y: isTablet ? 100 : 50 },
    { x: isTablet ? 67 : 50, y: isTablet ? 170 : 120 },
    { x: isTablet ? 68 : 51, y: isTablet ? 240 : 190 },
    { x: isTablet ? 71 : 51, y: isTablet ? 310 : 260 },
    { x: isTablet ? 743 : 945, y: isTablet ? 100 : 50 },
    { x: isTablet ? 745 : 945, y: isTablet ? 170 : 120 },
    { x: isTablet ? 744 : 945, y: isTablet ? 240 : 190 },
    { x: isTablet ? 744 : 945, y: isTablet ? 310 : 260 },
    { x: isTablet ? 744 : 945, y: isTablet ? 380 : 330 },
  ];

  const polylinePaths = [
    { from: [-270, -450], bend: [-290, -475], to: [-290, -500] },
    {
      from: [isTablet ? 360 : 450, isTablet ? 100 : 50],
      bend: [isTablet ? 300 : 370, isTablet ? 100 : 50],
      to: [isTablet ? 66 : 50, isTablet ? 100 : 50],
    },
    {
      from: [isTablet ? 410 : 515, isTablet ? 115 : 60],
      bend: [isTablet ? 320 : 250, isTablet ? 170 : 122],
      to: [isTablet ? 69 : 53, isTablet ? 170 : 122],
    },
    {
      from: [isTablet ? 440 : 545, isTablet ? 110 : 80],
      bend: [isTablet ? 320 : 220, isTablet ? 240 : 190],
      to: [isTablet ? 69 : 56, isTablet ? 240 : 190],
    },
    {
      from: [isTablet ? 457 : 558, isTablet ? 100 : 100],
      bend: [isTablet ? 320 : 220, isTablet ? 310 : 260],
      to: [isTablet ? 71 : 57, isTablet ? 310 : 260],
    },
    {
      from: [isTablet ? 465 : 584, isTablet ? 100 : 50],
      bend: [isTablet ? 600 : 740, isTablet ? 100 : 50],
      to: [isTablet ? 742 : 944, isTablet ? 100 : 50],
    },
    {
      from: [isTablet ? 471 : 588, isTablet ? 105 : 65],
      bend: [isTablet ? 570 : 745, isTablet ? 171 : 122],
      to: [isTablet ? 744 : 944, isTablet ? 171 : 122],
    },
    {
      from: [isTablet ? 472 : 591, isTablet ? 120 : 80],
      bend: [isTablet ? 630 : 780, isTablet ? 241 : 190],
      to: [isTablet ? 744 : 944, isTablet ? 241 : 190],
    },
    {
      from: [isTablet ? 474 : 590, isTablet ? 130 : 100],
      bend: [isTablet ? 630 : 790, isTablet ? 311 : 260],
      to: [isTablet ? 744 : 944, isTablet ? 311 : 260],
    },
    {
      from: [isTablet ? 475 : 586, isTablet ? 140 : 120],
      bend: [isTablet ? 610 : 785, isTablet ? 381 : 330],
      to: [isTablet ? 743 : 944, isTablet ? 381 : 330],
    },
  ];

  const label = labelPositions[index];
  const path = polylinePaths[index];

  if (!label) return null;

  return (
    <g>
      <defs>
        <linearGradient
          id={`line-gradient-${index}`}
          gradientUnits="userSpaceOnUse"
          x1={path.from[0]}
          y1={path.from[1]}
          x2={path.to[0]}
          y2={path.to[1]}
        >
          <stop offset="0%" stopColor={gradientStops[index][0]} />
          <stop
            offset={`${gradientOffsets[index]}%`}
            stopColor={gradientStops[index][0]}
          />
          <stop
            offset={`${gradientOffsets[index]}%`}
            stopColor={gradientStops[index][1]}
          />
          <stop offset="100%" stopColor={gradientStops[index][1]} />
        </linearGradient>
      </defs>

      {path && (
        <>
          <polyline
            points={`
              ${path.from[0]},${path.from[1]}
              ${path.bend[0]},${path.bend[1]}
              ${path.to[0]},${path.to[1]}
            `}
            stroke={`url(#line-gradient-${index})`}
            strokeWidth={1}
            fill="none"
          />
          <circle
            cx={path.from[0]}
            cy={path.from[1]}
            r={2}
            fill={`${name === "be-great" ? "#959FBD" : "#FCFCFD"}`}
          />
        </>
      )}
      {(() => {
        const isLeftSide = index >= 1 && index <= 4;
        const textAnchor = isLeftSide ? "start" : "end";

        if (name.toLowerCase() === "gretel") {
          return (
            <>
              <image
                href={gretelSvg}
                x={label.x}
                y={label.y - 26}
                width={65}
                height={23}
              />
              <text
                x={label.x}
                y={label.y + 21}
                fontSize={isMobile || isTablet ? 18 : 20}
                textAnchor="start"
              >
                <tspan
                  fill="#727C9E"
                  fontWeight={300}
                  style={{ fontFamily: "CernLight, sans-serif" }}
                >
                  ({value.toFixed(2)}%)
                </tspan>
              </text>
            </>
          );
        }

        return (
          <text
            x={label.x}
            y={label.y}
            fontSize={isMobile || isTablet ? 18 : 20}
            textAnchor={textAnchor}
          >
            <tspan
              x={label.x}
              dy="-0.4em"
              fill="#000036"
              fontWeight={500}
              style={{ fontFamily: "Cern, sans-serif" }}
            >
              {name}
            </tspan>
            <tspan
              x={label.x}
              dy="1.5em"
              fill="#727C9E"
              fontWeight={300}
              style={{ fontFamily: "CernLight, sans-serif" }}
            >
              ({value.toFixed(2)}%)
            </tspan>
          </text>
        );
      })()}
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
