import type { Metadata } from "next";
import { Geist, Geist_Mono,  } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigator from "./_components/navigator";
import Footer from "./_components/footer";

const pretendard = localFont({
  src: "../_fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});


export const metadata: Metadata = {
  title: "Lovendar: 커플 캘린더",
  description: "사랑을 기록하는 달력, 우리의 하루를 특별하게",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable} antialiased overflow-x-hidden`}>
        <Navigator />
        {children}
        <Footer />
        </body>
    </html>
  );
}
