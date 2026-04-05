// src/components/Heatmap.jsx
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Heatmap = ({ data }) => {
  return (
    <div className="bg-white/10 p-6 rounded-2xl mt-10">
      <h2 className="text-xl font-bold text-center mb-4">
        🔥 GitHub Contributions
      </h2>

      <CalendarHeatmap
        startDate={new Date("2025-01-01")}
        endDate={new Date("2025-12-31")}
        values={data}
      />
    </div>
  );
};

export default Heatmap;