import { FC } from "react";
import { Heart, Music } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import CommentIcon from "../public/assets/comment.svg";
import PlusIcon from "../public/assets/plus.svg";

type PropsType = {
  fullname: string;
  username: string;
  pics: string;
  caption: string;
  comments: {
    username: string;
    comment: string;
    likes: number;
    like_active: boolean;
    imgSrc: string;
  }[];
};

const RightSidebar: FC<PropsType> = ({
  fullname,
  pics,
  caption,
  username,
  comments,
}) => {
  return (
    <div className="hidden lg:inline-block relative flex-[0.7]">
      <div className="w-full h-full pt-1 perspective-[1px] transform-style-preserve-3d [perspective-origin:right_top] pr-[8px]">
        <div className="max-w-[90%]">
          <div className="p-4 space-y-4">
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={pics}
                    alt={fullname}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h5 className="flex items-center gap-2 font-semibold leading-[11.5px] m-0">
                      {fullname}
                    </h5>
                    <span className="text-black/40 dark:text-white/70 font-normal text-sm">
                      {username}
                    </span>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="default"
                  className="flex items-center gap-1 w-auto ml-auto px-4 py-2 border-2 !border-primary text-white hover:bg-primary hover:text-white rounded-full"
                >
                  <PlusIcon className="w-4 h-4" />
                  Follow
                </Button>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className=" dark:text-white/80">{caption}</span>
                <span className="flex items-center text-[14px] dark:text-white/80 font-medium gap-2">
                  <Music strokeWidth={3} className="w-5 h-5" />
                  Artist - the name of a song
                </span>
              </div>
            </div>
            <hr className="border-[#eee] dark:border-none" />
            <div className="w-full">
              <h2 className="text-black/70 dark:text-white/70  text-[17px] font-bold mb-2">
                Comments
              </h2>
              <div className="w-full h-[330px] max-h-[330px] overflow-y-auto overscroll-contain  space-y-1 pr-4">
                {comments.map((comment, index) => (
                  <div key={index} className="relative flex space-x-4">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={comment.imgSrc}
                        alt="Avatar"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[14px] text-black/70 dark:text-white/70">
                          {comment.username}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`flex items-center space-x-1 !h-0 p-0 !border-none !bg-transparent ${
                            comment.like_active
                              ? "!text-primary"
                              : "text-black/80 hover:!text-black/70 dark:!text-gray-400"
                          }`}
                        >
                          <Heart
                            fill="currentColor"
                            strokeWidth={0}
                            className="w-5 h-5  flex-shrink-0"
                          />
                          <span className="text-[12px]">{comment.likes}</span>
                        </Button>
                      </div>
                      <p className="text-black/90 dark:text-white/90 text-[15px]">
                        {comment.comment}
                      </p>
                      <Button
                        variant="link"
                        className="text-sm text-black/50 dark:text-white underline p-0"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <form className="flex items-center gap-3 w-full bg-white/10 dark:bg-gray-900 h-16 py-5 px-5 rounded-[15px] border-2 dark:border-gray-800">
                  <CommentIcon className="text-[#ddd]" />
                  <span className="w-[1px] h-[28px] my-[-3px] bg-black/10 dark:bg-[rgba(255,255,255,0.12)]"></span>

                  <input
                    type="text"
                    placeholder="Write your comment..."
                    className="flex-1 text-white  !bg-transparent outline-none"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
