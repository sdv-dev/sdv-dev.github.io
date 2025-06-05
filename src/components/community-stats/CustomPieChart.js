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
  "#AEB5CF",
  "#727C9E",
  "#353E67",
  "#B7E9FF",
  "#0690D1",
  "#000036",
];

export default function CustomPieChart() {
  const width = useWindowWidth();
  const isMobile = width < 768;

  return (
    <div className="w-full flex flex-col items-center relative">
      <img
        src={sdvPieChartLogo}
        alt="SDV logo"
        className="absolute top-[42%] md:top-[46%] z-10"
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
              dy={isMobile ? 120 : 110}
            />
          </Pie>
          <Tooltip />
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
