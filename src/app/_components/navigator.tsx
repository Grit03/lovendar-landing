
import Link from "next/link";
import Image from "next/image";

import { Sour_Gummy } from "next/font/google";


const sourGummy = Sour_Gummy({
  subsets: ["latin"], // 서브셋 지정
  weight: ["400", "800"], // 원하는 가중치
});

export default function Navigator() {
  return (
    <nav className="flex justify-between items-center w-screen text-white py-2 px-16 z-20 text-zinc-800 font-bold text-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_10px]">
      <div className="flex items-center">
        <Image
          priority
          src="/lovendar_logo.png"
          alt="logo image"
          width={70}
          height={20}
        />
        <div className={`ml-2 text-3xl font-black ${sourGummy.className}`}>
          LOVENDAR
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/">
          <div>소개페이지</div>
        </Link>
        <Link href="https://forms.gle/g9qfp2QoEWbVNv2M7">
          <div>사전신청</div>
        </Link>
      </div>
    </nav>
  );
}
