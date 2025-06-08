import React from "react";
import { PieChart, Pie, Cell, Label, Legend } from "recharts";
import sdvPieChartLogo from "../../../static/sdv-pie-chart-logo.svg";
import useWindowWidth from "../../hooks/useviewport";

const data = [
  { name: "SDV", value: 80.7 },
  { name: "Gretel", value: 10.2 },
  { name: "Synthesized", value: 2.8 },
  { name: "YData", value: 2.3 },
  { name: "SynthCity", value: 0.9 },
  { name: "Realtabformer", value: 0.8 },
  { name: "Smartnoise-synth", value: 0.7 },
  { name: "Datomize", value: 0.7 },
  { name: "Be-great", value: 0.7 },
  { name: "MOSTLY AI", value: 0.2 },
];

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

const renderCustomizedLabel = ({ index }) => {
  const name = data[index].name;
  const value = data[index].value;

  const manualLabelPositions = {
    SDV: { x: 290, y: 520 },
    Gretel: { x: 45, y: 190 },
    Synthesized: { x: 120, y: 90 },
    YData: { x: 160, y: 50 },
    SynthCity: { x: 290, y: 40 },
    Realtabformer: { x: 430, y: 40 },
    "Smartnoise-synth": { x: 520, y: 70 },
    Datomize: { x: 530, y: 110 },
    "Be-great": { x: 530, y: 140 },
    "MOSTLY AI": { x: 540, y: 180 },
  };

  const manualLineCoordinates = {
    SDV: { from: [300, 450], to: [290, 500] },
    Gretel: { from: [260, 190], to: [100, 190] },
    Synthesized: { from: [300, 140], to: [190, 95] },
    YData: { from: [330, 100], to: [200, 60] },
    SynthCity: { from: [355, 100], to: [310, 55] },
    Realtabformer: { from: [365, 100], to: [380, 55] },
    "Smartnoise-synth": { from: [375, 100], to: [440, 75] },
    Datomize: { from: [380, 105], to: [475, 110] },
    "Be-great": { from: [387, 110], to: [475, 140] },
    "MOSTLY AI": { from: [387, 120], to: [480, 175] },
  };

  const label = manualLabelPositions[name];
  const line = manualLineCoordinates[name];

  if (!label) return null;

  return (
    <g>
      {line && (
        <>
          <polyline
            points={`${line.from[0]},${line.from[1]} ${line.to[0]},${line.to[1]}`}
            stroke="#353E67"
            strokeWidth={1}
            fill="none"
          />
          <circle cx={line.to[0]} cy={line.to[1]} r={3} fill="#353E67" />
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

export default function CustomPieChart() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[42%] md:top-[54%] z-10"
        draggable={false}
      />
      <PieChart width={isMobile ? 400 : 600} height={550}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 180 : 200}
          dataKey="value"
          startAngle={60}
          endAngle={-300}
          isAnimationActive={false}
          stroke="none"
          labelLine={false}
          label={!isMobile ? renderCustomizedLabel : false}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label
            value="80.7%"
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
                        {`${entry.value} (${data[index].value}%)`}
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
