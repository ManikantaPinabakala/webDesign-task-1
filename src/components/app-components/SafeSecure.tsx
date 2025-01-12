import React from "react";

import testTube from "@/assets/ss-testtube.png";
import thermometer from "@/assets/ss-thermometer.png";
import mask from "@/assets/ss-mask.png";
import disinfectant from "@/assets/ss-disinfectant.png";

interface SafeAndSecureItems {
  image: string;
  desc: string;
}

const safeAndSecureItemList: SafeAndSecureItems[] = [
  {
    image: testTube,
    desc: "Gov. Approved Diagnostic Centres",
  },
  {
    image: thermometer,
    desc: "Daily Temperature Check of all Technicians",
  },
  {
    image: mask,
    desc: "Mandatory use of Mask & Sanitizers",
  },
  {
    image: disinfectant,
    desc: "Regular Disinfectation of Labs",
  },
];

const SafeSecure: React.FC = () => {
  return (
    <div>
      <h1 className="text-main text-base font-semibold my-6">
        100% Safe & Secure Lab Tests
      </h1>
      <div className="flex gap-4 flex-wrap mb-12">
        {safeAndSecureItemList.map((eachItem, index) => (
          <div
            key={index}
            className="bg-[#F1F7FF] flex flex-col justify-center items-start gap-3 rounded-2xl p-4 max-w-[47%]"
          >
            <img
              src={eachItem.image}
              alt={`safe-item-${index}`}
              className="h-8 w-8"
            />
            <p className="text-[10px] font-light text-main">{eachItem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeSecure;
