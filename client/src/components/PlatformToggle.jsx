// // src/components/PlatformToggle.jsx
// const PlatformToggle = ({ platform, setPlatform }) => {
//   return (
//     <div className="flex justify-center gap-4 mt-6">
//       {["codeforces", "leetcode"].map((p) => (
//         <button
//           key={p}
//           onClick={() => setPlatform(p)}
//           className={`px-4 py-2 rounded-lg ${
//             platform === p
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-black"
//           }`}
//         >
//           {p.toUpperCase()}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default PlatformToggle;




// src/components/PlatformToggle.jsx

const PlatformToggle = ({ platform, setPlatform }) => {
  const platforms = [
    { name: "codeforces", color: "bg-orange-500" },
    { name: "leetcode", color: "bg-yellow-500" },
    { name: "github", color: "bg-gray-800" },
    { name: "hackerrank", color: "bg-green-500" },
    { name: "linkedin", color: "bg-blue-700" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {platforms.map((p) => (
        <button
          key={p.name}
          onClick={() => setPlatform(p.name)}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
            platform === p.name
              ? `${p.color} text-white scale-105 shadow-lg`
              : "bg-gray-200 text-black hover:scale-105"
          }`}
        >
          {p.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default PlatformToggle;