// // // export const getCodeforcesData = async (username) => {
// // //   const res = await fetch(
// // //     `https://codeforces.com/api/user.info?handles=${username}`
// // //   );
// // //   const data = await res.json();
// // //   return data.result[0];
// // // };

// // // export const getLeetCodeData = async (username) => {
// // //   const res = await fetch("http://localhost:5000/leetcode", {
// // //     method: "POST",
// // //     headers: {
// // //       "Content-Type": "application/json",
// // //     },
// // //     body: JSON.stringify({ username }),
// // //   });

// // //   return res.json();
// // // };






// // // src/services/api.js

// // export const getCodeforces = async (username) => {
// //   const res = await fetch(`http://localhost:5000/codeforces/${username}`);
// //   return res.json();
// // };

// // export const getLeetCode = async (username) => {
// //   const res = await fetch("http://localhost:5000/leetcode", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ username }),
// //   });
// //   return res.json();
// // };

// // export const getGitHub = async (username) => {
// //   const res = await fetch("http://localhost:5000/github", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ username }),
// //   });
// //   return res.json();
// // };

// // export const getHackerRank = async (username) => {
// //   const res = await fetch(`http://localhost:5000/hackerrank/${username}`);
// //   return res.json();
// // };

// // export const getLinkedIn = async (username) => {
// //   const res = await fetch("http://localhost:5000/linkedin", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ username }),
// //   });
// //   return res.json();
// // };



// // src/services/api.js

// const BASE_URL = "http://localhost:5000";

// /* ================= CODEFORCES ================= */
// export const getCodeforcesData = async (username) => {
//   try {
//     const res = await fetch(`${BASE_URL}/codeforces/${username}`);
//     if (!res.ok) throw new Error("Codeforces API error");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Codeforces Error:", error);
//     throw error;
//   }
// };

// /* ================= LEETCODE ================= */
// export const getLeetCodeData = async (username) => {
//   try {
//     const res = await fetch(`${BASE_URL}/leetcode`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username }),
//     });

//     if (!res.ok) throw new Error("LeetCode API error");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("LeetCode Error:", error);
//     throw error;
//   }
// };

// /* ================= GITHUB ================= */
// export const getGitHubData = async (username) => {
//   try {
//     const res = await fetch(`${BASE_URL}/github`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username }),
//     });

//     if (!res.ok) throw new Error("GitHub API error");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("GitHub Error:", error);
//     throw error;
//   }
// };

// /* ================= HACKERRANK ================= */
// export const getHackerRankData = async (username) => {
//   try {
//     const res = await fetch(`${BASE_URL}/hackerrank/${username}`);

//     if (!res.ok) throw new Error("HackerRank API error");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("HackerRank Error:", error);
//     throw error;
//   }
// };

// /* ================= LINKEDIN ================= */
// export const getLinkedInData = async (username) => {
//   try {
//     const res = await fetch(`${BASE_URL}/linkedin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username }),
//     });

//     if (!res.ok) throw new Error("LinkedIn API error");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("LinkedIn Error:", error);
//     throw error;
//   }
// };






const BASE_URL = "http://localhost:5000";

/* ================= CODEFORCES ================= */
export const getCodeforcesData = async (username) => {
  const res = await fetch(`${BASE_URL}/codeforces/${username}`);
  return res.json();
};

/* ================= LEETCODE ================= */
export const getLeetCodeData = async (username) => {
  const res = await fetch(`${BASE_URL}/leetcode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  return res.json();
};

/* ================= GITHUB ================= */
export const getGitHubData = async (username) => {
  const res = await fetch(`${BASE_URL}/github/${username}`);
  return res.json();
};

/* ================= HACKERRANK ================= */
export const getHackerRankData = async (username) => {
  const res = await fetch(`${BASE_URL}/hackerrank/${username}`);
  return res.json();
};

/* ================= LINKEDIN ================= */
export const getLinkedInData = async (username) => {
  const res = await fetch(`${BASE_URL}/linkedin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  return res.json();
};