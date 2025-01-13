"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import consumer1 from "./consumer-1.webp";
import consumer2 from "./consumer-2.webp";
import consumer3 from "./consumer-3.webp";
import Link from "next/link";

const hangon = () => alert("Hang on tight, we're on it!");

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 max-w-5xl p-8 sm:p-16 min-h-[75vh] ">
        <Link
          href="/#pricing"
          className="text-xl text-center underline text-zinc-500 font-semibold max-w-2xl"
        >
          Pricing: Free
        </Link>
        <h1 className="text-7xl font-semibold text-center">
          A Single Pane of Glass
          <br />
          For All Your Partners
        </h1>
        <h2 className="text-lg text-center font-normal max-w-2xl">
          Forger allows you to understand the value your partners bring you and
          monitor the health of your partnerships, allowing you to keep your
          partnerships healthy and strategic.
        </h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-8 justify-center items-center">
          <button
            onClick={hangon}
            className="bg-orange-400 border-orange-400 hover:bg-orange-500 text-white py-2 px-8 rounded-sm transform duration-200 hover:px-16"
          >
            Let's Go
          </button>
          <a
            href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
            target="_blank"
            className="bg-transparent relative transform duration-200 hover:bg-orange-400 text-orange-700 hover:text-white hover:px-12 py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
            referrerPolicy="no-referrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

const pie = Math.random() > 0.3 ? "Pie" : Math.random() > 0.8 ? "π" : "🥧";

const HowItWorksLayout = ({
  children,
  dark,
  reversed,
  image,
  imageAlt,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  dark?: boolean;
  reversed?: boolean;
  image?: StaticImageData;
  imageAlt?: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-start gap-4 sm:gap-8 p-8 sm:p-8 sm:py-28 ${
        dark ? "bg-orange-100" : ""
      }`}
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
            className="sm:max-h-[55vh] sm:max-w-[55vh] rounded-lg"
            src={image}
            alt={imageAlt || ""}
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col justify-center items-center text-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const HowItWorksA = () => (
  <HowItWorksLayout
    dark
    image={consumer1}
    imageAlt="A person frustrated having to go through a ton of emails"
    title="Reduce Friction In Your Partnership Strategy"
    subtitle="By Centralizing Reports and Data Across All Partners"
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Stop wasting time chasing reports or navigating multiple dashboards.
        Forger unifies all your partner data in one place, giving you the
        clarity you need to focus on what matters most—building meaningful
        partnerships.
      </h3>
      <h3 className=" pt-4">
        You forward your reports to us, we give you one place where you can see
        all your partnerships, and their histories, in one go.
      </h3>
      <h3 className=" pt-4">Easy As {pie}.</h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksB = () => (
  <HowItWorksLayout
    reversed
    title="Don’t Settle For Generic Data"
    subtitle="Ask For KPIs and Metrics That You Care About"
    image={consumer2}
    imageAlt="A successful business partnership"
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Forger lets you define and request the metrics that matter most to your
        business, so you can measure partner performance in ways that align with
        your goals.{" "}
      </h3>
      <h3 className=" pt-4">
        Gain deeper insights with relevant KPIs, and use it to understand your
        partnerships better.
      </h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksC = () => (
  <HowItWorksLayout
    image={consumer3}
    imageAlt="A robot alerting a person of some issue"
    dark
    title="Stay Ahead of Your Partnerships"
    subtitle="By Automated Monitoring and Alerting on Reports"
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Never be caught off guard again. Forger continuously monitors your
        reports and alerts you to potential issues, giving you peace of mind
        that your partnerships are always on track.{" "}
      </h3>
      <h3 className=" pt-4">
        This is completely automated. You don't have to set anything up.
      </h3>
    </div>
  </HowItWorksLayout>
);

const Pricing = ({ setUserKind }: { setUserKind: (s: string) => unknown }) => {
  return (
    <div className="flex flex-col justify-start gap-4 p-8 sm:p-8" id="pricing">
      <h1 className="text-4xl font-semibold text-center">It's Free? How?</h1>
      <div className="flex flex-col sm:flex-row justify-between pt-8 gap-4 sm:gap-8">
        <div className="flex flex-col items-center sm:flex-1">
          <h2 className="text-xl font-semibold text-center">
            Forger is Free For You
          </h2>
          <h2 className="text-lg text-center font-normal max-w-2xl pt-4">
            We believe the power Forger brings for you is great, but we also
            know that it isn't life changing (yet). So we give it to you for
            free, since our mission is to rethink reporting in todays world,
            whether or not we profit from it. <br /> <br />
            If you want to tip us, we won't say no 😃️
          </h2>
          <div className="pt-4 flex flex-col items-center">
            <button
              onClick={hangon}
              className="bg-orange-400 hover:bg-orange-500 font-semibold text-white py-2 px-4 rounded-sm"
            >
              Create A Space
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-1">
          <h2 className="text-xl font-semibold text-center capitalize">
            We work with your partners to automate the entire reporting stack
          </h2>
          <h2 className="text-lg text-center font-normal max-w-2xl pt-4">
            This is the real magic of our product. <br />
            We work with your partners to directly integrate with your datasets
            to create and manage reports automatically. This simplifies
            operations while allowing for unparalleled customization in
            reporting. We all know making the reports is much more complex than
            reading them!
          </h2>
          <div className="pt-4 flex flex-col items-center">
            <button
              onClick={() => setUserKind("producer")}
              className="bg-transparent hover:bg-orange-400 text-orange-700 hover:text-white py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
            >
              How Can I Simplify My Reporting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserKindConsumer = ({
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
      <Pricing setUserKind={setUserKind} />
    </div>
  );
};
