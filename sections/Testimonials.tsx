import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Robert Prehn",
    company: "Toca Boca",
    role: "Fractional CTO",
    quote:
      "Profit Pilots didn't just build us a website; they engineered an e-commerce platform. Our conversions are through the roof!",
    image: image2,
    imagePositionY: 0.2,
  },
  {
    name: "Ellen Ripley",
    company: "Aether Brew Co",
    role: "Chief Marketing Officer",
    quote:
      "Our old online store was a dead end. Profit Pilots launched us into a new orbit, optimizing everything for sales. It's like they have a sixth sense for what customers want.",
    image: image1,
    imagePositionY: 0.1,
  },
  {
    name: "Sarah Connor", 
    company: "Terra Bloom",
    role: "E-commerce Strategist",
    quote:
      "We needed an e-commerce solution that could survive anything. Profit Pilots delivered a robust, intuitive platform that's already paying dividends. They're the real deal.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const testimonialsIndex = 0;

  return (
    <section className="section">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
        <span className="whitespace-nowrap">
          Some nice words from our past clients
        </span>
        <span className="whitespace-nowrap self-end text-red-orange-500">
          Some nice words from our past clients
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {
            testimonials.map(({ name, company, role, quote, image, imagePositionY }, index) => (index === testimonialsIndex) && (
              <div key={name} className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center">
                <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                  <Image src={image} alt="name" 
                    className="size-full object-cover"
                    style={{
                      objectPosition: `50% ${imagePositionY * 100}%`
                    }}
                    />
                </div>
                <blockquote className="md:col-span-3">
                  <div className="text-3xl lg:text-6xl mt-8 md:mt-0">
                    <span>&ldquo;</span>
                    <span>
                      {quote}
                    </span>
                    <span>&rdquo;</span>
                  </div>
      
                  <cite className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic block">{name}, {role} at {company}</cite>
                </blockquote>
              </div>
            ))
          }
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <button 
          className="border 
          border-stone-400 size-11 
          inline-flex items-center 
          justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round" 
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button 
          className="border 
            border-stone-400 size-11 
            inline-flex items-center 
            justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;
