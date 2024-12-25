"use client";

import Image from "next/image";
import React from "react";
import logo from "./logo-192.png"

export const UserKindSelector = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
  return (
    <div className="flex flex-col flex-1 p-8 sm:p-16 justify-center items-stretch">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Image src={logo} alt="Forger" className="h-min w-min" />
        <h1 className="text-7xl font-light">Reimagining Reporting</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 flex-1 p-8 sm:p-16">
        <button className="p-4 flex-1 outline outline-orange-100 hover:bg-orange-100 transition-all duration-300 flex flex-col justify-center gap-2 items-center" onClick={() => setUserKind("consumer")}>
          <h2 className="text-xl font-light max-w-lg">I Want To</h2>
          <h1 className="text-3xl font-semibold max-w-lg">Understand the Value<br />My Partners Bring Me</h1>
          <ul className="px-4 py-8 text-lg font-light max-w-md gap-2 flex flex-col list-disc text-zinc-700 text-left">
            <li>Single Pane of Glass For Reports</li>
            <li>Ask For Custom Modifications to Reports</li>
            <li>Automated Monitoring on Reports</li>
          </ul>
          <h2 className="justify-self-end text-lg font-normal">This is free for you.</h2>
        </button>
        <button className="p-4 flex-1 outline outline-orange-100 hover:bg-orange-100 transition-all duration-300 flex flex-col justify-center gap-2 items-center" onClick={() => setUserKind("producer")}>
          <h2 className="text-xl font-light max-w-lg">I Want To</h2>
          <h1 className="text-3xl font-semibold max-w-lg">Automate My External<br />Reporting Pipeline</h1>
          <ul className="px-4 py-8 text-lg font-light max-w-md gap-2 flex flex-col list-disc text-zinc-700 text-left capitalize">
            <li>Reduce Complexity by Automatically Generating Reports From Connected Datasources</li>
            <li>Increase Customer Happiness by Automatically handling custom modifications to reports</li>
            <li>Increase retention by Understanding how your customers think of your value</li>
          </ul>
        </button>
      </div>
    </div>
  );
};