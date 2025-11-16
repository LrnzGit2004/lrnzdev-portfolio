import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-start space-y-4 mt-10 mb-16"
      id="get_in_touch"
    >
      <p className="text-[#9CA3AF] text-lg md:text-xl font-light max-w-3xl">
        Need to hire my services? Don't wait any longer, you can reach me at the
        following numbers and addresses. Just click !
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="mailto:lorenzoeric2004@gmail.com"
          target="_blank"
          className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg group"
        >
          <div className="flex gap-2 items-center">
            <img src="/images/google-gmail.svg" alt="" className="w-8 h-8" />
            <p className="text-sm font-light">lorenzoeric2004@gmail.com</p>
            <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </div>
        </Link>
        <Link
          href="https://wa.me/653832394"
          target="_blank"
          className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg group"
        >
          <div className="flex gap-2 items-center">
            <img src="/images/whatsapp.svg" alt="" className="w-8 h-8" />
            <p className="text-sm font-light">Eric Lorryl SOBZE</p>
            <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/m/in/eric-lorryl-sobze-tiogo-945408298/"
          target="_blank"
          className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg group"
        >
          <div className="flex gap-2 items-center">
            <img src="/images/linkedin.svg" alt="" className="w-8 h-8" />
            <p className="text-sm font-light">Eric Lorryl SOBZE TIOGO</p>
            <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </div>
        </Link>
        <Link
          href="https://github.com/LrnzGit2004"
          target="_blank"
          className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg group"
        >
          <div className="flex gap-2 items-center">
            <img src="/images/github.png" alt="" className="w-8 h-8" />
            <p className="text-sm font-light">LrnzGit2004</p>
            <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </div>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Direction+De+IUT+De+Ngaoundere/@7.4171101,13.5387974,17z/data=!3m1!4b1!4m6!3m5!1s0x10f002a7248f1d5d:0xf84599a3caa73c62!8m2!3d7.4171048!4d13.5413723!16s%2Fg%2F11c7hjfjp9?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 py-2 px-4 rounded-lg group"
        >
          <div className="flex gap-2 items-center">
            <img src="/images/google-maps.svg" alt="" className="w-8 h-8" />
            <p className="text-sm font-light">Ngaoundéré, Cameroon</p>
            <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
          </div>
        </Link>
      </div>
      <div className="mt-10 mx-auto flex flex-col gap-6 ">
        <p className="text-[#9CA3AF] text-lg text-center font-light ">
          😅I'm launching a blog soon, so don't miss it, subscribe to this
          waiting list
        </p>
        <div className="flex items-center justify-center mt-4 border border-slate-700! focus-within:outline focus-within:outline-[#6D28D9] text-sm rounded-full h-14 max-w-xl w-full">
          <input
            className="bg-transparent outline-none rounded-full px-4 h-full flex-1 placeholder:text-slate-400"
            placeholder="Enter your email address"
            type="text"
            disabled
          />
          <button className="bg-[#6D28D9] text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center hover:bg-[#6D28D9] active:scale-95 transition">
            join !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
