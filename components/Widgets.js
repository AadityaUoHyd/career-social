import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import TimeAgo from "timeago-react";
import { Avatar, Button } from "@mui/material";
import { Add, MoreHoriz } from "@mui/icons-material";

const viewers = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    time: "2d ago"
  },
  {
    id: 2,
    name: "Rahul Verma",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    time: "1w ago"
  },
  {
    id: 3,
    name: "Anjali Patel",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    time: "3d ago"
  }
];

const suggestedPeople = [
  {
    id: 1,
    name: "Amit Singh",
    title: "Full Stack Developer",
    company: "Tech Solutions Inc",
    image: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 2,
    name: "Nehap Curie",
    title: "Data Scientist",
    company: "Data Insights Co",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mohit Saha",
    title: "Business Analyst",
    company: "Capgemini",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      {/* News */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>Career Social News</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ads */}
<div className="bg-white dark:bg-[#1D2226] w-11/12 h-64 px-2.5 rounded-lg border border-gray-300 dark:border-none">
  <div className="relative w-full h-full">
    <Image
      src="/ad.png"
      fill
      className="object-contain"
      alt="Advertisement"
    />
  </div>
</div>

      {/* Who viewed your profile */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>Who viewed your profile</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>
        <div className="space-y-3 px-2.5">
          {viewers.map((viewer) => (
            <div key={viewer.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar src={viewer.image} className="!h-10 !w-10" />
                <div className="-space-y-0.5">
                  <h5 className="text-sm font-medium">{viewer.name}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {viewer.title}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {viewer.time}
                  </p>
                </div>
              </div>
              <button className="text-blue-500 hover:underline text-sm">
                View
              </button>
            </div>
          ))}
        </div>
        <div className="text-center py-2 border-t border-gray-200 dark:border-gray-700">
          <button className="text-sm text-gray-500 hover:underline">
            View all
          </button>
        </div>
      </div>

      {/* People you may know */}
      <div className="mb-4 bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>People you may know</h4>
          <MoreHoriz className="h-5 w-5" />
        </div>
        <div className="space-y-3 px-2.5">
          {suggestedPeople.map((person) => (
            <div key={person.id} className="space-y-1">
              <div className="flex items-center space-x-2">
                <Avatar src={person.image} className="!h-14 !w-14" />
                <div className="-space-y-0.5">
                  <h5 className="text-sm font-medium">{person.name}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {person.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {person.company}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outlined" 
                  size="small" 
                  className="!text-sm !font-medium !border-gray-300 !text-gray-700 dark:!border-gray-600 dark:!text-gray-200 !normal-case !px-4 !py-1 !rounded-full"
                  startIcon={<Add className="!h-4 !w-4" />}
                >
                  Connect
                </Button>
                <Button 
                  variant="outlined" 
                  size="small" 
                  className="!text-sm !font-medium !border-gray-300 !text-gray-700 dark:!border-gray-600 dark:!text-gray-200 !normal-case !px-4 !py-1 !rounded-full"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-2 border-t border-gray-200 dark:border-gray-700">
          <button className="text-sm text-gray-500 hover:underline">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
