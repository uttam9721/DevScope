// // // import { useState } from "react";
// // // import SearchBar from "./components/SearchBar";
// // // import PlatformToggle from "./components/PlatformToggle";
// // // import ProfileCard from "./components/ProfileCard";
// // // import StatsChart from "./components/StatsChart";

// // // // ✅ Dono import karo
// // // import {
// // //   getCodeforcesData,
// // //   getLeetCodeData,
// // // } from "./services/api";

// // // function App() {
// // //   const [platform, setPlatform] = useState("codeforces");
// // //   const [userData, setUserData] = useState(null);
// // //   const [chartData, setChartData] = useState(null);

// // //   const handleSearch = async (username) => {
// // //     try {
// // //       if (platform === "codeforces") {
// // //         const data = await getCodeforcesData(username);
// // //         setUserData(data);
// // //         setChartData(null);
// // //       } else {
// // //         const data = await getLeetCodeData(username);
// // //         setUserData(data);

// // //         const stats = data.submitStats.acSubmissionNum;

// // //         setChartData([
// // //           { name: "Easy", value: stats[1].count },
// // //           { name: "Medium", value: stats[2].count },
// // //           { name: "Hard", value: stats[3].count },
// // //         ]);
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("User not found or API error");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-4">
// // //       <h1 className="text-3xl font-bold text-center mt-6">
// // //         Coding Profile Analyzer 🚀
// // //       </h1>

// // //       <PlatformToggle
// // //         platform={platform}
// // //         setPlatform={setPlatform}
// // //       />

// // //       <SearchBar onSearch={handleSearch} />

// // //       <ProfileCard data={userData} platform={platform} />

// // //       <StatsChart data={chartData} />
// // //     </div>
// // //   );
// // // }

// // // export default App;



// // import { useState } from "react";
// // import {
// //   getCodeforcesData,
// //   getLeetCodeData,
// // } from "./services/api";

// // import SearchBar from "./components/SearchBar";
// // import PlatformToggle from "./components/PlatformToggle";
// // import StatsChart from "./components/StatsChart";

// // function App() {
// //   const [platform, setPlatform] = useState("codeforces");
// //   const [userData, setUserData] = useState(null);
// //   const [chartData, setChartData] = useState(null);
// //   const [totalSolved, setTotalSolved] = useState(0);

// //   const handleSearch = async (username) => {
// //     try {
// //       if (platform === "codeforces") {
// //         const data = await getCodeforcesData(username);

// //         setUserData({
// //           name: data.handle,
// //           rating: data.rating,
// //           rank: data.rank,
// //         });

// //         setChartData(null);
// //         setTotalSolved(0);
// //       }

// //       if (platform === "leetcode") {
// //         const data = await getLeetCodeData(username);

// //         const stats = data.submitStats.acSubmissionNum;

// //         setUserData({
// //           name: data.username,
// //         });

// //         setChartData([
// //           { name: "Easy", value: stats[1].count },
// //           { name: "Medium", value: stats[2].count },
// //           { name: "Hard", value: stats[3].count },
// //         ]);

// //         setTotalSolved(stats[0].count);
// //       }

// //       if (platform === "hackerrank") {
// //         // placeholder (backend later)
// //         setUserData({
// //           name: username,
// //         });

// //         setChartData([
// //           { name: "Easy", value: 20 },
// //           { name: "Medium", value: 10 },
// //           { name: "Hard", value: 5 },
// //         ]);

// //         setTotalSolved(35);
// //       }
// //     } catch (err) {
// //       alert("Error fetching data");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6">
// //       <h1 className="text-4xl font-bold text-center mb-6">
// //         🚀 Coding Profile Analyzer
// //       </h1>

// //       <PlatformToggle
// //         platform={platform}
// //         setPlatform={setPlatform}
// //       />

// //       <SearchBar onSearch={handleSearch} />

// //       {userData && (
// //         <div className="mt-10 grid md:grid-cols-3 gap-6">
          
// //           {/* Profile Card */}
// //           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
// //             <h2 className="text-xl font-bold">👤 Profile</h2>
// //             <p className="mt-2">Name: {userData.name}</p>
// //             {userData.rating && <p>Rating: {userData.rating}</p>}
// //             {userData.rank && <p>Rank: {userData.rank}</p>}
// //           </div>

// //           {/* Total Solved */}
// //           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center">
// //             <h2 className="text-xl font-bold">✅ Total Solved</h2>
// //             <p className="text-3xl mt-4">{totalSolved}</p>
// //           </div>

// //           {/* Platform */}
// //           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center">
// //             <h2 className="text-xl font-bold">🌐 Platform</h2>
// //             <p className="mt-4 capitalize">{platform}</p>
// //           </div>
// //         </div>
// //       )}

