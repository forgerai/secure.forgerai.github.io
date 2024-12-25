"use client";

import React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { UserKindConsumer } from "./consumer";
import { UserKindProducer } from "./producer";
import { UserKindSelector } from "./selector";

const getUserKind = (kind: string | null) => kind || localStorage.getItem("kind") || null;

export default function Home() {
  const params = useSearchParams();
  const router = useRouter();
  const [userKind, _setUserKind] = React.useState(getUserKind(params.get('kind')));
  const setUserKind = (kind: string) => {
    router.push(`/?kind=${kind}`)
    _setUserKind(kind)
  }
  let component = null;

  return (
    <div className={"flex flex-col transition-all duration-200 min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] " + (userKind === "producer" ? "bg-zinc-950 text-white" : "bg-orange-50 text-zinc-950")}>
      <UserKindConsumer show={userKind === "consumer"} setUserKind={setUserKind} />
      <UserKindProducer show={userKind === "producer"} setUserKind={setUserKind} />
      <UserKindSelector show={userKind !== "consumer" && userKind !== "producer"} setUserKind={setUserKind} />
      {component}
    </div>
  )
}
