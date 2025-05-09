import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SignupModal } from "@/components/SignupModal";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

const featureData = [
  {
    feature: "Free activation",
    URLINK: "✅ Yes",
    competitors: "❌ No, often paid",
  },
  {
    feature: "Initial free clicks",
    URLINK: "✅ 500",
    competitors: "❌ No free credit",
  },
  {
    feature: "Payment model",
    URLINK: "✅ PPC – Pay only for received clicks",
    competitors: "❌ Fixed subscription or hidden costs",
  },
  {
    feature: "Free UTM management",
    URLINK: "✅ Included",
    competitors: "❌ Often paid service",
  },
  {
    feature: "Intuitive interface",
    URLINK: "✅ Clean and simple design",
    competitors: "❌ Complex or outdated",
  },
  {
    feature: "Marketing optimization",
    URLINK: "✅ Advanced and customizable tracking",
    competitors: "❌ Limited or extra cost",
  },
];

const faqData = [
  {
    question: "Is URLINK really free?",
    answer: "Yes! Start with 500 free clicks and only pay for additional clicks when you need them. No subscription required."
  },
  {
    question: "How does the PPC payment system work?",
    answer: "Pay-per-click means you only pay for actual clicks beyond your free limit. Each additional click costs €0.003, billed monthly."
  },
  {
    question: "Can I track my link performance?",
    answer: "Yes! Get detailed analytics including click counts, geographic data, and device types in real-time."
  },
  {
    question: "Does URLINK support deep linking?",
    answer: "Yes, we support deep linking for major platforms including Instagram, TikTok, YouTube, and more."
  },
  {
    question: "Is there a limit to the number of links I can create?",
    answer: "No, create unlimited links! You only pay for clicks, not link creation."
  },
  {
    question: "Can I customize the generated links?",
    answer: "Yes, customize your links with UTM parameters and set specific behaviors for different platforms."
  },
  {
    question: "Does URLINK work with ad campaigns?",
    answer: "Absolutely! URLINK is perfect for tracking and optimizing ad campaigns across all platforms."
  },
  {
    question: "How can I get started?",
    answer: "Simply sign up for free, paste your first link, and start tracking! No credit card required."
  },
];

const testimonialData = [
  {
    highlighted: "Finally a deeplink service that doesn’t force you into a fixed subscription!",
    content: " With Urlink, I can manage my links smartly and only pay for actual clicks. The free UTM management is an incredible added value!",
    author: "Marco R.",
    image: "/image-2.png"
  }
];

const benefitsData = [
  {
    id: 1,
    title: "Better user experience",
    description:
      "Take users directly to the desired content inside an app or site, reducing unnecessary steps and increasing engagement.",
  },
  {
    id: 2,
    title: "Higher conversions",
    description:
      "Easier access to specific pages, such as products or promotions, improving purchase or action completion rates.",
  },
  {
    id: 3,
    title: "Marketing optimization",
    description:
      "Track user behavior and optimize ads, emails, or push notifications with direct and personalized links.",
  },
  {
    id: 4,
    title: "Free UTM management",
    description:
      "With URLINK you can create, track and analyze UTMs at no cost, unlike many competitors who charge for this service.",
  },
];

const pricingFeatures = [
  "Free activation",
  "500 initial free clicks",
  "UTM management included and free",
  "You pay only for received clicks",
  "Simple and fast interface",
];

// ************ SECTION COMPONENTS ************

