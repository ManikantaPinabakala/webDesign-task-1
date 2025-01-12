import React, { useState } from "react";
import { Button } from "../ui/button";

import reportTimeImage from "@/assets/reportTimeImage.png";
import home from "@/assets/home.png";
import lab from "@/assets/lab.png";
import whiteTick from "@/assets/white-tick.png";

interface BookTests {
  id: string;
  heading: string;
  categories: {
    [key: string]: string[];
  };
  props: {}[];
}

interface BookTestsList {
  bookTestsDetails: BookTests[];
}

const BookLabTests: React.FC<BookTestsList> = ({ bookTestsDetails }) => {
  const [activeBookTestsFilter, setActiveBookTestsFilter] = useState<string>(
    "For Amazon Employees"
  );

  const bookTestsCategories = [
    "For Amazon Employees",
    ...(bookTestsDetails?.[2]?.categories?.["10386"] || []),
  ];

  return (
    <div className="mt-6 mx-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-main font-semibold">Book Popular Lab Tests</h1>
        <button className="bg-transparent border-none text-premain">
          View More
        </button>
      </div>
      <div className="flex gap-3 overflow-auto mb-4 py-2">
        {bookTestsCategories?.map((eachCategory, index) => (
          <Button
            key={index}
            className={`bg-white hover:bg-white main-button-shadow ${
              activeBookTestsFilter === eachCategory
                ? "border border-premain text-premain"
                : "border border-gray-100 text-black"
            }`}
            onClick={() => setActiveBookTestsFilter(eachCategory)}
          >
            {eachCategory}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative p-4 border border-[#E0E0E0] rounded-xl flex justify-between card-shadow-2">
          <div className="w-[55%]">
            <p className="text-main text-xs font-medium mb-3">
              Complete Blood Count (CBC) - EDTA Whole Blood
            </p>
            <div className="flex items-center gap-2 mb-3">
              <img src={reportTimeImage} alt="time" />
              <p className="text-main text-xs">Reports in 10-12 hours</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1 items-center my-1">
                <img src={home} alt="home" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Home</p>
              </div>
              <div className="flex gap-1 items-center my-1">
                <img src={lab} alt="lab" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Lab</p>
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="line-through text-[10px] text-[#828282]">₹ 800/-</p>
              <div className="bg-[#EDF7EE] py-[1px] px-[2px] rounded-sm">
                <p className="text-xs font-normal text-[#459F49]">55% OFF</p>
              </div>
            </div>
            <p className="text-xs font-semibold text-main">
              ₹ 500/-{" "}
              <span className="text-[10px] font-normal text-[#828282]">
                Onwards
              </span>
            </p>
            <button className="self-end bg-white border border-premain rounded-xl px-5 py-1 text-premain text-sm font-semibold mt-2">
              Add
            </button>
          </div>
          <div className="absolute top-0 right-0 flex items-center gap-2 bg-[#459F49] rounded-bl-xl rounded-tr-xl px-4 py-[2px]">
            <img src={whiteTick} alt="tick" className="h-2" />
            <p className="text-white text-[10px] font-semibold">Cashless</p>
          </div>
        </div>
        <div className="relative p-4 border border-[#E0E0E0] rounded-xl flex justify-between card-shadow-2">
          <div className="w-[55%]">
            <p className="text-main text-xs font-medium mb-3">
              Complete Blood Count (CBC) - EDTA Whole Blood
            </p>
            <div className="flex items-center gap-2 mb-3">
              <img src={reportTimeImage} alt="time" />
              <p className="text-main text-xs">Reports in 10-12 hours</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1 items-center my-1">
                <img src={home} alt="home" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Home</p>
              </div>
              <div className="flex gap-1 items-center my-1">
                <img src={lab} alt="lab" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Lab</p>
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="line-through text-[10px] text-[#828282]">₹ 800/-</p>
              <div className="bg-[#EDF7EE] py-[1px] px-[2px] rounded-sm">
                <p className="text-xs font-normal text-[#459F49]">55% OFF</p>
              </div>
            </div>
            <p className="text-xs font-semibold text-main">
              ₹ 500/-{" "}
              <span className="text-[10px] font-normal text-[#828282]">
                Onwards
              </span>
            </p>
            <button className="self-end bg-white border border-premain rounded-xl px-5 py-1 text-premain text-sm font-semibold mt-2">
              Add
            </button>
          </div>
          <div className="absolute top-0 right-0 flex items-center gap-2 bg-[#459F49] rounded-bl-xl rounded-tr-xl px-4 py-[2px]">
            <img src={whiteTick} alt="tick" className="h-2" />
            <p className="text-white text-[10px] font-semibold">Cashless</p>
          </div>
        </div>
        <div className="relative p-4 border border-[#E0E0E0] rounded-xl flex justify-between card-shadow-2">
          <div className="w-[55%]">
            <p className="text-main text-xs font-medium mb-3">
              Complete Blood Count (CBC) - EDTA Whole Blood
            </p>
            <div className="flex items-center gap-2 mb-3">
              <img src={reportTimeImage} alt="time" />
              <p className="text-main text-xs">Reports in 10-12 hours</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1 items-center my-1">
                <img src={home} alt="home" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Home</p>
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="line-through text-[10px] text-[#828282]">₹ 800/-</p>
              <div className="bg-[#EDF7EE] py-[1px] px-[2px] rounded-sm">
                <p className="text-xs font-normal text-[#459F49]">55% OFF</p>
              </div>
            </div>
            <p className="text-xs font-semibold text-main">
              ₹ 500/-{" "}
              <span className="text-[10px] font-normal text-[#828282]">
                Onwards
              </span>
            </p>
            <button className="self-end bg-white border border-premain rounded-xl px-5 py-1 text-premain text-sm font-semibold mt-2">
              Add
            </button>
          </div>
          <div className="absolute top-0 right-0 flex items-center gap-2 bg-[#459F49] rounded-bl-xl rounded-tr-xl px-4 py-[2px]">
            <img src={whiteTick} alt="tick" className="h-2" />
            <p className="text-white text-[10px] font-semibold">Cashless</p>
          </div>
        </div>
        <div className="relative p-4 border border-[#E0E0E0] rounded-xl flex justify-between card-shadow-2">
          <div className="w-[55%]">
            <p className="text-main text-xs font-medium mb-3">
              Complete Blood Count (CBC) - EDTA Whole Blood
            </p>
            <div className="flex items-center gap-2 mb-3">
              <img src={reportTimeImage} alt="time" />
              <p className="text-main text-xs">Reports in 10-12 hours</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-1 items-center my-1">
                <img src={home} alt="home" className="h-3" />
                <p className="text-[#4F4F4F] text-[10px]">Home</p>
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="line-through text-[10px] text-[#828282]">₹ 800/-</p>
              <div className="bg-[#EDF7EE] py-[1px] px-[2px] rounded-sm">
                <p className="text-xs font-normal text-[#459F49]">55% OFF</p>
              </div>
            </div>
            <p className="text-xs font-semibold text-main">
              ₹ 500/-{" "}
              <span className="text-[10px] font-normal text-[#828282]">
                Onwards
              </span>
            </p>
            <button className="self-end bg-white border border-premain rounded-xl px-5 py-1 text-premain text-sm font-semibold mt-2">
              Add
            </button>
          </div>
          <div className="absolute top-0 right-0 flex items-center gap-2 bg-[#459F49] rounded-bl-xl rounded-tr-xl px-4 py-[2px]">
            <img src={whiteTick} alt="tick" className="h-2" />
            <p className="text-white text-[10px] font-semibold">Cashless</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLabTests;
