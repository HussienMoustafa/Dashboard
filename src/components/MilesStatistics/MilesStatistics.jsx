import "./MilesStatistics.scss";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 pm",
    x: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2 pm",
    x: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3 pm",
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4 pm",
    x: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5 pm",
    x: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6 pm",
    x: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7 pm",
    x: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function MilesStatistics() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="container bg-white rounded-3 px-4 pt-3 h-100">
        <h2 className="mb-3">Miles statistics</h2>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex gap-2">
            <button className="but">Day</button>
            <button className="but">Week</button>
            <button className="but">Month</button>
          </div>
          <div>
            <p className="stat">256 Miles</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#2884FF" />
            <Bar dataKey="x" fill="#F4F5F9" />
            <XAxis dataKey="name" />
          </BarChart>
        </ResponsiveContainer>
        {/* {Example.render()} */}
      </div>
    </div>
  );
}

export default MilesStatistics;
