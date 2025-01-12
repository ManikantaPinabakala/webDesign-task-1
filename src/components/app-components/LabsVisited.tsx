import React from "react";

import { ChevronRight } from "lucide-react";
import { GrLocation } from "react-icons/gr";
import { LucideClock5 } from "lucide-react";
import { LuShieldCheck } from "react-icons/lu";
import apollo1 from "@/assets/apollo1.png";
import labTubes from "@/assets/labTubes.png";
import locations from "@/assets/locations.png";

interface LabsMilestones {
  id: string;
  props: {
    img: string;
  }[];
}

interface LabsMilestoneList {
  labsVisitedDetails: LabsMilestones[];
}

const LabsVisited: React.FC<LabsMilestoneList> = ({ labsVisitedDetails }) => {
  const milestoneList = labsVisitedDetails?.[7]?.props;

  return (
    <div className="mt-6 p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-main font-semibold">Labs Visited</h1>
        <button className="bg-transparent border-none text-premain flex items-center gap-2">
          See All <ChevronRight height={18} width={18} />
        </button>
      </div>
      <div className="flex gap-4 overflow-auto mb-8">
        <div className="rounded-xl card-shadow-3 w-fit min-w-[80%]">
          <img src={apollo1} alt="apollo 1" className="mb-4" />
          <div className="flex flex-col gap-2 px-4 pt-1 pb-3">
            <p className="font-medium text-sm text-[#252D38]">
              Apollo Diagnostics
            </p>
            <div className="text-[#47566A] flex gap-2">
              <GrLocation />
              <p className="font-light text-xs">Kormanangala, Bangalore</p>
            </div>
            <div className="text-[#47566A] flex gap-2 font-light text-xs">
              <LucideClock5 height={16} width={16} />
              <p>Next Slot: 07:30 AM, Tomorrow</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl card-shadow-3 w-fit min-w-[80%]">
          <img src={apollo1} alt="apollo 1" className="mb-4" />
          <div className="flex flex-col gap-2 px-4 pt-1 pb-3">
            <p className="font-medium text-sm text-[#252D38]">
              Apollo Diagnostics
            </p>
            <div className="text-[#47566A] flex gap-2">
              <GrLocation />
              <p className="font-light text-xs">Kormanangala, Bangalore</p>
            </div>
            <div className="text-[#47566A] flex gap-2 font-light text-xs">
              <LucideClock5 height={16} width={16} />
              <p>Next Slot: 07:30 AM, Tomorrow</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <p className="font-light text-xl">
              Trusted by{" "}
              <span className="font-semibold text-premain">20,00,000+</span>
              <br />
              <span className="font-medium text-main">Users Every month</span>
            </p>
            <LuShieldCheck size={40} fill="#D6EA88" className="mr-4" />
          </div>
          <div className="flex flex-wrap items-center mt-4">
            <div className="flex gap-3 items-center max-w-[50%]">
              <img
                src={milestoneList?.[0]?.["img"]}
                alt="trust1"
                className="scale-50"
              />
              <p className="font-normal text-xs text-main">
                200+ Approved Diagnostic Centres
              </p>
            </div>
            <div className="flex gap-3 items-center max-w-[50%]">
              <img src={labTubes} alt="trust2" className="scale-[120%]" />
              <p className="font-normal text-xs text-main">
                1200+ Lab Tests Offered
              </p>
            </div>
            <div className="flex gap-3 items-center max-w-[40%] ml-5 mt-4">
              <img src={locations} alt="trust3" className="scale-[120%]" />
              <p className="font-normal text-xs text-main">
                1200+ Pincodes Covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsVisited;
