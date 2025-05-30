"use client";

import Button from "@/components/Button";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useState, MouseEvent } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4
          }
        ],
        [
          topLineScope.current,
          {
            rotate: 45
          }
        ]
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4
          }
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45
          }
        ]
      ]);

      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          topLineScope.current,
          {
            translateY: 0
          }
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0
          }
        ],
      ]);

      navAnimate(
        navScope.current,
        {
          height: 0,
        },
      );
    }
  }, [bottomLineAnimate, bottomLineScope, isOpen, navAnimate, navScope, topLineAnimate, topLineScope]);

  const onClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if(!target) return;
    target.scrollIntoView({ behavior: "smooth" })
  }

  return <header>
    <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-[10]" ref={navScope}>
      <nav className="mt-20 flex flex-col ">
        {navItems.map(({ label, href }) => (  
          <Link onClick={onClickNavItem} href={href} key={label} className="relative group/nav-item text-stone-200 border border-t last:border-b border-stone-800 py-8">
            <div className="absolute bottom-0 left-0 w-full
              h-0 group-hover/nav-item:h-full transition-all duration-700 bg-stone-800">
            </div>
            
            <div className="relative container !max-w-full flex items-center justify-between">
              <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-700">{label}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </Link>
        ))}
      </nav>
    </div>
    <div className="fixed top-0 left-0 w-full backdrop-blur-md mix-blend-difference z-[20]">
      <div className="container !max-w-full">
        <div className="flex items-center justify-between h-20">
          <div>
            <Link href="/">
              <span className="text-xl font-bold uppercase text-white">
                PROFIT+PILOTS
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed top-0 left-0 w-full z-[20]">
      <div className="container !max-w-full">
        <div className="flex items-center justify-end h-20">
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200" onClick={
              () => setIsOpen(!isOpen)
            }>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={topLineScope}
                />
                <motion.rect 
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  ref={bottomLineScope}
                />
              </svg>
            </div>
            <Button variant="primary" className="hidden md:inline-flex items-center">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
