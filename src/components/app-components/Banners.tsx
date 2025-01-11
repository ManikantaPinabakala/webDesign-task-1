import React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Banner {
  id: string;
  title: string;
  props: {
    bannerUrl: string;
  }[];
}

interface BannerList {
  bannerDetails: Banner[];
}

const Banners: React.FC<BannerList> = ({ bannerDetails }) => {
  const bannerData = bannerDetails?.[1].props;

  return (
    <div className="my-8 self-center">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {bannerData?.map((eachBanner, index) => (
            <CarouselItem key={index}>
              <img src={eachBanner.bannerUrl} alt="" className="card-shadow" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banners;
