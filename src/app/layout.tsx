import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigator from "./_components/navigator";
import Footer from "./_components/footer";
import AOSProvider from "./_components/aos_provider";
import Head from "next/head";

const pretendard = localFont({
  src: "../_fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});


export const metadata: Metadata = {
  title: "Lovendar - 커플 일정 공유 캘린더 & 추억 기록 앱",
  icons: {
    icon: "/lovendar_logo.png",
  },
  description:
    "Lovendar는 사랑하는 사람과 일정을 공유하고, 기념일을 관리하며, 소중한 추억을 기록하는 커플 전용 캘린더 앱입니다. 사진 캡슐 기능부터 실시간 일정 동기화까지, 커플의 모든 순간을 함께하세요.",
  keywords:
    "커플 캘린더, 일정 공유, 커플 일정 관리, 기념일 알림, 커플 다이어리, 추억 기록, 사진 공유, 커플 앱, Lovendar",
  openGraph: {
    title: "Lovendar - 커플 일정 공유 캘린더 & 추억 기록 앱",
    description:
      "우리 하루를 특별하게, Lovendar로 일정을 공유하고 추억을 쌓으세요.",
    images: [
      {
        url: "/og-image.png",
        alt: "og 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovendar - 커플 일정 공유 캘린더",
    description:
      "커플을 위한 캘린더 앱, Lovendar와 함께 특별한 하루를 기록하세요.",
    images: [
      {
        url: "/og-image.png", // 앱 소개 이미지
        alt: "og 이미지",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="kr">
      <Head>
        <meta
          name="google-site-verification"
          content="B1cLUEuE1_58I15e4oBIGl0gNmouuSg_g3dmaonB-aQ"
        />
        <meta
          name="naver-site-verification"
          content="44c86c4b69804de77981da4d1f7ab3ff86f973a2"
        />
      </Head>
      <body className={`${pretendard.variable} antialiased overflow-x-hidden`}>
        <AOSProvider>
          <Navigator />
          {children}
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
