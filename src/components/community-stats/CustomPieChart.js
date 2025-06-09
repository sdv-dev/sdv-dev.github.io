import React from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import sdvPieChartLogo from "../../../static/sdv-pie-chart-logo.svg";
import gretelSvg from "../../../static/gretel.svg";
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

const renderCustomizedLabel = ({ name, value, index, isTablet }) => {
  const labelPositions = [
    { x: -290, y: -450 },
    { x: 140, y: 100 },
    { x: 105, y: 130 },
    { x: 106, y: 160 },
    { x: isTablet ? 620 : 820, y: 100 },
    { x: isTablet ? 680 : 870, y: 130 },
    { x: isTablet ? 680 : 850, y: 160 },
    { x: isTablet ? 690 : 853, y: 190 },
  ];

  const lineCoordinates = [
    { from: [-270, -450], to: [-290, -500] },
    { from: [isTablet ? 300 : 370, 100], to: [250, 100] },
    { from: [isTablet ? 360 : 465, 130], to: [180, 130] },
    { from: [isTablet ? 400 : 500, 160], to: [190, 160] },
    { from: [isTablet ? 430 : 530, 100], to: [isTablet ? 570 : 770, 100] },
    { from: [isTablet ? 445 : 545, 130], to: [isTablet ? 580 : 770, 130] },
    { from: [isTablet ? 450 : 550, 160], to: [isTablet ? 600 : 770, 160] },
    { from: [isTablet ? 446 : 545, 190], to: [isTablet ? 610 : 770, 190] },
  ];

  const strokeColors = [
    "#000036",
    "#000036",
    "#000036",
    "#000036",
    "#000036",
    "#000036",
    "#000036",
    "#000036",
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
            fill="#000036"
            fontSize={18}
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
          fill="#000036"
          fontSize={18}
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
              ? (props) => renderCustomizedLabel({ ...props, isTablet })
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
