import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import HomeIcon from "../public/assets/home2.svg";
import Badge from "../public/assets/badge.svg";

const LeftSidebar = () => {
  const suggestedAccounts = [
    {
      name: "Kylie Jenner",
      username: "kyliejenner",
      imgSrc: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "9GAG",
      username: "9gag",
      imgSrc: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Bella Poarch",
      username: "bellapoarch",
      imgSrc: "https://i.pravatar.cc/150?img=4",
      verified: true,
    },
    {
      name: "Анатолий Власов",
      username: "vlanatole",
      imgSrc: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const followingAccounts = [
    {
      name: "Ann Smith",
      username: "user1203941",
      imgSrc: "https://i.pravatar.cc/150?img=6",
      verified: false,
    },
    {
      name: "Edward",
      username: "edward",
      imgSrc: "https://i.pravatar.cc/150?img=7",
      verified: false,
    },
    {
      name: "Ginger Pie",
      username: "pie012",
      imgSrc: "https://i.pravatar.cc/150?img=8",
      verified: false,
    },
  ];
  return (
    <div className="relative w-full max-w-[500px] h-auto">
      <div className="w-full max-w-[500px] overflow-hidden pt-4 overflow-y-auto overscroll-contain perspective-[1px] transform-style-preserve-3d [perspective-origin:right_top] top-[60px] bottom-0 fixed z-[99] pr-[8px]">
        <div className=" max-w-[80%] mx-auto pl-2">
          <nav className="mb-4">
            <ul className="space-y-1">
              <li>
                <Link href="/">
                  <Button
                    variant="link"
                    className="flex items-center space-x-3 text-primary p-0 !no-underline"
                  >
                    <HomeIcon className="w-7 h-7" />
                    <span className="text-lg font-bold">For you</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  href="/following"
                  className="flex items-center space-x-3 dark:text-gray-400"
                >
                  <User className="w-6 h-6" />
                  <span className="text-lg font-semibold">Following</span>
                </Link>
              </li>
            </ul>
          </nav>
          <hr className="my-3 border-[#eee] dark:border-none" />
          <section className="mt-1">
            <h2 className="text-black/70 dark:text-white/60 text-[12px] tracking-[0.02rem] font-bold mb-3">
              SUGGESTED ACCOUNTS
            </h2>
            <ul className="space-y-4">
              {suggestedAccounts.map((account, index) => (
                <li
                  key={index}
                  className="relative flex items-center space-x-3"
                >
                  <Image
                    src={account.imgSrc}
                    alt={account.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h5 className="flex items-center gap-2 font-bold leading-[19.5px]">
                      <span>{account.name}</span>
                      <span>{account.verified && <Badge />}</span>
                    </h5>
                    <span className="text-black/70 dark:text-white/70 font-normal text-sm">
                      @{account.username}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              className="!text-primary font-semibold mt-2 inline-block !h-auto !p-0 !bg-transparent"
            >
              See all
            </Button>
          </section>
          <hr className="my-3 border-[#eee] dark:border-none" />
          <section>
            <h2 className="text-black/70 dark:text-white/60 text-[12px] tracking-[0.07rem] font-bold mb-3">
              FOLLOWING
            </h2>
            <ul className="space-y-4">
              {followingAccounts.map((account, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Image
                    src={account.imgSrc}
                    alt={account.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h5 className="flex items-center gap-2 font-bold leading-[19.5px]">
                      <span>{account.name}</span>
                      <span>{account?.verified && <Badge />}</span>
                    </h5>
                    <span className="text-black/70 dark:text-white/70 font-normal text-sm">
                      @{account.username}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              className="!text-primary font-semibold !h-auto mt-2 inline-block !p-0 !bg-transparent"
            >
              See all
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
