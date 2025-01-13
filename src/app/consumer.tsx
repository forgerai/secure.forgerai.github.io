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
        <h1 className="text-4xl sm:text-7xl font-semibold text-center">
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
      <div className="flex flex-col sm:flex-row justify-between pt-8 gap-24 sm:gap-8">
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

const Footer = () => (
  <div className="w-full py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 text-center md:text-left">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h3 className="font-semibold text-lg">Company</h3>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          About Us
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Careers
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Blog
        </a>
      </div>

      <div className="flex flex-col gap-4 items-center md:items-start">
        <h3 className="font-semibold text-lg">Product</h3>
        <a href="/" className="text-gray-600 hover:text-orange-500">
          Features
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-orange-500">
          Pricing
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Security
        </a>
        <a
          href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
          className="text-gray-600 hover:text-orange-500"
        >
          Talk To Us
        </a>
      </div>

      {/* <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              Documentation
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              Help Center
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              API Reference
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              Community
            </a>
          </div> */}

      <div className="flex flex-col gap-4 items-center md:items-start">
        <h3 className="font-semibold text-lg">Legal</h3>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Terms of Service
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-500">
          Cookie Policy
        </a>
        {/* <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div> */}
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-200">
      <p className="text-center text-gray-500">
        © 2024 Forger. All rights reserved.
      </p>
    </div>
  </div>
);

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
      <Footer />
    </div>
  );
};
