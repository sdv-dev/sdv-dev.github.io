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
    { x: -290, y: -450 },
    { x: isTablet ? 140 : 130, y: 100 },
    { x: isTablet ? 104 : 90, y: 130 },
    { x: isTablet ? 104 : 90, y: 160 },
    { x: isTablet ? 110 : 100, y: 182 },
    { x: isTablet ? 680 : 873, y: 100 },
    { x: isTablet ? 685 : 880, y: 130 },
    { x: isTablet ? 702 : 897, y: 160 },
    { x: isTablet ? 702 : 897, y: 182 },
    { x: isTablet ? 702 : 897, y: 202 },
  ];

  const lineCoordinates = [
    { from: [-270, -450], to: [-290, -500] },
    { from: [isTablet ? 380 : 475, 100], to: [isTablet ? 250 : 265, 100] },
    { from: [isTablet ? 425 : 523, 130], to: [190, 130] },
    { from: [isTablet ? 430 : 530, 160], to: [190, 160] },
    { from: [isTablet ? 430 : 530, 182], to: [isTablet ? 190 : 190, 182] },
    { from: [isTablet ? 465 : 565, 100], to: [isTablet ? 575 : 755, 100] },
    { from: [isTablet ? 461 : 561, 130], to: [isTablet ? 570 : 760, 130] },
    { from: [isTablet ? 454 : 554, 160], to: [isTablet ? 620 : 805, 160] },
    { from: [isTablet ? 448 : 548, 182], to: [isTablet ? 620 : 805, 182] },
    { from: [isTablet ? 441 : 541, 202], to: [isTablet ? 620 : 805, 202] },
  ];

  const strokeColors = [
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
    "#353E67",
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
            strokeWidth={1}
            fill="none"
          />
          <circle
            cx={line.from[0]}
            cy={line.from[1]}
            r={1.5}
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
