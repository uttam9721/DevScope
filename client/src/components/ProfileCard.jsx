// src/components/ProfileCard.jsx
const ProfileCard = ({ data, platform }) => {
  if (!data) return null;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-xl rounded-2xl text-center">
      <h2 className="text-2xl font-bold">
        {platform === "leetcode" ? data.username : data.handle}
      </h2>

      {platform === "codeforces" && (
        <>
          <p>🏆 Rank: {data.rank}</p>
          <p>⭐ Rating: {data.rating}</p>
        </>
      )}

      {platform === "leetcode" && (
        <>
          <p>✅ Total Solved: {data.submitStats.acSubmissionNum[0].count}</p>
        </>
      )}
    </div>
  );
};

export default ProfileCard;