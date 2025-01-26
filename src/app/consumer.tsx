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
          <button
            onClick={hangon}
            className="bg-orange-400 border-orange-400 hover:bg-orange-500 text-white py-2 px-8 rounded-sm transform duration-200 hover:px-16"
          >
            Create A Space
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

export const UserKindConsumer = () => {
  return (
    <div className={`flex flex-col gap-8 flex-1`}>
      <Hero />
      <HowItWorksA />
      <HowItWorksB />
      <HowItWorksC />
      <Pricing />
      <Footer />
    </div>
  );
};
