import React from "react";
import { formatDistanceToNow } from "date-fns";
import { IoLocationOutline } from "react-icons/io5";

import stars from "@/assets/stars.png";
import avatar2 from "@/assets/avatar2.png";
import { Separator } from "../ui/separator";

interface UserReviews {
  id: string;
  title: string;
  props: {
    content: string;
    name: string;
    location: string;
    days: string;
  }[];
}

interface UserReviewList {
  userReviewData: UserReviews[];
}

const UserReviews: React.FC<UserReviewList> = ({ userReviewData }) => {
  const reviewData = userReviewData?.[5]?.props;
  const updatedReviewData = reviewData?.map((item) => ({
    ...item,
    location: "Hyderabad",
  }));

  return (
    <div className="mt-6 px-6">
      <h1 className="text-main text-base font-semibold mb-4">
        {userReviewData?.[5]?.title}
      </h1>
      <div className="flex gap-4 overflow-auto">
        {updatedReviewData?.map((eachReview, index) => {
          const inputDate = new Date(eachReview.days);
          const timeDistance = formatDistanceToNow(inputDate, {
            addSuffix: true,
          });

          return (
            <div
              key={index}
              className="bg-[#FBFCFF] rounded-2xl pt-5 min-w-[80%] flex flex-col"
            >
              <div className="flex-grow flex flex-col mx-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img src={stars} alt="5 Star" />
                    <p className="text-[8px] font-light text-[#969696]">
                      {timeDistance}
                    </p>
                  </div>
                  <p className="text-[8px] font-light text-[#969696] flex gap-2 items-center">
                    <IoLocationOutline />
                    {eachReview.location}
                  </p>
                </div>
                <p className="flex-grow text-[#47566A] text-xs font-light mt-3 mb-5">
                  "{eachReview.content}"
                </p>
              </div>
              <Separator />
              <div className="flex gap-2 items-center mt-1 mb-4 mx-5">
                <img src={avatar2} alt="avatar2" />
                <p className="text-main font-light text-[10px]">
                  {eachReview.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserReviews;
