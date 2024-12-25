"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";


const Hero = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 max-w-5xl p-8 sm:p-16 min-h-[75vh] ">
          <h1 className="text-7xl font-semibold text-center">A Single Pane of Glass<br />For All Your Partners</h1>
          <h2 className="text-lg text-center font-normal max-w-2xl">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h2>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-8 justify-center items-center">
            <a href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
          target="_blank"
          referrerPolicy="no-referrer" className="relative p-[3px]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div className="group relative transform rounded-[6px] px-8 py-2 text-lg text-white duration-200 hover:bg-transparent hover:px-12">
                    Contact Us
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
    )
  }
  
  const HowItWorksLayout = ({ children, id, light, reversed, image, imageAlt, title, subtitle }: { id?: string, children: React.ReactNode, light?: boolean, reversed?: boolean, image?: StaticImageData, imageAlt?: string, title: string, subtitle: string }) => {
    return (
      <div className={`flex flex-col justify-start gap-4 sm:gap-8 p-8 sm:p-8 sm:py-28 ${light ? 'bg-stone-900' : ''}`} id={id}>
  
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <h2 className="text-2xl font-semibold">{subtitle}</h2>
        </div>
        <div className={`flex flex-col justify-around gap-10 ${reversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
          {
            image ?
            <Image className="sm:max-h-[55vh] sm:max-w-[55vh]" src={image} alt={imageAlt || ""} />
              : <div />
          }
          <div className="flex flex-col justify-center items-center text-xl">
            {children}
          </div>
        </div>
      </div>
    )
  }
  
  const HowItWorksA = () => <HowItWorksLayout id="learn" light imageAlt="A person pulling their hair out having to go through a ton of emails" title="Reduce Friction In Your Partnership Strategy" subtitle="By Centralizing Reports and Data Across All Partners">
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">Don't waste time sifting through your emails to find that one relevant report to understand your partnerships. We've all done this. It's horrible every time. </h3>
      <h3 className=" pt-4">You forward your reports to us, we give you one place where you can see all your partnerships, and their histories, in one go.</h3>
      <h3 className=" pt-4">Easy As pie.</h3>
    </div>
  </HowItWorksLayout>
  
  const HowItWorksB = () => <HowItWorksLayout
    reversed
    title="Understand Your Partnerships Better"
    subtitle="By Asking For KPIs and Metrics That You Care About"
  >
    <h3 className="text-center font-normal max-w-2xl">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h3>
  </HowItWorksLayout>
  
  const HowItWorksC = () => <HowItWorksLayout light title="Increase Confidence In Your Partnerships" subtitle="By Automated Monitoring and Alerting on Reports">
    <div className="flex flex-col py-8 max-w-xl">
      <h3 className="">Forger allows you to understand the value your partners bring you and monitor the health of your partnerships, allowing you to keep your partnerships healthy and strategic.</h3>
      <a
          href="https://outlook.office365.com/owa/calendar/QuickIntro@forger.ai/bookings/"
          target="_blank"
          referrerPolicy="no-referrer"
          className="relative p-[3px]"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500" />
          <div className="group relative  transform rounded-[6px] bg-gradient-to-r from-purple-500  to-indigo-500 px-8 py-2 text-white duration-200 hover:px-12">
            Talk With Us
          </div>
        </a>
    </div>
  </HowItWorksLayout>

export const UserKindProducer = ({ setUserKind, show }: { setUserKind: (s: string) => unknown, show: boolean}) => {
  return (
    <div className={`${show ? 'flex' : 'hidden'} flex-col gap-8 flex-1`}>
        <Hero />
        <HowItWorksA />
        <HowItWorksB />
        <HowItWorksC />
      </div>
  );
};