"use client";

import Image from "next/image";
import React from "react";

import hairPull from "./email-hairpull.webp"
import noEmails from "./email-happy.webp"
import Link from "next/link";

const getUserKind = () => localStorage.getItem("kind") || null;

const UserKindSelector = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 flex-1 ">
      <button className="p-4 flex-1 outline outline-orange-100 hover:bg-orange-100 transition-all duration-300 flex flex-col justify-center gap-2 items-center" onClick={() => setUserKind("consumer")}>
        <h2 className="text-xl font-light max-w-lg">I Want To</h2>
        <h1 className="text-3xl font-semibold max-w-lg">Understand the Value<br />My Partners Bring Me</h1>
        <ul className="px-4 py-8 font-lg font-light max-w-md gap-2 flex flex-col list-disc text-zinc-700 text-left">
          <li>Single Pane of Glass For Reports</li>
          <li>Ask For Custom Modifications to Reports</li>
          <li>Automated Monitoring on Reports</li>
        </ul>
        <h2 className="justify-self-end text-lg font-normal">This is free for you.</h2>
      </button>
      <button className="p-4 flex-1 outline outline-orange-100 hover:bg-orange-100 transition-all duration-300 flex flex-col justify-center gap-2 items-center" onClick={() => setUserKind("producer")}>
        <h2 className="text-xl font-light max-w-lg">I Want To</h2>
        <h1 className="text-3xl font-semibold max-w-lg">Automatically Show My Partners<br />My Real Value</h1>
        <ul className="px-4 py-8 font-lg font-light max-w-md gap-2 flex flex-col list-disc text-zinc-700 text-left capitalize">
          <li>Reduce Complexity by Automatically Generating Reports From Connected Datasources</li>
          <li>Increase Customer Happiness by Automatically handling custom modifications to reports</li>
          <li>Increase retention by Understanding how your customers think of your value</li>
        </ul>
      </button>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center gap-4 max-w-5xl p-8 sm:p-16 min-h-[75vh] ">
        <Link href="/#pricing" className="text-xl text-center underline text-zinc-500 font-semibold max-w-2xl">Pricing: Free</Link>
        <h1 className="text-7xl font-semibold text-center">A Single Pane of Glass<br />For All Your Partners</h1>
        <h2 className="text-lg text-center font-normal max-w-2xl">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
          <button className="bg-orange-400 hover:bg-orange-500 font-semibold text-white py-2 px-4 rounded-sm w-36">Let's Go</button>
          <button className="bg-transparent hover:bg-orange-400 text-orange-700 hover:text-white py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm">Contact Us</button>
        </div>
      </div>
      </div>
  )
}

const pie = Math.random() > 0.3 ? "Pie" : (Math.random() > 0.75 ? "π" : "🥧");

