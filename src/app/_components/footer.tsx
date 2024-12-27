"use client"

import { Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  subsets: ["latin"], // 서브셋 지정
  weight: ["400", "800"], // 원하는 가중치
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#e3e3e3] py-6 px-6 font-medium">
      <div className="flex items-center">
        Copyright © {new Date().getFullYear()} Lovendar-Team. All rights
        reserved.
      </div>
    </footer>
  );
}
