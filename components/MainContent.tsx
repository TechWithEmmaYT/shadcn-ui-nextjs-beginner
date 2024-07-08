import { FC } from "react";
import HeartIcon from "../public/assets/heart.svg";
import CommentIcon from "../public/assets/comment.svg";
import BookmarkIcon from "../public/assets/bookmark.svg";
import ShareIcon from "../public/assets/share.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

// const videoData = {
//   videoSrc:
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//   likes: "998.9K",
//   comments: 1021,
//   bookmark: 21,
//   shares: 423,
// };

type PropsType = {
  videoSrc: string;
  likes: string;
  comment: number;
  bookmark: number;
  shares: number;
};

const MainContent: FC<PropsType> = ({
  videoSrc,
  likes,
  bookmark,
  comment,
  shares,
}) => {
  return (
    <div className="w-full relative flex items-center justify-end min-h-full">
      <div className="flex justify-center gap-5 h-[580px] overflow-hidden w-full max-w-lg">
        <div className="w-auto h-full lg:max-w-[70%] bg-gray-900 lg:rounded-lg border lg:lg:border-gray-500  overflow-hidden">
          <video
            src={videoSrc}
            controls={true}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-contain object-center lg:rounded-lg "
          />
        </div>
        <div className="absolute  right-5 bottom-5 lg:relative lg:right-0 lg:bottom-0">
          <div className="flex flex-col items-start justify-end h-full space-y-4">
            <Button
              variant="ghost"
              className="!w-auto !h-auto flex flex-col items-center !p-0 font-bold !bg-transparent"
            >
              <span className="flex justify-center items-center text-black dark:!text-white rounded-full transition-all duration-200 ease-in-out cursor-pointer w-12 h-12 bg-[#eee] dark:bg-[rgba(255,255,255,0.12)] mt-2 mb-1.5">
                <HeartIcon />
              </span>
              <span>{likes}</span>
            </Button>
            <Button
              variant="ghost"
              className="!w-auto !h-auto flex flex-col items-center !p-0 font-bold !bg-transparent"
            >
              <span
                className="flex justify-center items-center text-black dark:!text-white rounded-full transition-all duration-200 ease-in-out cursor-pointer
               w-12 h-12 bg-[#eee] dark:bg-[rgba(255,255,255,0.12)] mt-2 mb-1.5"
              >
                <CommentIcon />
              </span>
              <span>{comment}</span>
            </Button>

            <Button
              variant="ghost"
              className="!w-auto !h-auto !outline-none flex flex-col items-center !p-0 font-bold !bg-transparent"
            >
              <span
                className="flex justify-center items-center  text-black dark:!text-white rounded-full transition-all duration-200 ease-in-out cursor-pointer w-12 h-12
               bg-[#eee] dark:bg-[rgba(255,255,255,0.12)] mt-2 mb-1.5"
              >
                <BookmarkIcon />
              </span>
              <span>{bookmark}</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="!w-auto !h-auto !outline-none flex flex-col items-center !p-0 font-bold !bg-transparent">
                <span
                  className="flex justify-center items-center text-black dark:!text-white  rounded-full transition-all duration-200 ease-in-out 
                cursor-pointer w-12 h-12 bg-[#eee] dark:bg-[rgba(255,255,255,0.12)]  mt-2 mb-1.5"
                >
                  <ShareIcon />
                </span>
                <span>{shares}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 py-3 dark:bg-gray-800 dark:text-white text-gray-700 !border-none "
                align="end"
              >
                <DropdownMenuItem className="!text-[16px] cursor-pointer  font-semibold">
                  Embed
                </DropdownMenuItem>
                <DropdownMenuItem className="!text-[16px] font-semibold">
                  Send to friends
                </DropdownMenuItem>
                <DropdownMenuItem className="!text-[16px]  font-semibold">
                  Send to WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem className="!text-[16px]  font-semibold">
                  Send to Facebook
                </DropdownMenuItem>
                <DropdownMenuItem className="!text-[16px]  font-semibold">
                  Copy link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
