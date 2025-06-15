"use client";

import { Icon } from "@iconify/react";
import Avatar from "./Avatar";
import React from "react";

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: HeaderProps) {
  // const [sidebarOpen, setSidebarOpenState] = useState<boolean>(false);
  return (
    <header className="border-b-1 border-[#dedede] bg-white px-4 py-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">WebsiteComponents</h1>

        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
        
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="8" x2="32" y2="8" stroke="black" strokeWidth="2" />
            <line
              x1="4"
              y1="16"
              x2="20"
              y2="16"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-light-gray">
              <Icon icon="lucide:hexagon" className="h-6 w-6" />
            </button>
            <button className="rounded-full p-2 hover:bg-light-gray">
              <Icon icon="lucide:bell" className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2">
              <div className="relative cursor-pointer">
                <Avatar />
                <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-neon-green ring-2 ring-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
