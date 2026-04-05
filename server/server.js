// // const express = require("express");
// // const axios = require("axios");
// // const cors = require("cors");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.post("/leetcode", async (req, res) => {
// //   try {
// //     const { username } = req.body;

// //     const response = await axios.post(
// //       "https://leetcode.com/graphql",
// //       {
// //         query: `
// //           query getUserProfile($username: String!) {
// //             matchedUser(username: $username) {
// //               username
// //               submitStats {
// //                 acSubmissionNum {
// //                   difficulty
// //                   count
// //                 }
// //               }
// //             }
// //           }
// //         `,
// //         variables: { username },
// //       }
// //     );

// //     res.json(response.data.data.matchedUser);
// //   } catch (error) {
// //     res.status(500).json({ error: "Error fetching LeetCode data" });
// //   }
// // });

// // app.listen(5000, () => console.log("Server running on port 5000"));



// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// /* ================= CODEFORCES ================= */
// app.get("/codeforces/:username", async (req, res) => {
//   const { username } = req.params;

//   const response = await axios.get(
//     `https://codeforces.com/api/user.info?handles=${username}`
//   );

//   res.json(response.data.result[0]);
// });

// /* ================= LEETCODE ================= */
// app.post("/leetcode", async (req, res) => {
//   const { username } = req.body;

//   const response = await axios.post(
//     "https://leetcode.com/graphql",
//     {
//       query: `
//         query($username: String!) {
//           matchedUser(username: $username) {
//             username
//             submitStats {
//               acSubmissionNum {
//                 difficulty
//                 count
//               }
//             }
//           }
//         }
//       `,
//       variables: { username },
//     }
//   );

//   res.json(response.data.data.matchedUser);
// });

// /* ================= GITHUB ================= */
// app.post("/github", async (req, res) => {
//   const { username } = req.body;

//   const response = await axios.get(
//     `https://api.github.com/users/${username}`
//   );

//   res.json(response.data);
// });

// /* ================= HACKERRANK ================= */
// // Placeholder (scraping later)
// app.get("/hackerrank/:username", (req, res) => {
//   res.json({
//     username: req.params.username,
//     solved: 120,
//     badges: 5,
//   });
// });

// /* ================= LINKEDIN ================= */
// // Manual preview only
// app.post("/linkedin", (req, res) => {
//   const { username } = req.body;

//   res.json({
//     profileUrl: `https://www.linkedin.com/in/${username}`,
//   });
// });

// app.listen(5000, () => console.log("Server running 🚀"));






const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= CODEFORCES ================= */
app.get("/codeforces/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${username}`
    );

    res.json(response.data.result[0]);
  } catch (error) {
    res.status(500).json({ error: "Codeforces fetch error" });
  }
});

/* ================= LEETCODE ================= */
app.post("/leetcode", async (req, res) => {
  try {
    const { username } = req.body;

    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query: `
          query($username: String!) {
            matchedUser(username: $username) {
              username
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username },
      }
    );

    res.json(response.data.data.matchedUser);
  } catch (error) {
    res.status(500).json({ error: "LeetCode fetch error" });
  }
});

/* ================= GITHUB (FIXED) ================= */
app.get("/github/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "GitHub fetch error" });
  }
});

/* ================= HACKERRANK ================= */
app.get("/hackerrank/:username", (req, res) => {
  res.json({
    username: req.params.username,
    solved: 120,
    badges: 5,
  });
});

/* ================= LINKEDIN ================= */
app.post("/linkedin", (req, res) => {
  const { username } = req.body;

  res.json({
    profileUrl: `https://www.linkedin.com/in/${username}`,
  });
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});