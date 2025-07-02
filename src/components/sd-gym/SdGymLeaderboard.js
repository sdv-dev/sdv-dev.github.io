import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import Tags from "./Tags";

const SdGymLeaderboard = () => {
  const [tags, setTags] = useState([
    {
      id: 1,
      label: "Feb 15, 2024",
      active: true,
    },
    {
      id: 2,
      label: "Jul 12, 2024",
      active: false,
    },
    {
      id: 3,
      label: "Oct 14, 2024",
      active: false,
    },
    {
      id: 4,
      label: "Dec 12, 2024",
      active: false,
    },
    {
      id: 5,
      label: "Feb 25, 2025",
      active: false,
    },
  ]);
  // const activeTag = tags.find((tag) => tag.active);

  return (
    <div className="flex justify-center bg-white">
      <div className="container w-full flex flex-col items-center py-12 md:py-16 lg:py-24 px-4 md:px-5 lg:px-0">
        <h1 className="heading-600-lg text-[36px] md:text-5xl text-center pb-8">
          Leaderboard
        </h1>
        <StatusBadge dateText={"Feb 15, 2025"} />
        <div className="flex flex-col md:flex-row w-full">
          <Tags tags={tags} setTags={setTags} />
        </div>
      </div>
    </div>
  );
};

export default SdGymLeaderboard;