const HowItWorksA = () => {
  return (
    <div className="flex flex-col justify-start bg-orange-100 gap-4 p-8 sm:p-8">
      
      <div className="flex flex-col sm:flex-row justify-start gap-10">
        <Image className="sm:max-h-[55vh] sm:max-w-[55vh]" src={hairPull} alt="A person pulling their hair out having to go through a ton of emails" />
        <div className="flex flex-col">
        <h1 className="text-4xl font-semibold">Reduce Friction In Your Partnership Strategy</h1>
        <h2 className="text-xl font-semibold">By Centralizing Reports and Data Across All Partners</h2>
        <div className="flex flex-col py-8 max-w-xl">
          <h3 className="text-lg">Don't waste time sifting through your emails to find that one relevant report to understand your partnerships. We've all done this. It's horrible every time. </h3>
          <h3 className="text-lg pt-4">You forward your reports to us, we give you one place where you can see all your partnerships, and their histories, in one go.</h3>
          <h3 className="text-lg pt-4">Easy As {pie}.</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

const HowItWorksB = () => {
  return (
    <div className="flex flex-col justify-start bg-orange-50 gap-4 p-8 sm:p-8">
      <h1 className="text-4xl font-semibold">Understand Your Partnerships Better</h1>
      <h2 className="text-xl font-semibold">By Asking For KPIs and Metrics That You Care About</h2>
      <h2 className="text-lg text-center font-normal max-w-2xl">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h2>
    </div>
  )
}

const HowItWorksC = () => {
  return (
    <div className="flex flex-col justify-start bg-orange-100 gap-4 p-8 sm:p-8">
      <h1 className="text-4xl font-semibold">Increase Confidence In Your Partnerships</h1>
      <h2 className="text-xl font-semibold">By Automated Monitoring and Alerting on Reports</h2>
      <h2 className="text-lg text-center font-normal max-w-2xl">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h2>
    </div>
  )
}

const Pricing = () => {
  return (
    <div className="flex flex-col justify-start gap-4 p-8 sm:p-8" id="pricing">
      <h1 className="text-4xl font-semibold text-center">It's Free? How?</h1>
      <div className="flex flex-col sm:flex-row justify-between pt-8 gap-4 sm:gap-8">
        <div className="flex flex-col sm:flex-1">
          <h2 className="text-xl font-semibold text-center">Forger is Free For You</h2>
          <h2 className="text-lg text-center font-normal max-w-2xl pt-4">
            We believe the power Forger brings for you is great, but we also know that it isn't life changing (yet). So we give it to you for free, since our mission is to rethink reporting in todays world, whether or not we profit from it. <br /> <br />If you want to tip us, we won't say no 😃️
          </h2>
          <div className="pt-4 flex flex-col items-center">
            <button className="bg-orange-400 hover:bg-orange-500 font-semibold text-white py-2 px-4 rounded-sm">Create A Space</button> 
          </div>
        </div>
        <div className="flex flex-col sm:flex-1">
          <h2 className="text-xl font-semibold text-center capitalize">We work with your partners to automate the entire reporting stack</h2>
          <h2 className="text-lg text-center font-normal max-w-2xl pt-4">
            This is the real magic of our product. <br />
            We work with your partners to directly integrate with your datasets to create and manage reports automatically. This simplifies operations while allowing for unparalleled customization in reporting.
            We all know making the reports is much more complex than reading them!
          </h2>
          <div className="pt-4 flex flex-col items-center">
            <button className="bg-transparent hover:bg-orange-400 text-orange-700 hover:text-white py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm">How Can I Simplify My Reporting</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

const ThenNow = () => {
  return (
    <div className="flex flex-col justify-start items-stretch self-stretch ">
      <div className="flex-col sm:flex-row hidden sm:flex">
        <div className="flex flex-col sm:flex-1 p-4 bg-orange-100">
          <h1 className="inline text-lg text-center">Before</h1>
        </div>
        <div className="flex flex-col sm:flex-1 p-4 ">
        <h1 className="inline text-xl text-center font-semibold">With Forger</h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:flex-1 p-4 bg-orange-100">
          <h1 className="inline text-lg text-center sm:hidden">Before</h1>

        </div>
        <div className="flex flex-col sm:flex-1 p-4">
          <h1 className="inline text-lg text-center font-semibold sm:hidden">Now</h1>

        </div>
      </div>
    </div>
  )
}

const UserKindConsumer = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <Hero />
      <HowItWorksA />
      <HowItWorksB />
      <HowItWorksC />
      <Pricing />
    </div>
  );
};

const UserKindProducer = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
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

export default function Home() {
  const [userKind, setUserKind] = React.useState(getUserKind());
  let component = null;
  if (true || userKind === "consumer") {
    component = <UserKindConsumer setUserKind={setUserKind} />;
  }
  else if (userKind === "producer") {
    component = <UserKindProducer setUserKind={setUserKind} />;
  }
  else {
    component = <UserKindSelector setUserKind={setUserKind} />;
  }
  return (
    <div className={"flex flex-col transition-all duration-200 min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] " + (userKind === "producer" ? "bg-zinc-900 text-white" : "bg-orange-50 text-zinc-950")}>
      {component}
    </div>
  )
}
