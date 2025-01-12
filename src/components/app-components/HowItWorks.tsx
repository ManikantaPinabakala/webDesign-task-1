import React from "react";

import SafeSecure from "./SafeSecure";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HowItWorksItems {
  id: string;
  title: string;
  props: {
    id: number;
    title?: string;
    question: string;
    answer: string;
    points: {
      pnt: string;
      img?: string;
    }[];
  }[];
}

interface HowItWorksItemList {
  howItWorksDetails: HowItWorksItems[];
}

const HowItWorks: React.FC<HowItWorksItemList> = ({ howItWorksDetails }) => {
  const section1 = howItWorksDetails?.[6]?.props?.[0]?.points;
  const updatedSection1 = section1?.map((item) => ({
    ...item,
    img: "https://www.medibuddy.in" + item.img,
  }));

  const section2 = howItWorksDetails?.[6]?.props.filter(
    (_item, index) => index !== 0
  );

  return (
    <div className="mt-6 px-6">
      <h1 className="text-main text-base font-semibold mb-5">How It Works?</h1>
      <ul className="flex flex-col gap-4">
        {updatedSection1?.map((eachItem, index) => (
          <li key={index} className="flex gap-8 items-start pl-6">
            <img
              src={eachItem.img}
              alt={`eachItem${index}`}
              className="mt-2 scale-125"
            />
            <p className="text-sm font-normal text-[#47566A] tracking-wide">
              {eachItem.pnt}
            </p>
          </li>
        ))}
      </ul>
      <SafeSecure />
      <h1 className="text-main text-base font-semibold mt-6 mb-4">
        Frequently Asked Questions
      </h1>
      <Accordion className="mb-6" type="single" collapsible>
        {section2?.map((eachItem, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="font-normal text-sm text-[#2E3742]">
              {eachItem.question}
            </AccordionTrigger>
            <AccordionContent className="font-normal text-xs text-[#4D5C6F]">
              <p>
                {eachItem.answer}
                {eachItem.answer.at(-1) !== ":" ? "." : ""}
              </p>
              {eachItem.points.length === 0 ? (
                ""
              ) : (
                <ul className="mt-4 pl-6 flex flex-col gap-2">
                  {eachItem.points.map((eachPoint, index) => (
                    <li key={index} className="list-disc">
                      {eachPoint.pnt}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HowItWorks;
