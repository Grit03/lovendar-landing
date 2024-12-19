import Image from "next/image";

import { Jua } from "next/font/google";

const jua = Jua({
  subsets: ["latin"], // 서브셋 지정
  weight: ["400"], // 원하는 가중치
});



export default function Home() {
  return (
    <div className="w-screen">
      <section className="bg-[#c4946e] h-screen flex items-center justify-center flex-col gap-4">
        <Image
          priority
          src="/lovendar_logo.png"
          alt="logo image"
          width={200}
          height={20}
        />
        
        <div
          className={`text-[#fdfaf4] font-extrabold text-6xl ${jua.className} w-1/2 text-center`}
        >
          우리의 하루를 특별하게 <br /> 사랑을 기록하는 달력, LOVENDAR
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}
