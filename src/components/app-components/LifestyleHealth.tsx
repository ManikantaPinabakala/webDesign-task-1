import React from "react";

import hyperTension from "@/assets/hyper-tension.svg";

interface TextMap {
  [key: string]: string;
}

const displayTexts: TextMap = {
  Obesity: "Obesity",
  "Women's Health": "Women",
  "Smoking & Alcohol": "Smoking",
  Diabetic: "Diabetic",
  "Thyroid-Issues": "Thyroid",
};

interface LifeStylePackages {
  id: string;
  title: string;
  props: {
    title: string;
    imgSrc: string;
  }[];
}

interface LifeStylePackageList {
  lifeStylePackageDetails: LifeStylePackages[];
}

const LifestyleHealth: React.FC<LifeStylePackageList> = ({
  lifeStylePackageDetails,
}) => {
  const lifeStylePackageData = lifeStylePackageDetails?.[3]?.props;
  const updatedLifeStylePackageData = lifeStylePackageData?.map((item) => ({
    ...item,
    imgSrc: "https://www.medibuddy.in/" + item.imgSrc,
    title: displayTexts[item.title],
  }));
  const updatedLifeStylePackageData2 = [
    ...(updatedLifeStylePackageData || []),
    {
      title: "Hyper-Tension",
      imgSrc: hyperTension,
    },
  ];

  return (
    <div className="mt-6 px-6">
      <h1 className="text-main text-base font-semibold mb-4">
        Lifestyle Health Check-up Packages
      </h1>
      <div className="flex gap-3 flex-wrap justify-center">
        {updatedLifeStylePackageData2?.map((eachPackage, index) => (
          <div
            key={index}
            className="card-shadow-4 rounded-3xl flex flex-col justify-center items-center px-3 min-w-[40%] cursor-pointer"
          >
            <img
              src={eachPackage.imgSrc}
              alt={eachPackage.title}
              className={`${
                eachPackage.title === "Hyper-Tension"
                  ? "scale-[115%] mt-8 mb-9"
                  : "scale-[50%]"
              }`}
            />
            <p className="text-sm font-normal text-main mt-0 mb-2">
              {eachPackage.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleHealth;