// //       {/* Chart */}
// //       {chartData && (
// //         <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
// //           <h2 className="text-xl font-bold text-center mb-4">
// //             📊 Problem Distribution
// //           </h2>
// //           <StatsChart data={chartData} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;





// import { useState } from "react";
// import {
//   getCodeforcesData,
//   getLeetCodeData,
//   getGitHubData,
//   getHackerRankData,
//   getLinkedInData,
// } from "./services/api";

// import SearchBar from "./components/SearchBar";
// import PlatformToggle from "./components/PlatformToggle";
// import StatsChart from "./components/StatsChart";

// function App() {
//   const [platform, setPlatform] = useState("codeforces");
//   const [userData, setUserData] = useState(null);
//   const [chartData, setChartData] = useState(null);
//   const [totalSolved, setTotalSolved] = useState(0);

//   const handleSearch = async (username) => {
//     try {
//       /* ================= CODEFORCES ================= */
//       if (platform === "codeforces") {
//         const data = await getCodeforcesData(username);

//         setUserData({
//           name: data.handle,
//           rating: data.rating,
//           rank: data.rank,
//         });

//         setChartData(null);
//         setTotalSolved(0);
//       }

//       /* ================= LEETCODE ================= */
//       if (platform === "leetcode") {
//         const data = await getLeetCodeData(username);

//         const stats = data.submitStats.acSubmissionNum;

//         setUserData({
//           name: data.username,
//         });

//         setChartData([
//           { name: "Easy", value: stats[1].count },
//           { name: "Medium", value: stats[2].count },
//           { name: "Hard", value: stats[3].count },
//         ]);

//         setTotalSolved(stats[0].count);
//       }

//       /* ================= GITHUB ================= */
//       if (platform === "github") {
//         const data = await getGitHubData(username);

//         setUserData({
//           name: data.login,
//           avatar: data.avatar_url,
//           followers: data.followers,
//           repos: data.public_repos,
//         });

//         setChartData(null);
//         setTotalSolved(data.public_repos);
//       }

//       /* ================= HACKERRANK ================= */
//       if (platform === "hackerrank") {
//         const data = await getHackerRankData(username);

//         setUserData({
//           name: data.username,
//           badges: data.badges,
//         });

//         setChartData([
//           { name: "Easy", value: 20 },
//           { name: "Medium", value: 10 },
//           { name: "Hard", value: 5 },
//         ]);

//         setTotalSolved(data.solved);
//       }

//       /* ================= LINKEDIN ================= */
//       if (platform === "linkedin") {
//         const data = await getLinkedInData(username);

//         setUserData({
//           name: username,
//           link: data.profileUrl,
//         });

//         setChartData(null);
//         setTotalSolved(0);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error fetching data");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">
//         🚀 Coding Profile Analyzer
//       </h1>

//       <PlatformToggle
//         platform={platform}
//         setPlatform={setPlatform}
//       />

//       <SearchBar onSearch={handleSearch} />

//       {/* ================= PROFILE SECTION ================= */}
//       {userData && (
//         <div className="mt-10 grid md:grid-cols-3 gap-6">

//           {/* PROFILE CARD */}
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center">

//             {userData.avatar && (
//               <img
//                 src={userData.avatar}
//                 alt="avatar"
//                 className="w-20 h-20 rounded-full mx-auto mb-4"
//               />
//             )}

//             <h2 className="text-xl font-bold">👤 {userData.name}</h2>

//             {userData.rating && <p>⭐ Rating: {userData.rating}</p>}
//             {userData.rank && <p>🏆 Rank: {userData.rank}</p>}

//             {userData.followers && (
//               <p>👥 Followers: {userData.followers}</p>
//             )}

//             {userData.repos && (
//               <p>📦 Repositories: {userData.repos}</p>
//             )}

//             {userData.badges && (
//               <p>🏅 Badges: {userData.badges}</p>
//             )}

//             {userData.link && (
//               <a
//                 href={userData.link}
//                 target="_blank"
//                 className="text-blue-400 underline"
//               >
//                 🔗 View LinkedIn
//               </a>
//             )}
//           </div>

//           {/* TOTAL SOLVED */}
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center">
//             <h2 className="text-xl font-bold">✅ Total</h2>
//             <p className="text-3xl mt-4">{totalSolved}</p>
//           </div>

//           {/* PLATFORM */}
//           <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center">
//             <h2 className="text-xl font-bold">🌐 Platform</h2>
//             <p className="mt-4 capitalize">{platform}</p>
//           </div>
//         </div>
//       )}

//       {/* ================= CHART ================= */}
//       {chartData && (
//         <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
//           <h2 className="text-xl font-bold text-center mb-4">
//             📊 Problem Distribution
//           </h2>
//           <StatsChart data={chartData} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import {
  getCodeforcesData,
  getLeetCodeData,
  getGitHubData,
  getHackerRankData,
  getLinkedInData,
} from "./services/api";

