"use client";

import React, { Suspense } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { UserKindConsumer } from "./consumer";
import { UserKindProducer } from "./producer";
import { UserKindSelector } from "./selector";
import logo from "./logo-192.png";
import Link from "next/link";
import Image from "next/image";

const getUserKind = (kind: string | null) => kind || null;
const NavBar = ({
  setUserKind,
  dark,
  kind,
}: {
  setUserKind: (s: string) => unknown;
  dark: boolean;
  kind?: string | null;
}) => (
  <nav
    className={`w-screen h-16 hidden sm:flex flex-row fixed px-4 justify-between z-50 ${
      dark ? "bg-slate-950" : "bg-orange-50"
    }`}
  >
    <Link href="/" className="flex justify-center items-center">
      {" "}
      <Image src={logo} alt="Forger" className="h-12 w-12" />{" "}
    </Link>
    <div className="flex flex-row items-center gap-4">
      <button
        onClick={() => setUserKind("producer")}
        className={`px-4 hover:underline  underline-offset-2 hover:text-lg transition-all ${
          kind === "producer" && "underline"
        } duration-200 ${
          dark ? "decoration-indigo-500" : "decoration-orange-400"
        }`}
      >
        Simplify My Reporting
      </button>
      <button
        onClick={() => setUserKind("consumer")}
        className={`px-4 hover:underline  underline-offset-2 hover:text-lg transition-all ${
          kind === "consumer" && "underline"
        } duration-200 ${
          dark ? "decoration-indigo-500" : "decoration-orange-400"
        }`}
      >
        Read Reports Easily For Free
      </button>
      <a
        href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-sm ${
            dark
              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
              : "bg-orange-400 hover:bg-orange-500"
          }`}
        />
        <div className="group relative transform rounded-[6px] px-8 py-2 text-lg text-white duration-200 hover:bg-transparent hover:px-12">
          Contact Us
        </div>
      </a>
    </div>
  </nav>
);
function HomePage() {
  "use client";
  const params = useSearchParams();
  const router = useRouter();
  const [userKind, _setUserKind] = React.useState(
    getUserKind(params.get("kind"))
  );
  const setUserKind = (kind: string) => {
    router.push(`/?kind=${kind}`);
    _setUserKind(kind);
  };

  return (
    <Suspense>
      <div
        className={
          "flex flex-col transition-all duration-200 min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] " +
          (userKind === "producer"
            ? "bg-zinc-950 text-white"
            : "bg-orange-50 text-zinc-950")
        }
      >
        <NavBar
          kind={userKind}
          dark={userKind === "producer"}
          setUserKind={setUserKind}
        />
        <div className={"flex flex-col gap-16 pt-16"}>
          <UserKindConsumer
            show={userKind === "consumer"}
            setUserKind={setUserKind}
          />
          <UserKindProducer
            show={userKind === "producer"}
            setUserKind={setUserKind}
          />
          <UserKindSelector
            show={userKind !== "consumer" && userKind !== "producer"}
            setUserKind={setUserKind}
          />
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
