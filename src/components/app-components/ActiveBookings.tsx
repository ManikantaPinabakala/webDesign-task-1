import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import avatar from "@/assets/avatar.png";
import success from "@/assets/success.png";
import { Separator } from "../ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";

interface Bookings {
  doctor: string;
  date: string;
  day: string;
  time: string;
  timeOfTheDay: string;
  agenda: string;
  numLabTests: number;
}

const activeBookings: Bookings[] = [
  {
    doctor: "Mr. Suresh Gaikwad",
    date: "03 Nov'22",
    day: "Wednesday",
    time: "9:30-10:30",
    timeOfTheDay: "AM",
    agenda: "Home Sample Collection",
    numLabTests: 3,
  },
  {
    doctor: "Dr. Neha Sharma",
    date: "04 Nov'22",
    day: "Thursday",
    time: "11:00-12:00",
    timeOfTheDay: "AM",
    agenda: "Routine Checkup",
    numLabTests: 1,
  },
  {
    doctor: "Dr. Arvind Kumar",
    date: "05 Nov'22",
    day: "Friday",
    time: "2:00-3:30",
    timeOfTheDay: "PM",
    agenda: "Specialist Consultation",
    numLabTests: 2,
  },
  {
    doctor: "Dr. Priya Iyer",
    date: "06 Nov'22",
    day: "Saturday",
    time: "4:00-5:00",
    timeOfTheDay: "PM",
    agenda: "Follow-up Appointment",
    numLabTests: 0,
  },
];

const ActiveBookings: React.FC = () => {
  return (
    <div className="mt-6 mx-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-main font-semibold">Your Active Bookings</h1>
        <button className="bg-transparent border-none text-premain">
          View All
        </button>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full mb-6"
      >
        <CarouselContent>
          {activeBookings.map((eachBooking, index) => (
            <CarouselItem key={index}>
              <div className="border border-[#F2F2F2] rounded-2xl p-4">
                <div className="flex justify-between items-center p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <img src={avatar} alt="avatar" className="scale-[120%]" />
                      <p className="text-main font-normal text-xs">
                        {eachBooking.doctor}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={success}
                        alt="success"
                        className="scale-[120%]"
                      />
                      <h1 className="text-main text-sm font-semibold">
                        Appointment Confirmed
                      </h1>
                    </div>
                  </div>
                  <div className="bg-white rounded-full full-shadow p-2 cursor-pointer">
                    <ChevronRight color="#1778F2" />
                  </div>
                </div>
                <div className="bg-[#F6FAFF] border-[0.5px] border-[#D6E8FF] flex justify-around gap-2 text-center rounded-2xl p-3">
                  <div className="self-center">
                    <p className="text-main text-xs font-medium">
                      {eachBooking.date}
                    </p>
                    <p className="text-main text-[10px] font-light">
                      {eachBooking.day}
                    </p>
                  </div>
                  <Separator color="#D6E8FF" orientation="vertical" />
                  <div className="self-center">
                    <p className="text-main text-xs font-medium">
                      {eachBooking.time}
                      <span className="text-[10px]">
                        {eachBooking.timeOfTheDay}
                      </span>
                    </p>
                    <p className="text-main text-[10px] font-light">
                      {eachBooking.agenda}
                    </p>
                  </div>
                  <Separator orientation="vertical" />
                  <p className="self-center text-main text-xs font-medium">
                    {eachBooking.numLabTests}{" "}
                    <span className="text-[10px]">Lab Tests</span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ActiveBookings;
