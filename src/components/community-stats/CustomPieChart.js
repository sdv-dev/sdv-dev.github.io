import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";
import sdvPieChartLogo from "../../../static/sdv-pie-chart-logo.svg";
import useWindowWidth from "../../hooks/useviewport";

const data = [
  { name: "SDV", value: 80.7 },
  { name: "gretel", value: 10.2 },
  { name: "Synthesized", value: 2.8 },
  { name: "YData", value: 2.3 },
  { name: "SynthCity", value: 0.9 },
  { name: "realtabformer", value: 0.8 },
  { name: "smartnoise-synth", value: 0.7 },
  { name: "datomize", value: 0.7 },
  { name: "be-great", value: 0.7 },
  { name: "MOSTLY AI", value: 0.2 },
];

const COLORS = [
  "#01E0C9",
  "#03AFF1",
  "#77DAFF",
  "#959FBD",
  "#000036",
  "#353E67",
  "#B7E9FF",
  "#727C9E",
  "#1376B1",
  "#525C80",
];

export default function CustomPieChart() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[48%] md:top-[50%] z-10"
        draggable={false}
      />
      <ResponsiveContainer width={isMobile ? 400 : 600} height={550}>
        <PieChart>
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
              dy={isMobile ? 130 : 115}
            />
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            formatter={(value, _, index) => `${value} (${data[index].value}%)`}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
