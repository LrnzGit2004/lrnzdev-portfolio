import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-2 z-50 w-full mt-4">
      <div
        className="flex items-center justify-between py-4 px-6 rounded-full 
                      backdrop-blur-[150px] bg-white/5 
                      shadow-sm "
      >
        <h1 className="text-2xl font-bold">
          @LRnZ
          <span
            className="bg-linear-to-r from-[#6D28D9] to-[#AF57DB] 
                           bg-clip-text text-transparent"
          >
            Dev.
          </span>
        </h1>

        <div className="flex gap-4 items-center">
          {/* <span className="hidden md:block text-xl cursor-pointer">Blog</span> */}

          <div className="flex gap-4 items-center">
            <Link href="https://github.com/LrnzGit2004">
              <Image
                src="/images/github-icon.svg"
                alt="github"
                width={18}
                height={18}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/eric-sobze">
              <Image
                src="/images/linkedin-icon.svg"
                alt="linkedin"
                width={18}
                height={18}
              />
            </Link>
            <Link href="https://wa.me/653832394">
              <Image
                src="/images/whatsapp-icon.svg"
                alt="whatsapp"
                width={18}
                height={18}
              />
            </Link>
            <Link href="mailto:lorenzoeric2004@gmail.com">
              <Image
                src="/images/google-gmail.svg"
                alt="gmail"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
