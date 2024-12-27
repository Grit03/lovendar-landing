import Image from "next/image";

import { Jua, Sour_Gummy } from "next/font/google";
import Link from "next/link";

const jua = Jua({
  subsets: ["latin"], // 서브셋 지정
  weight: ["400"], // 원하는 가중치
});


const sourGummy = Sour_Gummy({
  subsets: ["latin"], // 서브셋 지정
  weight: ["400", "800"], // 원하는 가중치
});


export default function Home() {
  return (
    <div className="w-screen min-h-screen text-balance break-keep">
      <section className="bg-[#c4946e] h-screen flex items-center py-40 flex-col gap-4">
        <div
          className={`text-[#fdfaf4] font-extrabold text-4xl lg:text-5xl lg:w-1/2 text-center flex flex-col items-center`}
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          <div className={`${jua.className}`}>우리의 하루를 특별하게</div>
          <div className={`${jua.className}`}>사랑을 기록하는 달력,</div>
          <div
            className={`text-[#523030] ${sourGummy.className} font-black mb-4`}
          >
            LOVENDAR
          </div>
          <PreRegisterBtn />
        </div>
        <Image
          priority
          src="/lovendar_logo.png"
          alt="logo image"
          width={300}
          height={20}
          className="w-1/2 max-w-[300px]"
        />
      </section>

      {/* 일간뷰 */}
      <section className="h-screen flex flex-col text-center px-6 lg:text-start lg:flex-row lg:px-20 justify-center items-center my-10">
        <div className="space-y-2 lg:px-6 lg:ml-32">
          <div className="text-zinc-500 text-lg font-medium" data-aos="fade-up">
            👀 한 눈에 확인하는 일간뷰
          </div>
          <div
            className="font-black text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            너와 나, 우리의 일정을 <br />
            타임라인으로 한눈에
          </div>
          <div
            className="text-zinc-500 font-medium text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            일간뷰에서 우리의 하루를 깔끔하게 정리하고 확인할 수 있어요!
            <br />
            현재 시간과 함께 연인의 일과를 단번에 파악하고,
            <br />빈 시간에 데이트 일정을 잡아보세요 ☺️
          </div>
        </div>
        <div>
          <Image
            priority
            data-aos="zoom-in"
            data-aos-duration="600"
            src="/main_feature_1.gif"
            alt="main_feature_1 image"
            width={700}
            height={100}
            className="h-full object-contain"
          />
        </div>
      </section>
      
      <hr className="border-2 mx-16" />
      {/* 월간뷰 */}
      <section className="h-screen flex flex-col-reverse px-6 lg:flex-row lg:px-20 justify-center items-center my-10">
        <div>
          <Image
            priority
            data-aos="zoom-in"
            data-aos-duration="600"
            src="/main_feature_2.gif"
            alt="main_feature_2 image"
            width={700}
            height={100}
            className="h-ful object-contain"
          />
        </div>
        <div className="space-y-2 text-center lg:text-start lg:ml-32">
          <div className="text-zinc-500 text-lg font-medium" data-aos="fade-up">
            📅 가독성 높은 커플 캘린더
          </div>
          <div
            className="font-black text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            컬러로 정리하는 월간 캘린더
          </div>
          <div
            className="text-zinc-500 font-medium text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            일정이 많아도 컬러로 내 일정, 상대 일정, 우리의 일정을 구분해
            <br />
            깔끔하게 정리할 수 있어요. <br />
            일정 추가도 날짜 터치 혹은 +버튼을 눌러 간편하게!
          </div>
        </div>
      </section>

      <hr className="border-2 mx-16" />
      <section className="h-screen flex flex-col lg:flex-row px-6 lg:px-20 justify-center items-center lg:gap-20 my-10">
        <div className="space-y-2 text-center lg:text-start lg:px-10 lg:ml-32">
          <div className="text-zinc-500 text-lg font-medium" data-aos="fade-up">
            👍 쉬운 일정 추가
          </div>
          <div
            className="font-black text-3xl lg:text-4xl"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {" "}
            원하는 날 새로운 <br />
            일정 추가도 간편하게!
          </div>
          <div
            className="text-zinc-500 font-medium text-sm lg:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            특정 날짜의 일정을 타임라인별로 보면서
            <br />
            원하는 날짜, 시간에 쉽게 추가가 가능합니다
          </div>
        </div>
        <div>
          <Image
            priority
            data-aos="zoom-in"
            data-aos-duration="600"
            src="/main_feature_3.gif"
            alt="main_feature_3 image"
            width={720}
            height={100}
            className="h-full object-contain"
          />
        </div>
      </section>

      <section className="flex flex-col bg-[#D6C7B4] items-center py-16 lg:flex-row md:px-16">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div
            className={`${jua.className} font-black text-2xl md:text-4xl break-keep text-center text-balance`}
          >
            모든 하루를 우리의 추억으로 <br />
            우리의 타임라인
          </div>
          <div
            className={`text-[#523030] ${sourGummy.className} font-black mb-2 lg:mb-4 text-4xl`}
          >
            LOVENDAR
          </div>
        </div>
        <div className="flex justify-center w-1/2">
          <Image
            priority
            data-aos="fade-down"
            data-aos-delay="50"
            src="/mockup.png"
            alt="mockup image"
            width={600}
            height={100}
            className="h-full object-contain"
          />
        </div>
      </section>

      <section className="bg-[#c4946e] flex justify-center items-center py-40 flex-col gap-4">
        <div
          className={`${jua.className} font-black text-2xl leading-7 md:text-4xl flex flex-col items-center md:leading-10`}
        >
          <div>지금 바로, 연인과 함께</div>
          <div className="mb-2">시작해보세요</div>
          <PreRegisterBtn />
        </div>
        <Image
          priority
          src="/lovendar_logo.png"
          alt="logo image"
          width={140}
          height={20}
        />
      </section>
    </div>
  );
}


function PreRegisterBtn() {
  return (
    <Link
      href="https://forms.gle/g9qfp2QoEWbVNv2M7"
      className="bg-[#ffdcd4] rounded-full w-40 cursor-pointer text-zinc-800 text-xl px-4 py-2 transition hover:bg-[#fcc8be] duration-300 font-bold text-center"
    >
      사전 신청
    </Link>
  );
}