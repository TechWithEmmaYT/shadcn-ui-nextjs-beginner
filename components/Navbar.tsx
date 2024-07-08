"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import SendIcon from "./icons/send-icon";
import MessageIcon from "./icons/message-icon";
import Logo from "../public/assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="fixed z-[999] w-full top-0 dark:bg-black p-3 py-2 border-b dark:border-gray-800">
      <div className="max-w-default mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <Link className="" href="/">
            <Logo />
            <strong className="hidden">TikTok</strong>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex-1 relative">
          <form
            className="flex flex-row items-center p-[12px_16px] !bg-gray-200/50 dark:!bg-[rgba(255,255,255,0.12)] rounded-[92px] group relative overflow-hidden z-1 m-0
            hover:ring-1 hover:ring-gray-400"
          >
            <Input
              name="q"
              type="search"
              role="combobox"
              aria-label="Search"
              aria-autocomplete="list"
              autoComplete="off"
              placeholder="Search accounts and videos"
              className="flex-1 font-normal focus-visible:ring-0 -tracking-tight !h-[21px] text-[16px] leading-[21px] !border-0 bg-transparent !outline-none p-0 w-full !text-[rgba(255,255,255,0.9)] placeholder:text-gray-400 caret-[#ff3b5c] !appearance-none
                 group-hover:border-1 !group-hover:border-white !shadow-none
                "
            />
            <span className="w-[1px] h-[28px] my-[-3px] bg-black/10 dark:bg-[rgba(255,255,255,0.12)]"></span>
            <Button
              variant="ghost"
              className="p-[11px_16px_11px_12px] m-[-12px_-16px_-12px_0px] text-0 cursor-pointer !bg-transparent"
            >
              <Search className="text-black/40 dark:text-[rgba(255,255,255,.34)]" />
            </Button>
          </form>
        </div>
        {/* Profile Icon */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-3">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Link href="/">
              <SendIcon className="w-6 h-6" />
            </Link>
            <sup
              className="absolute -top-2 left-4 font-semibold text-sm text-center 
            rounded-[10px] bg-[rgb(255,59,92)] text-white min-w-[20px] h-[20px]"
            >
              5
            </sup>
          </div>
          <div className="relative">
            <Link href="/">
              <MessageIcon className="w-8 h-8" />
            </Link>
            <sup
              className="absolute -top-1 left-4 font-semibold text-sm text-center 
            rounded-[10px] bg-[rgb(255,59,92)] text-white min-w-[20px] h-[20px]"
            >
              13
            </sup>
          </div>
          <Link href="/profile">
            <Avatar className="w-[32px] h-[32px]">
              <AvatarImage src="https://i.pravatar.cc/150?img=1" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
