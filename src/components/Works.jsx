import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const work = [
  {
    title: "WenSchool",
    description: "Front-end Developer",
    image: "/images/wenschool.jpg",
    link: "https://wenschool.wenix.net/",
    duration: "2024 - currently",
  },
  {
    title: "IUT de Ngaoundéré",
    description: "Web Developer Intern",
    image: "/images/IUT.png",
    link: "/",
    duration: "April 2025 - July 2025",
  },
  {
    title: "KPDC",
    description: "IT intern",
    image: "/images/KPDC.png",
    link: "https://globeleq.com/power-plants/kribi/",
    duration: "March 2024 - June 2024",
  },
];

const Works = () => {
  return (
    <div className="flex flex-col gap-2">
      {work.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="border border-[#1F2937]! backdrop-blur-[300px] rounded-xl p-2 flex  items-center hover:scale-95 transition-transform cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-7 h-7 object-contain  rounded-md mr-4"
          />
          <div className="flex-col gap-2 ">
            <div className="flex items-center  gap-1">
              <h3 className="text-[16px] font-semibold ">{item.title} </h3>

              <Badge
                variant={`${
                  item.duration === "2024 - currently" ? "secondary" : "outline"
                }`}
                className="text-[10px] items-end!"
              >
                {" "}
                {item.duration}{" "}
              </Badge>
            </div>
            <p className="text-sm font-light text-[#99a9be] ">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Works;
