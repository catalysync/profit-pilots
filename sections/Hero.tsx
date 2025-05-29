"use client"

import { FC, useEffect } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.png";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { stagger, useAnimate } from "framer-motion";

const Hero: FC = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    new SplitType(scope.current.querySelector("h1"), {
      types: ["lines", "words"],
      tagName: "span"
    });

    animate(scope.current.querySelectorAll(".word"), {
      transform: 'translateY(0%)'
    }, {
      duration: 0.5,
      delay: stagger(0.2)
    });
  }, [animate, scope]);

  return <section ref={scope}>
    <div className="grid md:grid-cols-12 md:h-screen items-stretch">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">Crafting commerce experiences through code and creative design</h1>
          
          <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
            <Button variant="secondary" icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5">
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" 
                  />
              </svg>}>
              <span>View Our Work</span>
            </Button>
            <Button variant="text">Let&apos;s Talk</Button>
          </div>
        </div>
      </div>

      <div className="md:col-span-5">
        <div className="mt-20 md:mt-0 md:h-full">
          <Image src={heroImage} alt="Rocket launching from a skyscraper rooftop at sunset." className="size-full object-cover"/>
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