function HeaderSection() {
  return (
    <header className="flex justify-between items-center px-36">
      <div className="flex items-center">
        <img className="" alt="Group" src="/urlinklogo-white.svg" />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white text-xl hover:bg-[#5418CD]">
          FAQ
        </Button>
        <div className="relative">
          <Select>
            <SelectTrigger className="bg-[#5e17eb] rounded-lg text-white text-xl flex items-center gap-2 w-[100px] h-[50px] pl-4 pr-2 focus:ring-0">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 25C16.5568 25 19.4401 19.6274 19.4401 13C19.4401 6.37258 16.5568 1 13.0001 1C9.44334 1 6.56006 6.37258 6.56006 13C6.56006 19.6274 9.44334 25 13.0001 25Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17.8H24M2 8.2H24M13 1V25" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <SelectValue placeholder="EN" />
              <span className="absolute right-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66699 6.66699L8.00033 10.0003L11.3337 6.66699" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </SelectTrigger>
            <SelectContent className="rounded-2xl shadow-lg mt-2 bg-white p-2 z-30">
              <SelectItem
                value="EN"
                className="flex items-center px-2 py-1 text-[#4f4f4f] data-[highlighted]:bg-[#f7f7f7] data-[highlighted]:text-[#5e17eb] rounded-md gap-14 transition-all duration-200 data-[highlighted]:bg-[rgb(94,23,235,0.15)]"
              >
                <div className="flex items-center gap-2 text-xl">
                  <span className="font-bold text-inherit">EN</span>
                  <span className="text-inherit">- English</span>
                </div>
                <span className="ml-auto text-inherit">
                  <Check size={16} />
                </span>
              </SelectItem>
              <SelectItem
                value="IT"
                className="flex items-center px-2 py-1 text-[#4f4f4f] data-[highlighted]:bg-[#f7f7f7] data-[highlighted]:text-[#5e17eb] rounded-md gap-14 transition-all duration-200 data-[highlighted]:bg-[rgb(94,23,235,0.15)]"
              >
                <div className="flex items-center gap-2 text-xl">
                  <span className="font-bold text-inherit">IT</span>
                  <span className="text-inherit">- Italian</span>
                </div>
                <span className="ml-auto text-inherit">
                  <Check size={16} />
                </span>
              </SelectItem>
              <SelectItem
                value="DE"
                className="flex items-center px-2 py-1 text-[#4f4f4f] data-[highlighted]:bg-[#f7f7f7] data-[highlighted]:text-[#5e17eb] rounded-md gap-14 transition-all duration-200 data-[highlighted]:bg-[rgb(94,23,235,0.15)]"
              >
                <div className="flex items-center gap-2 text-xl">
                  <span className="font-bold text-inherit">DE</span>
                  <span className="text-inherit">- German</span>
                </div>
                <span className="ml-auto text-inherit">
                  <Check size={16} />
                </span>
              </SelectItem>
              <SelectItem
                value="FR"
                className="flex items-center px-2 py-1 text-[#4f4f4f] data-[highlighted]:bg-[#f7f7f7] data-[highlighted]:text-[#5e17eb] rounded-md gap-14 transition-all duration-200 data-[highlighted]:bg-[rgb(94,23,235,0.15)]"
              >
                <div className="flex items-center gap-2 text-xl">
                  <span className="font-bold text-inherit">FR</span>
                  <span className="text-inherit">- French</span>
                </div>
                <span className="ml-auto text-inherit">
                  <Check size={16} />
                </span>
              </SelectItem>
              <SelectItem
                value="ES"
                className="flex items-center px-2 py-1 text-[#4f4f4f] data-[highlighted]:bg-[#f7f7f7] data-[highlighted]:text-[#5e17eb] rounded-md gap-14 transition-all duration-200 data-[highlighted]:bg-[rgb(94,23,235,0.15)]"
              >
                <div className="flex items-center gap-2 text-xl">
                  <span className="font-bold text-inherit">ES</span>
                  <span className="text-inherit">- Spanish</span>
                </div>
                <span className="ml-auto text-inherit">
                  <Check size={16} />
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="ghost" className="bg-[#5e17eb] text-white text-xl hover:bg-[#5418CD]">
          <Link href="/login">
            Login
          </Link>
        </Button>
        <Button variant="outline" className="border-white text-white text-xl hover:bg-white hover:text-[#5e17eb]">
          <Link href="/signup">
            Register free
          </Link>
        </Button>
      </div>
    </header >
  );
}

function UrlShortenerForm() {
  return (
    <div className="flex flex-col items-center mt-24">
      <Card className="w-1/2 h-fit bg-white rounded-2xl shadow-ombra">
        <CardContent>
          <div className="flex flex-col items-center pt-12 px-8">
            <h2 className="font-bold text-[#4e4e4e] text-2xl text-center tracking-[-0.24px]">
              Paste your loooong link below.
            </h2>
            <p className="font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px] mt-2">
              <span className="tracking-[-0.04px]">
                We’ll shorten it for you.{" "}
              </span>
              <span className="tracking-[-0.04px] underline">Free</span>
              <span className="tracking-[-0.04px]">.</span>
            </p>

            <div className="mt-8 w-full relative">
              <Input
                className="h-[72px] bg-[#f7f7f7] rounded-2xl pl-10 text-xl text-[#5e17eb] placeholder:text-[#a9a9a9] border-2 border-[#f7f7f7] focus:border-[#5e17eb]"
                placeholder="Paste here"
              />
              {/* <img
                className="absolute w-px h-10 top-4 left-5 object-cover"
                alt="Line"
                src="/line-1.svg"
              /> */}
            </div>

            <SignupModal />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full h-[1489px]">
      <div className="w-full h-fit bg-[#5e17eb] rounded-[0px_0px_40px_40px] py-16">
        <HeaderSection />
        <div className="mt-8">
          <h1 className="font-bold text-[#f7f7f7] text-5xl text-center tracking-[-0.48px] leading-[64px]">
            <div>
              Create your deeplink now and
            </div>
            <div>
              start making{" "}
              <span className="relative group">
                <span className="relative z-10">
                  <span className="relative"></span>
                  $money
                  <div
                    className="absolute bottom-0 left-1 w-full h-[2px] bg-white transition-[height,background-color] duration-300 ease-in-out group-hover:h-[5px] group-hover:bg-[#42c97a]"
                  />
                </span>
                <span className="ml-2 inline-block group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 ease-in-out">
                  🤑
                </span>
              </span>
            </div>
          </h1>
        </div>
        <UrlShortenerForm />
        <div className="mt-10">
          <p className="font-semibold text-white text-xl text-center tracking-[-0.20px]">
            Sign up for free and get:
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-xl border border-[#42c97a] flex items-center justify-center">
                <img className="w-3.5 h-2.5" alt="Layer" src="/layer2.svg" />
              </div>
              <span className="ml-2 font-light text-white text-xl">
                Unlimited links
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-xl border border-[#42c97a] flex items-center justify-center">
                <img className="w-3.5 h-2.5" alt="Layer" src="/layer2.svg" />
              </div>
              <span className="ml-2 font-light text-white text-xl">
                500 free clicks
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-xl border border-[#42c97a] flex items-center justify-center">
                <img className="w-3.5 h-2.5" alt="Layer" src="/layer2.svg" />
              </div>
              <span className="ml-2 font-light text-white text-xl">
                UTMs included
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <Image width={14} height={7} className="w-[14px] h-[7px]" alt="Vector" src="/vector-6.svg" />
          <div className="inline-flex items-center gap-3 pl-1 pr-4 py-1 bg-[#f7f7f7] rounded-[56px] w-fit mt-2">
            <Image width={48} height={48} className="w-12 h-12 object-cover rounded-full" alt="Image" src="/image.png" />
            <div>
              <p className="font-medium text-[#200062] text-sm tracking-[-0.14px]">
                Best deeplink tool I’ve ever used. Well done 👏
              </p>
              <p className="font-normal text-[#200062] text-sm">
                Antonio M. - NoProb CEO
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-14 px-36">
          <img className="h-8" alt="Group" src="/group-12.png" />
          <img className="h-8" alt="Group" src="/group-14.png" />
          <img className="h-12" alt="Group" src="/group-16.png" />
          <img className="h-8" alt="Group" src="/group-13.png" />
          <img className="h-10" alt="Group" src="/group-15.png" />
          <img className="h-8" alt="Group" src="/group-17.png" />
        </div>
      </div>
      {/* Floating callout text and emoji */}
      <div className="flex flex-col">
        <h2 className="font-extrabold text-[#5e17eb] text-5xl text-center tracking-[-0.48px] leading-[64px] mt-24">
          Ok, but what are the <br /> benefits of URLINK?
        </h2>
        <div className="flex flex-row items-center justify-evenly mt-12">
          <span className="font-bold text-[#4e4e4e] text-8xl tracking-[-0.96px]">
            🚀
          </span>
          <p className="font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px]">
            URLINK makes browsing faster and more effective with <br /> smart deeplinks,
            improving user experience, <br /> conversions, and marketing campaigns.
          </p>
          <span className="font-bold text-[#4e4e4e] text-8xl tracking-[-0.96px]">
            🤯
          </span>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="relative mt-14 px-36">
      <div className="grid grid-cols-3 gap-16 mt-16">
        {benefitsData.slice(0, 3).map((benefit) => (
          <div key={benefit.id} className="flex flex-col items-center">
            <span className="font-bold text-[#5e17eb] text-[40px] text-center tracking-[-0.40px]">
              {benefit.id}
            </span>
            <h3 className="font-bold text-[#4e4e4e] text-2xl text-center tracking-[-0.24px] mt-4">
              {benefit.title}
            </h3>
            <p className="font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px] mt-4">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="inline-flex items-center justify-center p-2 w-fit bg-[#5e17eb] mb-8">
          <h2 className="font-bold text-[#f7f7f7] text-[40px] text-center tracking-[-0.40px]">
            Here’s a special tip for you
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[#5e17eb] text-[40px] text-center tracking-[-0.40px]">
            4
          </span>
          <h3 className="font-bold text-[#4e4e4e] text-2xl text-center tracking-[-0.24px] mt-4">
            {benefitsData[3].title}
          </h3>
          <p className="font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px] mt-4 w-[420px]">
            {benefitsData[3].description}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <span className="font-bold text-[#4e4e4e] text-8xl text-center tracking-[-0.96px]">
          🫶
        </span>
      </div>
      {/* <div className="flex justify-center mt-16">
        <Button className="bg-[#42c97a] text-white text-xl">
          Create your free account now
        </Button>
      </div> */}
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="mt-[100px] px-36">
      <div className="bg-[#f7f7f7] rounded-[32px] shadow-ombra p-10">
        <h2 className="font-extrabold text-[#5e17eb] text-5xl text-center tracking-[-0.48px] leading-[64px] mb-16">
          How does URLINK differ from competitors?
        </h2>
        <div className="flex">
          <div className="w-[396px] flex flex-col justify-between py-10">
            <div className="font-bold text-transparent text-2xl">
              Feature
            </div>
            {featureData.map((item, index) => (
              <React.Fragment key={index}>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#4e4e4e] text-xl leading-8">
                    {item.feature}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="w-[582px] bg-white rounded-[32px] shadow-lg flex flex-col justify-between p-10 pt-11">
            <div className="flex items-center h-[32px]">
              <img className="w-36" alt="Group" src="/urlinklogo-purple.svg" />
            </div>
            {featureData.map((item, index) => (
              <React.Fragment key={index}>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-nero text-xl leading-8">
                    {item.URLINK.split(" ")[0]}
                  </span>
                  <span className="font-normal text-[#4e4e4e] text-xl leading-8">
                    {item.URLINK.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="w-[420px] flex flex-col justify-between py-10 ml-8">
            <div className="font-bold text-[#4e4e4e] text-2xl text-left tracking-[-0.24px]">
              Competitors
            </div>
            {featureData.map((item, index) => (
              <React.Fragment key={index}>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-nero text-xl leading-8">
                    {item.competitors.split(" ")[0]}
                  </span>
                  <span className="font-normal text-[#4e4e4e] text-xl leading-8">
                    {item.competitors.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button className="mt-8 bg-[#42c97a] hover:bg-[#42c97a] text-white text-xl flex items-center gap-2 rounded-lg group transition-all duration-500 ease-in-out overflow-hidden hover:pr-10 relative">
          <Link href="/signup">
            <span className="flex items-center">
              Create your free account now
              <span
                className="ml-2 overflow-hidden transition-opacity duration-500 ease-in-out delay-250 group-hover:opacity-100 opacity-0 absolute right-4"
              >
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7086 8.70711C19.0991 8.31658 19.0991 7.68342 18.7086 7.29289L12.3446 0.928932C11.9541 0.538408 11.3209 0.538408 10.9304 0.928932C10.5399 1.31946 10.5399 1.95262 10.9304 2.34315L16.5873 8L10.9304 13.6569C10.5399 14.0474 10.5399 14.6805 10.9304 15.0711C11.3209 15.4616 11.9541 15.4616 12.3446 15.0711L18.7086 8.70711ZM0.00146484 9H18.0015V7H0.00146484V9Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="mt-[100px] px-36 relative">
      <div className="w-full max-w-[1178px] mx-auto">
        <iframe
          className="w-full h-[734px] rounded-[40px] border-[2px] border-solid border-[#5e17eb] shadow-md"
          style={{
            border: "2px solid #5e17eb",
            boxShadow: "0 0 0 16px #f7f7f7",
          }}
          src="https://www.youtube.com/embed/23ZUf8QFHxY"
          title="URLINK in 3 minutes"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="mt-[100px] px-36">
      <div>
        <h2 className="font-extrabold text-[#5e17eb] text-5xl text-center tracking-[-0.48px] leading-[64px] mb-4">
          Why choose URLINK?
        </h2>
        <div className="font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px] mb-12">
          Discover the exclusive benefits of URLINK with <br /> a smooth experience optimized for your digital <br /> marketing.
        </div>
      </div>
      <div className="flex gap-16">
        <div className="w-1/2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="py-4 font-semibold text-[#4e4e4e] text-xl">
                1. 💰 Pay only for clicks
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-[#4e4e4e] text-base">
                URLINK is a PPC service: no subscriptions, you pay only for actual clicks on your links.
              </AccordionContent>
            </AccordionItem>
            <Separator className="my-2" />
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="py-4 font-semibold text-[#4e4e4e] text-xl">
                2. 📊 Free UTMs & advanced tracking
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-[#4e4e4e] text-base">
                With URLINK you can create, track and analyze UTMs at no extra cost.
              </AccordionContent>
            </AccordionItem>
            <Separator className="my-2" />
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="py-4 font-semibold text-[#4e4e4e] text-xl">
                3. ⚡ Intuitive and fast platform
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-[#4e4e4e] text-base">
                Simple and fast interface to manage all your links.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image width={436} height={436}
            className="w-[436px] h-[436px] object-cover border-[16px] border-[#f7f7f7] rounded-[40px] shadow-md"
            alt="Ppc concept"
            src="/ppc-concept-illustration-1.png"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ idx }: { idx: number; }) {
  const t = testimonialData[idx];
  return (
    <section className="mt-[144px] mb-[200px] flex justify-center px-6">
      <div className="flex max-w-5xl items-start gap-10">
        {/* Image */}
        <img
          src={t.image}
          alt={t.author}
          className="w-[164px] h-[164px] object-cover rounded-[20px] mt-4"
        />

        {/* Text Content */}
        <div className="flex flex-col">
          {/* Quote Icon */}
          <span className="text-[124px] text-[#5e17eb] leading-none mb-2 h-12
          ">”</span>

          {/* Main Text */}
          <p className="text-base leading-7 text-[#4e4e4e] max-w-[35vw]">
            <span className="font-bold text-[#5e17eb]">
              {t.highlighted}
            </span>{" "}
            {t.content}
          </p>

          {/* Author */}
          <p className="mt-2 italic font-medium text-[#4e4e4e]">– {t.author}</p>
        </div>
      </div>
    </section>
  );
}

function DashboardPreviewSection() {
  return (
    <section className="mt-[100px] relative">
      <div className="w-full h-[804px] rounded-[40px_40px_0px_0px] bg-gradient-to-b from-[#5e17eb] to-white">
        <h2 className="font-extrabold text-[#f7f7f7] text-5xl text-center tracking-[-0.48px] leading-[64px] pt-[103px]">
          Why choose URLINK?
        </h2>
        <p className="w-[586px] font-normal text-[#f7f7f7] text-xl text-center tracking-[-0.20px] mx-auto mt-4">
          Discover URLINK's exclusive benefits with a smooth experience optimized for your digital marketing.
        </p>
        <img
          className="w-[80vw] mx-auto mt-[103px] object-cover"
          alt="Dashboard link"
          src="/dashboard---link-performance-1.png"
        />
      </div>
      <div className="mt-[403px] flex justify-center">
        <Button className="bg-[#42c97a] hover:bg-[#42c97a] text-white text-xl flex items-center gap-2 rounded-lg group transition-all duration-500 ease-in-out overflow-hidden hover:pr-10 relative">
          <Link href="/signup">
            <span className="flex items-center">
              Create your free account now
              <span
                className="ml-2 overflow-hidden transition-opacity duration-500 ease-in-out delay-250 group-hover:opacity-100 opacity-0 absolute right-4"
              >
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7086 8.70711C19.0991 8.31658 19.0991 7.68342 18.7086 7.29289L12.3446 0.928932C11.9541 0.538408 11.3209 0.538408 10.9304 0.928932C10.5399 1.31946 10.5399 1.95262 10.9304 2.34315L16.5873 8L10.9304 13.6569C10.5399 14.0474 10.5399 14.6805 10.9304 15.0711C11.3209 15.4616 11.9541 15.4616 12.3446 15.0711L18.7086 8.70711ZM0.00146484 9H18.0015V7H0.00146484V9Z"
                    fill="white"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mt-[100px] flex flex-col items-center">
      <h2 className="font-extrabold text-[#5e17eb] text-5xl text-center tracking-[-0.48px] leading-[64px] w-[856px]">
        Choose the most convenient and transparent solution for your business!
      </h2>
      <p className="w-[598px] font-normal text-[#4e4e4e] text-xl text-center tracking-[-0.20px] mt-8">
        With URLINK you get free activation, no obligations, and pay only for actual clicks. Why pay more for the same service?
      </p>
      <div className="mt-16 relative">
        <Card className="w-[855px] h-fit bg-[#5e17eb] rounded-[40px] border shadow-ombra">
          <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f7f7f7] text-[#4e4e4e] text-sm px-4 py-2 rounded-[40px] border border-[#5e17eb]">
            THE WISEST CHOICE
          </Badge>
          <CardContent className="flex flex-col items-center pt-12">
            <h3 className="font-bold text-[#f7f7f7] text-[40px] text-center tracking-[-0.40px]">
              Account
            </h3>
            <div className="flex flex-col items-center gap-2 mt-4">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <img className="w-3.5 h-2.5 mr-2" alt="Layer" src="/layer2.svg" />
                  <span className="font-normal text-[#f7f7f7] text-xl text-center tracking-[-0.20px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button className="mt-8 bg-[#42c97a] hover:bg-[#42c97a] text-white text-xl flex items-center gap-2 rounded-lg group transition-all duration-500 ease-in-out overflow-hidden hover:pr-10 relative">
                <Link href="/signup">
                  <span className="flex items-center">
                    Create your free account now
                    <span
                      className="ml-2 overflow-hidden transition-opacity duration-500 ease-in-out delay-250 group-hover:opacity-100 opacity-0 absolute right-4"
                    >
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7086 8.70711C19.0991 8.31658 19.0991 7.68342 18.7086 7.29289L12.3446 0.928932C11.9541 0.538408 11.3209 0.538408 10.9304 0.928932C10.5399 1.31946 10.5399 1.95262 10.9304 2.34315L16.5873 8L10.9304 13.6569C10.5399 14.0474 10.5399 14.6805 10.9304 15.0711C11.3209 15.4616 11.9541 15.4616 12.3446 15.0711L18.7086 8.70711ZM0.00146484 9H18.0015V7H0.00146484V9Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </Button>
            </div>
            <p className="text-[#f7f7f7] text-center tracking-[-0.04px] mt-4">
              Free forever. No hidden costs. Ever.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mt-[100px] px-[20vw]">
      <span className="font-semibold text-[#5e17eb] text-xl tracking-[-0.20px]">
        FAQ
      </span>
      <h2 className="font-bold text-[#4e4e4e] text-[40px] tracking-[-0.40px] mt-2">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 flex flex-col items-center">
        <Accordion type="single" collapsible className="w-4/5">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-[#e5e5e5]"
            >
              <AccordionTrigger className="py-4 font-semibold text-[#4e4e4e] text-xl flex justify-between hover:text-[#5e17eb]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4e4e4e] text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="mt-[100px] bg-[#5e17eb] rounded-[40px_40px_0px_0px] py-16 px-36">
      <div className="flex justify-between items-start w-full">
        <div className="w-1/3">
          <div className="flex items-center -mt-10">
            <img className="" alt="Group" src="/urlinklogo-white.svg" />
          </div>
          <p className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
            The smart solution for your links. <br /> Manage, track, and optimize your links with ease. You pay only for clicks received, no hidden costs. 🚀
          </p>
        </div>
        <div className="w-fit flex justify-evenly items-start gap-16">
          <div className="w-fit">
            <h3 className="font-semibold text-[#f7f7f7] text-base tracking-[-0.16px]">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div className="w-fit">
            <h3 className="font-semibold text-[#f7f7f7] text-base tracking-[-0.16px]">
              Legal Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-normal text-[#f7f7f7] text-base tracking-[-0.16px]">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-fit ml-12">
            <h3 className="font-semibold text-[#f7f7f7] text-base tracking-[-0.16px]">
              Social Links
            </h3>
            <div className="flex items-center gap-6 mt-4">
              <Link href="https://www.instagram.com/molaroriccardo/" target="_blank" rel="noopener noreferrer">
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66912 13.2605C8.66912 10.8668 10.609 8.9259 13.0026 8.9259C15.3963 8.9259 17.3372 10.8668 17.3372 13.2605C17.3372 15.6541 15.3963 17.595 13.0026 17.595C10.609 17.595 8.66912 15.6541 8.66912 13.2605ZM6.32594 13.2605C6.32594 16.948 9.31509 19.9372 13.0026 19.9372C16.6902 19.9372 19.6793 16.948 19.6793 13.2605C19.6793 9.57291 16.6902 6.58376 13.0026 6.58376C9.31509 6.58376 6.32605 9.5727 6.32605 13.2605M18.3835 6.31902C18.3833 6.62762 18.4747 6.92933 18.6461 7.18599C18.8174 7.44265 19.061 7.64274 19.3461 7.76095C19.6311 7.87916 19.9449 7.91019 20.2476 7.8501C20.5503 7.79002 20.8283 7.64153 21.0466 7.4234C21.2649 7.20527 21.4137 6.92731 21.474 6.62466C21.5343 6.32201 21.5035 6.00827 21.3856 5.72312C21.2676 5.43796 21.0677 5.19419 20.8112 5.02264C20.5546 4.85108 20.253 4.75945 19.9444 4.75933H19.9438C19.5301 4.75952 19.1334 4.92389 18.8409 5.21633C18.5483 5.50877 18.3838 5.90537 18.3835 6.31902ZM7.74958 23.8444C6.48187 23.7867 5.79283 23.5755 5.33493 23.3971C4.72787 23.1608 4.29472 22.8793 3.83932 22.4245C3.38391 21.9697 3.10202 21.537 2.86672 20.9299C2.68822 20.4722 2.47706 19.783 2.41943 18.5153C2.35639 17.1447 2.3438 16.733 2.3438 13.2607C2.3438 9.78834 2.35743 9.37776 2.41943 8.00604C2.47716 6.73833 2.68988 6.05044 2.86672 5.59139C3.10306 4.98433 3.38454 4.55118 3.83932 4.09578C4.2941 3.64037 4.72683 3.35848 5.33493 3.12318C5.79263 2.94468 6.48187 2.73352 7.74958 2.67589C9.12016 2.61285 9.53187 2.60027 13.0026 2.60027C16.4734 2.60027 16.8855 2.61368 18.2573 2.6761C19.525 2.73383 20.2129 2.94655 20.6719 3.12339C21.279 3.35868 21.7121 3.64121 22.1675 4.09599C22.6229 4.55077 22.9038 4.98453 23.1401 5.5916C23.3186 6.0493 23.5298 6.73854 23.5874 8.00625C23.6505 9.37797 23.663 9.78854 23.663 13.2609C23.663 16.7332 23.6505 17.1438 23.5874 18.5155C23.5297 19.7832 23.3175 20.4722 23.1401 20.9301C22.9038 21.5372 22.6223 21.9704 22.1675 22.4247C21.7128 22.8791 21.279 23.161 20.6719 23.3973C20.2142 23.5758 19.525 23.787 18.2573 23.8446C16.8867 23.9076 16.475 23.9202 13.0026 23.9202C9.53031 23.9202 9.11974 23.9076 7.74958 23.8446M7.64191 0.336557C6.25771 0.399593 5.31184 0.619078 4.48581 0.940503C3.63086 1.27244 2.90614 1.71775 2.18247 2.44028C1.45879 3.16281 1.01462 3.88763 0.682691 4.74362C0.361266 5.57017 0.141781 6.51552 0.0787441 7.89973C0.0146671 9.28612 0 9.72936 0 13.2605C0 16.7916 0.0146671 17.2348 0.0787441 18.6212C0.141781 20.0055 0.361266 20.9507 0.682691 21.7773C1.01462 22.6322 1.4589 23.3584 2.18247 24.0806C2.90604 24.8029 3.62982 25.2475 4.48581 25.5804C5.3134 25.9018 6.25771 26.1213 7.64191 26.1844C9.02904 26.2474 9.47154 26.2631 13.0026 26.2631C16.5337 26.2631 16.977 26.2484 18.3634 26.1844C19.7477 26.1213 20.6929 25.9018 21.5195 25.5804C22.3744 25.2475 23.0991 24.8032 23.8228 24.0806C24.5465 23.3581 24.9897 22.6322 25.3226 21.7773C25.644 20.9507 25.8645 20.0054 25.9265 18.6212C25.9896 17.2338 26.0042 16.7916 26.0042 13.2605C26.0042 9.72936 25.9896 9.28612 25.9265 7.89973C25.8635 6.51541 25.644 5.56965 25.3226 4.74362C24.9897 3.88867 24.5454 3.16396 23.8228 2.44028C23.1003 1.71661 22.3744 1.27244 21.5205 0.940503C20.6929 0.619078 19.7476 0.398553 18.3644 0.336557C16.9778 0.273208 16.5348 0.257812 13.0042 0.257812C9.47362 0.257812 9.02956 0.27248 7.64244 0.336557" fill="#F7F7F7" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com">
                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.6952 16.3695L15.6773 11.0215H9.96107V9.1301C9.96107 6.3042 11.0699 5.2171 13.9392 5.2171C14.8303 5.2171 15.5478 5.2388 15.9608 5.2822V0.4347C15.1782 0.217 13.2651 0 12.1563 0C6.30847 0 3.61277 2.7608 3.61277 8.7171V11.0215H0.00427246V16.3695H3.61277V28.0063C4.96657 28.3423 6.38267 28.5215 7.84007 28.5215C8.55757 28.5215 9.26527 28.4774 9.96037 28.3934V16.3695H14.6945H14.6952Z" fill="#F7F7F7" />
                </svg>

              </Link>
              <Link href="https://www.x.com">
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.01998 0.858398L10.427 13.4367L0.960693 23.6632H3.09136L11.3793 14.7096L18.0755 23.6632H25.3258L15.3892 10.3775L24.2005 0.858398H22.0699L14.4373 9.10425L8.27021 0.858398H1.01998ZM4.15322 2.42808H7.48394L22.1921 22.0939H18.8614L4.15322 2.42808Z" fill="#F7F7F7" />
                </svg>

              </Link>
              <Link href="https://www.youtube.com">
                <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.594 3.83591C34.1907 2.32908 33.0064 1.14493 31.4996 0.741573C28.7713 0.00976584 17.8257 0.00976562 17.8257 0.00976562C17.8257 0.00976562 6.88037 0.00976584 4.15194 0.741573C2.64512 1.14493 1.46097 2.32908 1.05761 3.83591C0.325806 6.56433 0.325806 12.2603 0.325806 12.2603C0.325806 12.2603 0.325806 17.9564 1.05761 20.6848C1.46097 22.1916 2.64512 23.3758 4.15194 23.7791C6.88037 24.5109 17.8257 24.5109 17.8257 24.5109C17.8257 24.5109 28.7713 24.5109 31.4996 23.7791C33.0064 23.3758 34.1907 22.1916 34.594 20.6848C35.3258 17.9564 35.3258 12.2603 35.3258 12.2603C35.3258 12.2603 35.3229 6.56433 34.594 3.83591Z" fill="#F7F7F7" />
                  <path d="M14.3229 17.5105L23.4157 12.2612L14.3229 7.01172V17.5105Z" fill="#5E17EB" />
                </svg>
              </Link>
              <Link href="https://www.tiktok.com">
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.39173 12.1265C4.57698 12.1265 3.07898 13.6327 3.07898 15.4475C3.07898 16.711 3.81748 17.8088 4.86515 18.36C4.4749 17.8193 4.24215 17.1572 4.24215 16.4409C4.24215 14.6261 5.71856 13.1497 7.53331 13.1497C7.87223 13.1497 8.19715 13.2057 8.50456 13.302V9.30496C8.18665 9.26179 7.86348 9.23438 7.53331 9.23438C7.47615 9.23438 7.42015 9.23729 7.36298 9.23846H7.34781L7.33731 12.2648C7.0299 12.1685 6.73065 12.126 6.39173 12.126V12.1265Z" fill="#F7F7F7" />
                  <path d="M19.0441 6.19979L19.026 6.19629L19.0248 9.21912C16.9948 9.21912 15.1089 8.55121 13.573 7.44871L13.5742 15.4468C13.5742 19.4205 10.3647 22.6329 6.39101 22.6329C4.85568 22.6329 3.43176 22.1685 2.2616 21.3466C3.57818 22.76 5.45301 23.6461 7.5326 23.6461C11.5063 23.6461 14.7385 20.4133 14.7385 16.4402V8.48412C16.2738 9.58604 18.1551 10.2359 20.1851 10.2359V6.32112C19.7937 6.32112 19.4122 6.27854 19.0441 6.19979Z" fill="#F7F7F7" />
                  <path d="M13.5972 15.4473V7.49117C15.1326 8.59308 17.0138 9.24292 19.0438 9.24292V6.20025C17.8713 5.94942 16.8382 5.31942 16.0776 4.44617C14.8508 3.64642 13.9653 2.36658 13.6894 0.875H10.8229L10.8165 16.5649C10.7506 18.3219 9.30447 19.7318 7.53172 19.7318C6.43389 19.7318 5.46206 19.1893 4.86414 18.3604C3.81647 17.8092 3.09956 16.7113 3.09956 15.4478C3.09956 13.6331 4.57597 12.1567 6.39072 12.1567C6.72964 12.1567 7.05456 12.2127 7.36197 12.3089V9.23942C3.46706 9.33042 0.325806 12.5247 0.325806 16.4412C0.325806 18.3353 1.06139 20.0603 2.26072 21.3477C3.43089 22.1696 4.8548 22.6537 6.39014 22.6537C10.3638 22.6537 13.5961 19.4209 13.5961 15.4478L13.5972 15.4473Z" fill="#F7F7F7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-16">
        <img className="w-8 h-8 rounded-full" alt="Img" src="/img-eb741659992c-1-1.png" />
        <p className="ml-3 font-normal text-[#f7f7f7] text-sm tracking-[-0.14px]">
          <span>Hi 👋 I am{' '}</span>
          <span className="font-semibold underline"><Link href={'https://www.instagram.com/molaroriccardo/'}>Riccardo</Link></span>
          <span>
            ,{' '}the creator of URLINK. Follow my other projects on{' '}
          </span>
          <span className="font-semibold underline"><Link href={'https://www.instagram.com/molaroriccardo/'}>Instagram</Link></span>
          <span>.</span>
        </p>
      </div>
    </footer>
  );
}

// **************** MAIN ENTRY *****************

export default function LpIta() {
  return (
    <div className="bg-white flex flex-row justify-center w-full" data-model-id="1:2">
      <div className="bg-white w-full max-w-[1728px] relative">
        <HeroSection />
        <BenefitsSection />
        <ComparisonSection />
        <TestimonialSection idx={0} />
        <VideoSection />
        <FeaturesSection />
        <TestimonialSection idx={0} />
        <DashboardPreviewSection />
        <div
          className="mt-[144px]"
        >
        </div>
        <CTASection />
        <TestimonialSection idx={0} />
        <FAQSection />
        <TestimonialSection idx={0} />
        <FooterSection />
      </div>
    </div>
  );
};
