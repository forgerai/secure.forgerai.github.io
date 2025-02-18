"use client";

import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";
import { UserKindConsumer } from "./consumer";
import logo from "./logo-192.png";

const NavBar = () => {
  const decorationColor = "decoration-orange-400";
  return (
    <nav
      className={`w-screen h-16 hidden sm:flex flex-row fixed px-4 justify-between z-50 ${"bg-orange-50"}`}
    >
      <Link href="/" className="flex justify-center items-center">
        {" "}
        <Image src={logo} alt="Forger" className="h-12 w-12" />{" "}
      </Link>
      <div className="flex flex-row items-center gap-4">
        <Link
          href={`#hero`}
          className={`px-4 hover:underline underline-offset-2 transition-all duration-200 ${decorationColor}`}
        >
          Home
        </Link>
        <Link
          href={`#pricing`}
          className={`px-4 hover:underline underline-offset-2 transition-all duration-200 ${decorationColor}`}
        >
          Pricing
        </Link>
        <Link
          href={`#learn`}
          className={`px-4 hover:underline underline-offset-2 transition-all duration-200 ${decorationColor}`}
        >
          Details
        </Link>
        <Link
          href="https://app.forger.ai"
          className="bg-transparent relative transform duration-200 hover:bg-orange-400 text-orange-700 hover:text-white hover:px-12 py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
        >
          Try It Out
        </Link>
        <a
          href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
          target="_blank"
          referrerPolicy="no-referrer"
          className="relative"
        >
          <div
            className={`absolute inset-0 rounded-sm ${"bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-400 hover:to-orange-700"}`}
          />
          <div className="group relative transform rounded-[6px] px-8 py-2 text-lg text-white duration-200 hover:bg-transparent hover:px-12">
            Contact Us
          </div>
        </a>
      </div>
    </nav>
  );
};

function HomePage() {
  "use client";
  return (
    <Suspense>
      <div
        className={
          "flex flex-col transition-all duration-200 min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-orange-50 text-zinc-950"
        }
      >
        <NavBar />
        <div className={"flex flex-col gap-16 pt-16"}>
          <UserKindConsumer />
        </div>
      </div>
    </Suspense>
  );
}
export default function Home() {
  "use client";
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  );
}
