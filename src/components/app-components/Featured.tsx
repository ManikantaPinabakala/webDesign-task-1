import React, { useState } from "react";
import { Button } from "../ui/button";

import reportTimeImage from "@/assets/reportTimeImage.png";
import radiology from "@/assets/radiology.png";
import home from "@/assets/home.png";

interface Featured {
  id: string;
  heading: string;
  categories: {
    [key: string]: string[];
  };
  props: {
    packages: {
      packageName: string;
      packageDisplayName: string;
      isSponsored: boolean;
      packageCode: string;
      reportsTatText: string;
      testCount: number;
      isRadiologyIncluded: boolean;
      fastingHoursText: string;
      isAvailable: boolean;
      price: number;
      subCategories: string[];
    }[];
  }[];
}

interface FeaturedList {
  featuredDetails: Featured[];
}

const Featured: React.FC<FeaturedList> = ({ featuredDetails }) => {
  const [activeFeaturedFilter, setActiveFeaturedFilter] =
    useState<string>("Popular");

  const featuredCategories = featuredDetails?.[2].categories?.["10386"];

  const featuredCheckups = featuredDetails?.[2].props?.[0];
  const dataArray = featuredCheckups?.packages;
  const updatedArray = dataArray?.map((item, index) => ({
    ...item,
    isSponsored: index % 2 === 0 ? true : item.isSponsored,
  }));
  let unAssignedCategories = [
    "Covid 19",
    "Alcohol",
    "Smokers",
    "Weight",
    "Hair Care",
    "Skin Care",
    "Stress",
    "Senior Citizen",
    "Kids",
  ];
  unAssignedCategories = unAssignedCategories?.map((category) => {
    return category.toUpperCase();
  });
  const updatedArray2 = updatedArray?.map((item, index) => {
    if (index === 27) {
      return {
        ...item,
        subCategories: [...item.subCategories, ...unAssignedCategories],
      };
    }
    return item;
  });
  const packagesArray = updatedArray2?.filter((item) =>
    item.subCategories.includes(activeFeaturedFilter.toUpperCase())
  );

  console.log(featuredCategories);
  console.log(packagesArray);

  return (
    <div className="bg-[#E8F2FE] px-4 py-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-[#050A4E]">Featured Health Check-ups</h1>
        <button className="bg-transparent border-none text-[#1778F2]">
          View All
        </button>
      </div>
      <div className="flex gap-3 overflow-auto mb-4">
        {featuredCategories?.map((eachCategory, index) => (
          <Button
            key={index}
            className={`bg-white hover:bg-white ${
              activeFeaturedFilter === eachCategory
                ? "border border-[#1778F2] text-[#1778F2]"
                : "border border-gray-100 text-black"
            }`}
            onClick={() => setActiveFeaturedFilter(eachCategory)}
          >
            {eachCategory}
          </Button>
        ))}
      </div>
      <div className="flex gap-4 overflow-auto">
        {packagesArray?.map((eachCheckUp, index) => (
          <div
            key={index}
            className="relative bg-white px-6 py-8 rounded-xl min-w-full"
          >
            <h1 className="min-h-10 text-base text-[#050A4E] font-semibold mb-2">
              {eachCheckUp.packageDisplayName}
            </h1>
            <div className="flex items-center gap-2 mb-3">
              <img src={reportTimeImage} alt="time" />
              <p className="text-xs text-[#1778F2]">
                {eachCheckUp.reportsTatText}
              </p>
            </div>
            <div className="flex gap-12 text-left">
              <div>
                <p className="text-xs text-[#050A4E] font-medium">
                  {eachCheckUp.testCount} Tests
                </p>
                <ul className="pl-4">
                  <li className="list-disc text-[#4F4F4F] text-[10px] my-1">
                    Cholesterol - Total
                  </li>
                  <li className="list-disc text-[#4F4F4F] text-[10px] my-1">
                    Vitamin D... + 87 more
                  </li>
                </ul>
              </div>
              {eachCheckUp.isRadiologyIncluded && (
                <div>
                  <p className="text-xs text-[#050A4E] font-medium">Includes</p>
                  <div className="flex items-center gap-2 mb-3">
                    <img src={radiology} alt="radiology" />
                    <p className="text-[#4F4F4F] text-[10px] my-1">Radiology</p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-[#F8F8F8] rounded-lg flex gap-[6.5rem] mt-3 p-4 mb-4">
              <div>
                <p className="text-[#050A4E] text-[10px]">Fasting</p>
                <p className="text-[#4F4F4F] text-[10px] my-1">
                  {eachCheckUp.fastingHoursText}
                </p>
              </div>
              {eachCheckUp.isAvailable && (
                <div>
                  <p className="text-[#050A4E] text-[10px]">Available at</p>
                  <div className="flex gap-1 items-center my-1">
                    <img src={home} alt="home" className="h-3" />
                    <p className="text-[#4F4F4F] text-[10px]">Home</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-base text-[#050A4E] font-semibold">
                ₹ {eachCheckUp.price}
              </h1>
              <div className="border border-[#1778F2] flex items-center gap-4 px-3 py-[3px] rounded-xl">
                <p className="text-[#1778F2] text-sm cursor-pointer">-</p>
                <p className="text-[#1778F2] text-sm">1</p>
                <p className="text-[#1778F2] text-sm cursor-pointer">+</p>
              </div>
            </div>
            {eachCheckUp.isSponsored && (
              <p className="absolute top-0 right-0 bg-[#F40009] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                Sponsored
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
