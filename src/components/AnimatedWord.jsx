"use client";
import { useEffect, useState } from "react";
import {
  GlobeIcon,
  Lightbulb,
  Rocket,
  Moon,
  Eye,
  Zap,
  BookOpen,
} from "lucide-react";

export default function AnimatedWord() {
  const items = [
    { word: "world", Icon: GlobeIcon },
    { word: "idea", Icon: Lightbulb },
    { word: "project", Icon: Rocket },
    { word: "dream", Icon: Moon },
    { word: "vision", Icon: Eye },
    { word: "impact", Icon: Zap },
    { word: "story", Icon: BookOpen },
  ];

  const [index, setIndex] = useState(0);
  const { word, Icon } = items[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold ">
        Imagine your{" "}
        <span className="animated-wrapper flex items-center gap-1 " key={index}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 mt-1 text-[#6D28D9] animated-Icon" />
          <span className="bg-linear-to-r from-[#6D28D9] to-[#AF57DB] bg-clip-text text-transparent animated-word">
            {word}
          </span>
        </span>
        <br />
        and code it!
      </h2>
    </>
  );
}
