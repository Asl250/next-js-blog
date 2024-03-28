import type { ChildProps } from '@/types'
import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const crete_round = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creteRound",
});
const work_sans = Work_Sans({
  weight: ["500","600"],
  subsets: ["latin"],
  variable: "--font-workSans",
})

export const metadata: Metadata = {
  title: "Next-js blog",
  description: "Generated by create me",
};

function RootLayout({children}: ChildProps) {
  return (
    <html lang="en">
      <body className={`${crete_round.variable} ${work_sans.variable} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
export default RootLayout