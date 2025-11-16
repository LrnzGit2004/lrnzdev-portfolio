"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SquareArrowOutUpRightIcon } from "lucide-react";

const projects = [
  {
    thumbnail: "/images/mockup-brise-services.png",
    title: "Portfolio - Brise Services",
    description:
      "Avec son nouveau protfolio, Brise pourra désormais partager ses créations à sa guise et montrer ses multiples talents au monde entier...",
    link: "https://brise-services.vercel.app",
  },
  {
    thumbnail: "/images/mockup-iut-ndere.png",
    title: "Site web de l'IUT de Ngaoundéré",
    description:
      "L'IUT de Ngaoundéré avait bien de besoin de faire peau neuve. Avec ce nouveau site, elle pourra tenir ses partenaires à jours des dernières actualités...",
    link: "#",
  },
  {
    thumbnail: "/images/mockup-logo-crea.png",
    title: "Application de création de logo",
    description:
      "Une application pour la création et la personnalisation rapide des logos. Ce projet a été inspiré par faiz-dev...",
    link: "https://logo-crea.vercel.app",
  },
];

const Projects = () => {
  const [api, setApi] = useState(null);

  // Auto-slide toutes les 3 secondes
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-md mx-auto relative"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {projects.map((item, index) => (
          <CarouselItem key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Card className="rounded-2xl overflow-hidden relative cursor-pointer group">
                {/* Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-all"
                  />

                  {/* Gradient + texte */}
                  <div
                    className="absolute bottom-0 left-0 w-full p-4 text-white 
                      bg-linear-to-t from-[#030712]  via-[#6D28D9]/75 to-transparent backdrop-blur-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <button className="bg-[#6D28D9] text-white p-3.5 rounded-full ">
                        <SquareArrowOutUpRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
                      </button>
                    </div>

                    <p className="text-sm mt-1 line-clamp-3 opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Projects;
