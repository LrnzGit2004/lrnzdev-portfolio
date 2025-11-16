import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 border-t border-[#1F2937]!">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-slate-600">
          © {year}. Made with <span className="text-red-500">❤</span> by{" "}
          <span className="font-semibold text-slate-700">
            Ing Eric Lorryl SOBZE
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