import SearchBar from "./components/SearchBar";
import PlatformToggle from "./components/PlatformToggle";
import StatsChart from "./components/StatsChart";
import Heatmap from "./components/Heatmap";
import CompareUsers from "./components/CompareUsers";

import { motion } from "framer-motion";

function App() {
  const [platform, setPlatform] = useState("codeforces");
  const [userData, setUserData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [totalSolved, setTotalSolved] = useState(0);

  const [compareMode, setCompareMode] = useState(false);
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);

  const [lastData, setLastData] = useState(null);

  const handleSearch = async (username) => {
    try {
      let data;

      /* ================= CODEFORCES ================= */
      if (platform === "codeforces") {
        data = await getCodeforcesData(username);

        data = {
          name: data.handle,
          rating: data.rating,
          rank: data.rank,
        };

        setChartData(null);
        setTotalSolved(0);
      }

      /* ================= LEETCODE ================= */
      if (platform === "leetcode") {
        const res = await getLeetCodeData(username);

        const stats = res.submitStats.acSubmissionNum;

        data = {
          name: res.username,
        };

        setChartData([
          { name: "Easy", value: stats[1].count },
          { name: "Medium", value: stats[2].count },
          { name: "Hard", value: stats[3].count },
        ]);

        setTotalSolved(stats[0].count);
      }

      /* ================= GITHUB ================= */
      if (platform === "github") {
        const res = await getGitHubData(username);

        data = {
          name: res.login,
          avatar: res.avatar_url,
          followers: res.followers,
          repos: res.public_repos,
        };

        setChartData(null);
        setTotalSolved(res.public_repos);
      }

      /* ================= HACKERRANK ================= */
      if (platform === "hackerrank") {
        const res = await getHackerRankData(username);

        data = {
          name: res.username,
          badges: res.badges,
        };

        setChartData([
          { name: "Easy", value: 20 },
          { name: "Medium", value: 10 },
          { name: "Hard", value: 5 },
        ]);

        setTotalSolved(res.solved);
      }

      /* ================= LINKEDIN ================= */
      if (platform === "linkedin") {
        const res = await getLinkedInData(username);

        data = {
          name: username,
          link: res.profileUrl,
        };

        setChartData(null);
        setTotalSolved(0);
      }

      setUserData(data);

      /* ================= COMPARE MODE ================= */
      if (compareMode) {
        if (!user1) {
          setUser1(data);
        } else {
          setUser2(data);
        }
      }

      setLastData(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching data");
    }
  };

  // dummy heatmap
  const heatmapData = [
    { date: "2025-01-01", count: 2 },
    { date: "2025-01-02", count: 5 },
    { date: "2025-01-03", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-6"
      >
        🚀 Coding Profile Analyzer
      </motion.h1>

      {/* TOGGLE */}
      <PlatformToggle
        platform={platform}
        setPlatform={setPlatform}
      />

      <SearchBar onSearch={handleSearch} />

      {/* COMPARE BUTTON */}
      <div className="text-center mt-4">
        <button
          onClick={() => setCompareMode(!compareMode)}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          {compareMode ? "Disable Compare" : "Compare Users"}
        </button>
      </div>

      {/* PROFILE SECTION */}
      {userData && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >

          {/* PROFILE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-center"
          >
            {userData.avatar && (
              <img
                src={userData.avatar}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
            )}

            <h2 className="text-xl font-bold">👤 {userData.name}</h2>

            {userData.rating && <p>⭐ {userData.rating}</p>}
            {userData.rank && <p>🏆 {userData.rank}</p>}
            {userData.followers && <p>👥 {userData.followers}</p>}
            {userData.repos && <p>📦 {userData.repos}</p>}
            {userData.badges && <p>🏅 {userData.badges}</p>}

            {userData.link && (
              <a href={userData.link} target="_blank">
                🔗 LinkedIn
              </a>
            )}
          </motion.div>

          {/* TOTAL */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center"
          >
            <h2>Total</h2>
            <p className="text-3xl">{totalSolved}</p>
          </motion.div>

          {/* PLATFORM */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center"
          >
            <h2>Platform</h2>
            <p>{platform}</p>
          </motion.div>
        </motion.div>
      )}

      {/* CHART */}
      {chartData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-white/10 p-6 rounded-2xl"
        >
          <StatsChart data={chartData} />
        </motion.div>
      )}

      {/* HEATMAP */}
      {platform === "github" && <Heatmap data={heatmapData} />}

      {/* COMPARE */}
      <CompareUsers user1={user1} user2={user2} />

    </div>
  );
}

export default App;