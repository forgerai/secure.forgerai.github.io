"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import hairPull from "./email-hairpull.webp"
import logo from "./logo-192.png"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const getUserKind = (kind: string | null) => kind || localStorage.getItem("kind") || null;

export const UserKindProducer = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
  return (
    <div className="items-center  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button className="p-2 bg-red-500" onClick={() => setUserKind("consumer")}>
        Consumer
      </button>
      <button className="p-2 bg-blue-500" onClick={() => setUserKind("producer")}>
        Producer
      </button>
    </div>
  );
};