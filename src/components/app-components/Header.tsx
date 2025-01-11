import React from "react";

import { GoArrowLeft } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import wallet from "@/assets/wallet.png";
import shoppingCart from "@/assets/shopping-cart.png";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center m-3">
      <div className="flex items-center gap-2">
        <GoArrowLeft width={48} height={48} />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <p className="text-lg font-[600]">Billekahalli</p>
            <MdLocationOn width={16} height={16} />
          </div>
          <p className="text-xs">Sarvabhoumanagar Billekahall...</p>
        </div>
      </div>
      <div className="w-[30%] flex justify-around">
        <div className="relative inline-block">
          <img src={wallet} alt="wallet" className="scale-125" />
          <span className="absolute -top-2 -right-4 bg-[#156DDC] text-white text-[8px] rounded-full border-white border-2 px-1 py-0.5">
            4529
          </span>
        </div>
        <div className="relative inline-block">
          <img src={shoppingCart} alt="cart" className="scale-125" />
          <span className="absolute -top-2 -right-3 bg-[#156DDC] text-white text-[8px] rounded-full border-white border-2 px-1.5 py-0.5">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
