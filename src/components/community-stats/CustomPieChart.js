import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
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
    isMobile ? 21 : isTablet ? 31 : 27,
    isMobile ? 60 : isTablet ? 60.5 : 53,
    isMobile ? 73 : isTablet ? 72.5 : 63.5,
    isMobile ? 75.5 : isTablet ? 77.5 : 69,
    isMobile ? 5.5 : isTablet ? 24.5 : 20.5,
    isMobile ? 47 : isTablet ? 48 : 39,
    isMobile ? 66 : isTablet ? 58.5 : 50,
    isMobile ? 72 : isTablet ? 65.5 : 58.5,
    isMobile ? 69 : isTablet ? 67.5 : 62.5,
  ];

  const labelPositions = [
    { x: -290, y: -450 },
    {
      x: isMobile ? 2 : isTablet ? 65 : 50,
      y: isMobile ? 40 : isTablet ? 100 : 50,
    },
    {
      x: isMobile ? 3 : isTablet ? 67 : 50,
      y: isMobile ? 90 : isTablet ? 170 : 120,
    },
    {
      x: isMobile ? 4 : isTablet ? 68 : 51,
      y: isMobile ? 140 : isTablet ? 240 : 190,
    },
    {
      x: isMobile ? 5 : isTablet ? 71 : 51,
      y: isMobile ? 190 : isTablet ? 310 : 260,
    },
    {
      x: isMobile ? 374 : isTablet ? 743 : 945,
      y: isMobile ? 40 : isTablet ? 100 : 50,
    },
    {
      x: isMobile ? 374 : isTablet ? 745 : 945,
      y: isMobile ? 90 : isTablet ? 170 : 120,
    },
    {
      x: isMobile ? 373 : isTablet ? 744 : 945,
      y: isMobile ? 140 : isTablet ? 240 : 190,
    },
    {
      x: isMobile ? 372 : isTablet ? 744 : 945,
      y: isMobile ? 190 : isTablet ? 310 : 260,
    },
    {
      x: isMobile ? 372 : isTablet ? 744 : 945,
      y: isMobile ? 240 : isTablet ? 380 : 330,
    },
  ];

  const polylinePaths = [
    { from: [-270, -450], bend: [-290, -475], to: [-290, -500] },
    {
      from: [
        isMobile ? 165 : isTablet ? 360 : 453,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
      bend: [
        isMobile ? 5 : isTablet ? 300 : 370,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
      to: [
        isMobile ? 50 : isTablet ? 66 : 50,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
    },
    {
      from: [
        isMobile ? 195 : isTablet ? 410 : 516,
        isMobile ? 50 : isTablet ? 115 : 60,
      ],
      bend: [
        isMobile ? 85 : isTablet ? 320 : 250,
        isMobile ? 90 : isTablet ? 170 : 122,
      ],
      to: [
        isMobile ? 5 : isTablet ? 69 : 53,
        isMobile ? 90 : isTablet ? 170 : 122,
      ],
    },
    {
      from: [
        isMobile ? 208 : isTablet ? 440 : 545,
        isMobile ? 60 : isTablet ? 110 : 80,
      ],
      bend: [
        isMobile ? 70 : isTablet ? 320 : 220,
        isMobile ? 140 : isTablet ? 240 : 190,
      ],
      to: [
        isMobile ? 5 : isTablet ? 69 : 56,
        isMobile ? 140 : isTablet ? 240 : 190,
      ],
    },
    {
      from: [
        isMobile ? 215 : isTablet ? 457 : 558,
        isMobile ? 65 : isTablet ? 100 : 100,
      ],
      bend: [
        isMobile ? 74 : isTablet ? 320 : 220,
        isMobile ? 190 : isTablet ? 310 : 260,
      ],
      to: [
        isMobile ? 5 : isTablet ? 71 : 57,
        isMobile ? 190 : isTablet ? 310 : 260,
      ],
    },
    {
      from: [
        isMobile ? 228 : isTablet ? 465 : 584,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
      bend: [
        isMobile ? 228 : isTablet ? 600 : 740,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
      to: [
        isMobile ? 373 : isTablet ? 742 : 944,
        isMobile ? 40 : isTablet ? 100 : 50,
      ],
    },
    {
      from: [
        isMobile ? 231 : isTablet ? 471 : 588,
        isMobile ? 47 : isTablet ? 105 : 65,
      ],
      bend: [
        isMobile ? 291 : isTablet ? 570 : 745,
        isMobile ? 90 : isTablet ? 171 : 122,
      ],
      to: [
        isMobile ? 373 : isTablet ? 744 : 944,
        isMobile ? 90 : isTablet ? 171 : 122,
      ],
    },
    {
      from: [
        isMobile ? 233 : isTablet ? 472 : 591,
        isMobile ? 53 : isTablet ? 120 : 80,
      ],
      bend: [
        isMobile ? 307 : isTablet ? 630 : 780,
        isMobile ? 140 : isTablet ? 241 : 190,
      ],
      to: [
        isMobile ? 373 : isTablet ? 744 : 944,
        isMobile ? 140 : isTablet ? 241 : 190,
      ],
    },
    {
      from: [
        isMobile ? 234 : isTablet ? 474 : 590,
        isMobile ? 60 : isTablet ? 130 : 100,
      ],
      bend: [
        isMobile ? 300 : isTablet ? 630 : 790,
        isMobile ? 190 : isTablet ? 311 : 260,
      ],
      to: [
        isMobile ? 373 : isTablet ? 744 : 944,
        isMobile ? 190 : isTablet ? 311 : 260,
      ],
    },
    {
      from: [
        isMobile ? 232 : isTablet ? 475 : 586,
        isMobile ? 70 : isTablet ? 140 : 120,
      ],
      bend: [
        isMobile ? 266 : isTablet ? 610 : 785,
        isMobile ? 240 : isTablet ? 381 : 330,
      ],
      to: [
        isMobile ? 373 : isTablet ? 743 : 944,
        isMobile ? 240 : isTablet ? 381 : 330,
      ],
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
            r={isMobile ? 1 : 2}
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
                y={isMobile ? label.y - 23 : label.y - 26}
                width={isMobile ? 50 : 65}
                height={isMobile ? 20 : 23}
              />
              <text
                x={label.x}
                y={isMobile ? label.y + 16 : label.y + 21}
                fontSize={isMobile ? 14 : isTablet ? 18 : 20}
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
            fontSize={isMobile ? 14 : isTablet ? 18 : 20}
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
        className="absolute top-[52%] md:top-[55%] z-10 w-[90px] h-[50px] md:w-[108px] md:h-[58px]"
        draggable={false}
      />
      <PieChart
        width={isMobile ? 375 : isTablet ? 800 : 1000}
        height={isMobile ? 300 : 550}
      >
        <Pie
          data={sortedData}
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 120 : isTablet ? 220 : 275}
          dataKey="percentage"
          startAngle={60}
          endAngle={-300}
          isAnimationActive={false}
          stroke="none"
          labelLine={false}
          label={(props) =>
            renderCustomizedLabel({ ...props, isTablet, isMobile })
          }
        >
          {sortedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label
            value={`${sortedData[0]?.percentage}%`}
            position="center"
            fontSize={isMobile ? 20 : 38}
            fontWeight="medium"
            fill="#000036"
            dy={isMobile ? 70 : 120}
          />
        </Pie>
      </PieChart>
    </div>
  );
}
