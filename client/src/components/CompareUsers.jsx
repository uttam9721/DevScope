// // src/components/CompareUsers.jsx
// import { motion } from "framer-motion";

// const CompareUsers = ({ user1, user2 }) => {
//   if (!user1 || !user2) return null;

//   return (
//     <div className="grid md:grid-cols-2 gap-6 mt-10">

//       {/* USER 1 */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white/10 p-6 rounded-2xl text-center"
//       >
//         <img src={user1.avatar} className="w-16 rounded-full mx-auto" />
//         <h2>{user1.name}</h2>
//         <p>Followers: {user1.followers}</p>
//       </motion.div>

//       {/* USER 2 */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white/10 p-6 rounded-2xl text-center"
//       >
//         <img src={user2.avatar} className="w-16 rounded-full mx-auto" />
//         <h2>{user2.name}</h2>
//         <p>Followers: {user2.followers}</p>
//       </motion.div>

//     </div>
//   );
// };

// export default CompareUsers;





// src/components/CompareUsers.jsx

import { motion } from "framer-motion";

const CompareUsers = ({ user1, user2 }) => {
  if (!user1 || !user2) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* USER 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-center"
      >
        {user1.avatar && (
          <img
            src={user1.avatar}
            alt="user1"
            className="w-16 h-16 rounded-full mx-auto mb-3"
          />
        )}
        <h2 className="text-lg font-bold">{user1.name}</h2>
        {user1.followers && <p>👥 {user1.followers}</p>}
        {user1.repos && <p>📦 {user1.repos}</p>}
        {user1.rating && <p>⭐ {user1.rating}</p>}
      </motion.div>

      {/* USER 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-center"
      >
        {user2.avatar && (
          <img
            src={user2.avatar}
            alt="user2"
            className="w-16 h-16 rounded-full mx-auto mb-3"
          />
        )}
        <h2 className="text-lg font-bold">{user2.name}</h2>
        {user2.followers && <p>👥 {user2.followers}</p>}
        {user2.repos && <p>📦 {user2.repos}</p>}
        {user2.rating && <p>⭐ {user2.rating}</p>}
      </motion.div>

    </div>
  );
};

export default CompareUsers;