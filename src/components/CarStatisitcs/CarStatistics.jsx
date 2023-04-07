import "./CarStatistics.scss";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "7 am",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "9 am",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11 am",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "1 pm",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "3 pm",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5 pm",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7 pm",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function CarStatistics() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="container bg-white rounded-3 px-4 pt-3 h-100">
        <h2 className="mb-3">Car statistics</h2>
        <div className="stats d-flex justify-content-between mb-3">
          <div>
            <p className="stat">20 February 2022</p>
          </div>
          <div className="d-flex gap-2">
            <button className="but2">Day</button>
            <button className="but2">Week</button>
            <button className="but2">Month</button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="75%">
          <AreaChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FF764C"
              fill="#FF764C3D"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
