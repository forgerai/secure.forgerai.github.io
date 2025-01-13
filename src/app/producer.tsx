"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "./footer";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 max-w-5xl p-8 sm:p-16 min-h-[75vh] ">
        <h1 className="text-7xl font-semibold text-center">
          Automate Your Reporting.
          <br />
          Deliver Unmatched Value.
        </h1>
        <h2 className="text-lg text-center font-normal max-w-2xl">
          Simplify your reporting process and delight your clients with
          seamless, automated reports. Forger connects directly to your data
          sources, generates tailored reports effortlessly, and provides deep
          insights to help you understand your customers better.
        </h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-8 justify-center items-center">
          <a
            href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="relative p-[3px]"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="group relative transform rounded-[6px] px-8 py-2 text-lg text-white duration-200 hover:bg-transparent hover:px-12">
              Request a Demo
            </div>
          </a>
          <a href="#learn" className="relative p-[3px]">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="bg-black group relative transform rounded-[6px] px-8 py-2 text-lg text-white duration-200 hover:bg-transparent hover:px-12">
              Learn More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const HowItWorksLayout = ({
  children,
  id,
  light,
  reversed,
  image,
  imageAlt,
  title,
  subtitle,
  callToAction,
}: {
  id?: string;
  children: React.ReactNode;
  light?: boolean;
  reversed?: boolean;
  image?: StaticImageData;
  imageAlt?: string;
  title: string;
  subtitle: string;
  callToAction?: {
    text: string;
    action?: () => unknown;
    href?: string;
    newTab?: boolean;
  };
}) => {
  return (
    <div
      className={`flex flex-col justify-start gap-4 sm:gap-8 p-8 sm:p-8 sm:py-28 ${
        light ? "bg-stone-900" : ""
      }`}
      id={id}
    >
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <h2 className="text-2xl font-semibold">{subtitle}</h2>
      </div>
      <div
        className={`flex flex-col justify-around gap-10 ${
          reversed ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        {image ? (
          <Image
            className="sm:max-h-[55vh] sm:max-w-[55vh]"
            src={image}
            alt={imageAlt || ""}
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col justify-center items-center text-xl">
          {children}
          {callToAction && callToAction.action && (
            <button
              onClick={callToAction.action}
              className="relative transform duration-200 hover:px-16 py-2 px-8 rounded-sm"
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="relative text-white">{callToAction.text}</div>
            </button>
          )}
          {callToAction && callToAction.href && callToAction.newTab && (
            <a
              href={callToAction.href}
              target="_blank"
              referrerPolicy="no-referrer"
              className="relative transform duration-200 hover:px-16 py-2 px-8 rounded-sm"
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="relative text-white">{callToAction.text}</div>
            </a>
          )}
          {callToAction && callToAction.href && !callToAction.newTab && (
            <Link
              href={callToAction.href}
              className="relative transform duration-200 hover:px-16 py-2 px-8 rounded-sm"
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="relative text-white">{callToAction.text}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const pie = Math.random() > 0.3 ? "Pie" : Math.random() > 0.8 ? "π" : "🥧";

const HowItWorksA = () => (
  <HowItWorksLayout
    id="learn"
    light
    imageAlt="A person pulling their hair out having to go through a ton of emails"
    title="Reduce Complexity with Automated Reporting"
    subtitle="By Centralizing Reports and Data Across All Partners"
    callToAction={{
      text: "Simplify Your Reporting",
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
      newTab: true,
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Say goodbye to the time and expense of building custom reports manually.
        Forger integrates directly with your databases and datalakes,
        automatically generating professional-grade reports. Focus on growing
        your business while we take care of the reporting pipeline, saving you
        time and resources.
      </h3>
      <h3 className=" pt-4">Easy As {pie}.</h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksB = () => (
  <HowItWorksLayout
    reversed
    title="Delight Customers with Custom Modifications"
    subtitle="Personalized Reporting Without the Hassle"
    callToAction={{
      text: "Enhance Client Experience",
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
      newTab: true,
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Enterprise clients demand customized reports, but manual tracking and
        modifications can be overwhelming. Forger automates the customization
        process, ensuring your clients get exactly what they need—quickly and
        accurately. Keep your customers happy and free up your team to focus on
        high-value tasks.
      </h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksC = () => (
  <HowItWorksLayout
    light
    title="Boost Retention with Valuable Customer Insights"
    subtitle="Page Analytics and Insights for Every Report"
    callToAction={{
      text: "Discover Customer Insights",
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
      newTab: true,
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Gain powerful insights into how your clients interact with your reports.
        With Forger's analytics, you'll know which sections resonate, what draws
        attention, and where your clients see the most value—helping you improve
        your offerings and strengthen relationships.
      </h3>
    </div>
  </HowItWorksLayout>
);

const ConsumerAction = ({
  setUserKind,
}: {
  setUserKind: (s: string) => unknown;
}) => (
  <div className="flex flex-col justify-center items-center gap-8 py-16 px-8">
    <h2 className="text-4xl font-semibold text-center max-w-3xl">
      Looking to Centralize Your Partner Reports?
    </h2>
    <p className="text-xl text-center max-w-2xl text-zinc-300">
      Forger also helps you consolidate all your partner reports into a single,
      easy-to-use dashboard. Stop juggling multiple portals and start getting
      clear insights from your partnerships.
    </p>
    <button
      onClick={() => setUserKind("consumer")}
      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-8 rounded-sm transform duration-200 hover:px-12"
    >
      Centralize Your Reports
    </button>
  </div>
);

const Pricing = () => (
  <div className="flex flex-col justify-center items-center gap-8 py-16 px-8 bg-zinc-900">
    <h2 className="text-4xl font-semibold text-center max-w-3xl">
      Early Access Pricing
    </h2>
    <p className="text-xl text-center max-w-2xl text-zinc-300">
      As we're in the early stages of our journey, we work closely with each
      customer to understand their unique needs and provide tailored solutions.
      As an early adopter, you'll receive preferential pricing that reflects
      your valuable role in shaping our product.
    </p>
    <a
      href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
      target="_blank"
      referrerPolicy="no-referrer"
      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-8 rounded-sm transform duration-200 hover:px-12"
    >
      Let's Discuss Your Needs
    </a>
  </div>
);

export const UserKindProducer = ({
  setUserKind,
  show,
}: {
  setUserKind: (s: string) => unknown;
  show: boolean;
}) => {
  return (
    <div className={`${show ? "flex" : "hidden"} flex-col gap-8 flex-1`}>
      <Hero />
      <HowItWorksA />
      <HowItWorksB />
      <HowItWorksC />
      <ConsumerAction setUserKind={setUserKind} />
      <Pricing />
      <Footer dark />
    </div>
  );
};
