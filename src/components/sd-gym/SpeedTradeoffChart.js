import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const trendLineData = [
  { x: 0.5, y: 0.5 },
  { x: 1, y: 1 },
  { x: 1.5, y: 1.5 },
  { x: 2, y: 2.2 },
  { x: 2.5, y: 3 },
  { x: 3, y: 4 },
  { x: 3.5, y: 5.3 },
  { x: 4, y: 7 },
];

export default function SpeedTradeoffChart() {
  return (
    <ScatterChart
      width={700}
      height={450}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      className="mx-auto mt-20"
    >
      <CartesianGrid />
      <XAxis
        type="number"
        dataKey="x"
        name="Time"
        label={{ value: "Time", position: "insideBottom", offset: -20 }}
      />
      <YAxis
        type="number"
        dataKey="y"
        name="Quality"
        label={{ value: "Quality", angle: -90, position: "insideLeft" }}
      />
      <Tooltip
        cursor={{ strokeDasharray: "3 3" }}
        formatter={(value, name) => [
          `${value}`,
          name === "x" ? "Time" : "Quality",
        ]}
        content={({ payload }) =>
          payload && payload.length ? (
            <div
              style={{
                background: "#fff",
                padding: "5px",
                border: "1px solid #ccc",
              }}
            >
              <strong>{payload[0].payload.model}</strong>
              <br />
              Time: {payload[0].payload.x}
              <br />
              Quality: {payload[0].payload.y}
            </div>
          ) : null
        }
      />
      <Legend />
      <Scatter
        data={trendLineData}
        line={{ stroke: "#0690D1", strokeWidth: 4 }}
        shape={() => null}
        legendType="none"
      />
    </ScatterChart>
  );
}
