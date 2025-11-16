import Link from "next/link";
import React from "react";

import { CircleUserRoundIcon, SquareArrowOutUpRightIcon } from "lucide-react";

const References = () => {
  return (
    <>
      <Link
        href="/"
        className="border border-[#1F2937]! backdrop-blur-[300px] rounded-xl p-2 flex  items-center   justify-between cursor-pointer hover:bg-[#6D28D9]/10 transition-all duration-300 group"
      >
        <div className="flex items-center ">
          <CircleUserRoundIcon className="w-8 h-8 rounded-lg mr-4 text-[#99a9be]" />

          <div className="flex-col gap-2 ">
            <div className="flex items-center  gap-1">
              <h3 className="text-[16px] font-semibold ">Mr ZANGA Castel </h3>
            </div>
            <p className="text-sm font-light text-[#99a9be] ">CEO Wenschool</p>
          </div>
        </div>
        <SquareArrowOutUpRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition duration-300" />
      </Link>
      {/* <Link
        href="/"
        className="border border-[#1F2937]! backdrop-blur-[300px] rounded-xl p-2 flex  items-center   justify-between cursor-pointer hover:bg-[#6D28D9]/10 transition-all duration-300 group"
      >
        <div className="flex items-center ">
          <CircleUserRoundIcon className="w-8 h-8 rounded-lg mr-4 text-[#99a9be]" />

          <div className="flex-col gap-2 ">
            <div className="flex items-center  gap-1">
              <h3 className="text-[16px] font-semibold ">
                Dr KANI DJOULDE J. A.{" "}
              </h3>
            </div>
            <p className="text-sm font-light text-[#99a9be] ">
              IUT of Ngaoundéré
            </p>
          </div>
        </div>
        <SquareArrowOutUpRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition duration-300" />
      </Link> */}
      <Link
        href="/"
        className="border border-[#1F2937]! backdrop-blur-[300px] rounded-xl p-2 flex  items-center   justify-between cursor-pointer hover:bg-[#6D28D9]/10 transition-all duration-300 group"
      >
        <div className="flex items-center ">
          <CircleUserRoundIcon className="w-8 h-8 rounded-lg mr-4 text-[#99a9be]" />

          <div className="flex-col gap-2 ">
            <div className="flex items-center  gap-1">
              <h3 className="text-[16px] font-semibold ">Mr KEMDEM Brise </h3>
            </div>
            <p className="text-sm font-light text-[#99a9be] ">Illustrator</p>
          </div>
        </div>
        <SquareArrowOutUpRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition duration-300" />
      </Link>
    </>
  );
};

export default References;
