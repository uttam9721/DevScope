// // src/components/StatsChart.jsx
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
// } from "recharts";

// const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

// const StatsChart = ({ data }) => {
//   if (!data) return null;

//   return (
//     <div className="flex justify-center mt-10">
//       <PieChart width={300} height={300}>
//         <Pie
//           data={data}
//           dataKey="value"
//           outerRadius={100}
//           label
//         >
//           {data.map((entry, index) => (
//             <Cell key={index} fill={COLORS[index]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   );
// };

// export default StatsChart;















import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

const StatsChart = ({ data }) => {
  return (
    <div className="flex justify-center">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default StatsChart;