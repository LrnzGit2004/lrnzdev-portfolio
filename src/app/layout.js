import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric Lorryl SOBZE",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#030712] text-[#F9FAFB]">
      <body
        className={`${outfitFont.variable} antialiased mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 `}
      >
        {children}
      </body>
    </html>
  );
}
