"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import consumer1 from "./consumer-1.webp";
import consumer2 from "./consumer-2.webp";
import consumer3 from "./consumer-3.webp";
import Link from "next/link";
import { Footer } from "./footer";

const hangon = () => alert("Hang on tight, we're on it!");

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      id="hero-consumer"
    >
      <div className="flex flex-col justify-center items-center gap-4 max-w-5xl p-8 sm:p-16 min-h-[75vh] ">
        <h1 className="text-4xl sm:text-7xl font-semibold text-center">
          A Single Pane of Glass
          <br />
          For Access Management
        </h1>
        <h2 className="text-lg text-center font-normal max-w-2xl">
          Streamline your security strategy with Forger — define, enforce, and
          optimize access policies effortlessly across all your systems from one
          place.
        </h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-8 justify-center items-center">
          <Link
            href="https://app.forger.ai"
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 px-8 rounded-sm transform duration-200 hover:px-16"
          >
            Try It Out
          </Link>
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
  callToAction,
  id,
}: {
  children: React.ReactNode;
  dark?: boolean;
  reversed?: boolean;
  image?: StaticImageData;
  imageAlt?: string;
  title: string;
  subtitle: string;
  callToAction?: {
    text: string;
    href?: string;
    newTab?: boolean;
    action?: () => unknown;
  };
  id?: string;
}) => {
  return (
    <div
      id={id}
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
          {callToAction && callToAction.action && (
            <button
              onClick={callToAction.action}
              className="bg-transparent relative transform duration-200 hover:bg-orange-400 text-orange-700 hover:text-white hover:px-12 py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
            >
              {callToAction.text}
            </button>
          )}
          {callToAction && callToAction.href && callToAction.newTab && (
            <a
              href={callToAction.href}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-transparent relative transform duration-200 hover:bg-orange-400 text-orange-700 hover:text-white hover:px-12 py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
            >
              {callToAction.text}
            </a>
          )}
          {callToAction && callToAction.href && !callToAction.newTab && (
            <Link
              href={callToAction.href}
              className="bg-transparent relative transform duration-200 hover:bg-orange-400 text-orange-700 hover:text-white hover:px-12 py-2 px-4 border border-orange-700 hover:border-transparent rounded-sm"
            >
              {callToAction.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const HowItWorksA = () => (
  <HowItWorksLayout
    id="learn"
    dark
    image={consumer1}
    imageAlt="A person frustrated having to go through a ton of emails"
    title="Unified Control"
    subtitle="by Centralizing Policy Management"
    callToAction={{
      text: "Centralize Your Policies",
      newTab: true,
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Define all access policies in one place, and let Forger automatically
        provision them across your entire tech stack.
      </h3>
      <h3 className=" pt-4">
        Say goodbye to juggling policies on multiple platforms and maintaining
        them manually.
      </h3>
      <h3 className=" pt-4">Easy As {pie}.</h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksB = () => (
  <HowItWorksLayout
    reversed
    title="Seamless Policy Enforcement"
    subtitle="by Service Aware Policy Integrations"
    image={consumer2}
    imageAlt="A successful business partnership"
    callToAction={{
      text: "Secure Your Systems",
      newTab: true,
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Forger pushes policies to your systems natively, ensuring no workflow
        changes nor policy circumventions.
      </h3>
      <h3 className=" pt-4">Your tools, your way—secured.</h3>
    </div>
  </HowItWorksLayout>
);

const HowItWorksC = () => (
  <HowItWorksLayout
    image={consumer3}
    imageAlt="A robot alerting a person of some issue"
    dark
    title="Proactive Privilege Optimization"
    subtitle="By Automated Monitoring of Privilege Usage"
    callToAction={{
      text: "Optimize Your Privileges",
      newTab: true,
      href: "https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/",
    }}
  >
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">
        Never be caught off guard again. Forger continuously monitors your
        privilege usage and alerts you to potential issues.
      </h3>
      <h3 className=" pt-4">
        Identify and resolve over-privileged access completely automatically.
      </h3>
    </div>
  </HowItWorksLayout>
);

const Pricing = () => (
  <div
    className="flex flex-col justify-center items-center gap-8 py-16 px-8 "
    id="pricing"
  >
    <h2 className="text-4xl font-semibold text-center max-w-3xl">
      Early Access Pricing
    </h2>
    <p className="text-xl text-center max-w-2xl ">
      As we're in the early stages of our journey, we work closely with each
      customer to understand their unique needs and provide tailored solutions.
      As an early adopter, you'll receive preferential pricing that reflects
      your valuable role in shaping our product.
    </p>
    <a
      href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
      target="_blank"
      referrerPolicy="no-referrer"
      className="text-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-8 rounded-sm transform duration-200 hover:px-12"
    >
      Let's Discuss Your Needs
    </a>
  </div>
);
const AWS = () => (
  <div className="group relative">
    <svg
      viewBox="0 0 24 24"
      width="64"
      height="64"
      className="fill-current text-[#FF9900] hover:scale-110 transition-transform duration-200"
    >
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.359.056.535.096.168.048.327.096.487.144.16.048.288.096.383.144a.653.653 0 0 1 .24.2.438.438 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
    </svg>
  </div>
);
const WantMore = () => (
  <div className="group relative">
    <a
      href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-gray-400 hover:scale-110 transition-transform duration-200 cursor-pointer">
        <span className="text-xl text-gray-400">+</span>
      </div>
    </a>
  </div>
);

const Integrations = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-8 px-8">
      <h2 className="text-4xl font-semibold text-center max-w-3xl">
        Integrations
      </h2>

      <div className="flex flex-row gap-16 py-8">
        <AWS />
        <WantMore />
      </div>
    </div>
  );
};

export const UserKindConsumer = () => {
  return (
    <div className={`flex flex-col gap-8 flex-1`}>
      <Hero />
      <Integrations />
      <HowItWorksA />
      <HowItWorksB />
      <HowItWorksC />
      <Pricing />
      <Footer />
    </div>
  );
};
