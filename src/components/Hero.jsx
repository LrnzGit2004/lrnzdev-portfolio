import { DownloadIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import AnimatedWord from "./AnimatedWord";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <svg
        className="absolute inset-0 -z-10 size-full blur-[300px]"
        width="1440"
        height="900"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <path
            d="M1279.12 651.482c-22 6.106-44 12.212-135.83 19.142-91.82 6.929-252.813 14.497-345.534 14.119s-112.296-8.932-132.029-20.074c-40.902-23.095-67.695-48.431-92.222-82.426-43.46-60.236-63.449-115.445-66.098-143.181-2.37-24.804 6.608-45.711 18.307-63.328 12.043-18.137 33.695-29.82 71.913-43.681 73.132-26.523 132.819-39.093 158.087-37.728 35.983 1.944 85.151 19.972 133.921 42.519 54.55 25.219 85.81 54.21 147.755 103.202 40.89 42.153 74.78 87.455 96.15 121.421 9.68 13.541 17 19.579 26.15 28.613"
            stroke="#8C00FF"
            strokeWidth="130"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#b)">
          <path
            d="M984.952 466.869c-15.802 15.902-31.604 31.803-106.587 82.344-74.982 50.541-208.666 135.24-287.962 179.98-79.297 44.74-100.155 46.955-122.408 47.039-46.123.173-81.297-8.423-118.747-25.508-66.356-30.274-110.243-67.666-125.983-90.043-14.077-20.012-16.578-42.214-15.158-62.931 1.461-21.329 14.257-41.82 40.13-72.221 49.508-58.173 94.326-97.906 116.549-109.022 31.647-15.829 82.36-24.343 134.93-28.808 58.801-4.994 99.563 4.55 176.224 16.248 55.375 16.094 106.309 38.276 141.054 56.869 14.842 6.848 24.021 8.443 36.22 11.703"
            stroke="#3E0090"
            strokeWidth="130"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className="flex flex-col flex-2 space-y-4 ">
        <AnimatedWord />

        <p className="text-sm lg:text-base font-light text-[#ededed] leading-6">
          Hi, I'm{" "}
          <span className="font-medium text-[#d9c1ff] underline">
            Eric Lorryl SOBZE
          </span>
          , a Software Engineer
          <br />
          specialized in front-end web development and a UI/UX enthusiast.
          <br />
          I'm currently in the first year of a Master's in Software Systems
          Distributed Environments at the University of Ngaoundéré.
        </p>
        <div className="flex flex-col md:flex-row gap-4  ">
          <a
            href="/PDF/CV_Eric_Lorryl_SOBZE_Novembre_2025.pdf"
            download
            className="bg-[#6D28D9] text-white px-4 py-2 text-lg rounded-lg hover:bg-[#5B21B6] transition cursor-pointer flex items-center gap-2 group max-w-max"
          >
            Download my resume
            <DownloadIcon className="w-4 h-4 group-hover:animate-bounce transition duration-200" />
          </a>
          <a
            href="#get_in_touch"
            className="border border-[#6D28D9] text-white px-4 py-2 text-lg rounded-lg  hover:bg-[#6D28D9]/10  transition cursor-pointer flex items-center gap-2 max-w-max"
          >
            Get in touch
            <MailIcon className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
      <div className="mx-auto rounded-full relative w-64 h-64 md:w-64 md:h-64 overflow-hidden">
        <Image src={"/images/profil.png"} alt="profil" fill />
      </div>
    </div>
  );
};

export default Hero;
