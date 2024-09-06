"use client"

import Image from "next/image";
import hero from "../public/hero.png";
import heromobile from "../public/hero-mobile.png";
import SlotCounter from "react-slot-counter";
import { useEffect, useState } from "react";
import "./landing.css";
import FeaturedCompetitions from "./components/competitions";

export default function Home() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setValue(29);
    return () => setValue(1);
  }, []);
  return (
    <main className="min-h-screen bg1">
      <section className="web bg-[#F8F1DE] p-8 rounded-[1.75rem] flex items-center flex-col">
        <div className="flex w-full justify-center items-center gap-x-5">
          <h1 className="m-2 thunder-head text-[8.5vw] leading-tight">EXPERIENCE THE</h1>
          <div className="bg-[#C9F090] px-10 ml-4 rounded-[4rem] text-[#F8F1DE] flex items-center gap-4">
            <p className="thunder-head text-center text-[6vw] leading-tight flex items-center text-[#000]"> EDITION </p>
            <SlotCounter startValue={0}
              value={value}
              duration={1.5}
              sequentialAnimationMode
              animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
              charClassName="thunder-head text-[6vw] text-[#000]"
            />
          </div>
        </div>

        <div className="relative flex justify-center h-[85vh]">
          <Image src={hero} alt="Loading.." className="rounded-3xl h-[70%] small_tablet:h-full" />
          <p className="bg-[#F8F1DE] rounded-bl-2xl absolute top-0 right-0 py-2 px-6 flex justify-start items-center thunder-head text-[8.5vw] leading-tight">EXTRAORDINARY.</p>
        </div>
        <div className="flex justify-evenly items-center px-12 mt-6 gap-4 min-h-56">
          <h3 className="text-[4vmax] thunder-subhead">About <br />Alcheringa</h3>
          <p className="text-[1.5vmax] text-justify w-[60%] font-dm-sans">Alcheringa is the annual cultural festival of the Indian Institute of Technology (IIT), Guwahati. Started in 1996 by a group of students, Alcheringa, IIT Guwahati has become one of Asia’s most significant college-level cultural events. Spread over three days and four nights, Alcheringa attracts people from all over the world with its spectacular events and competitions.
          </p>
        </div>
      </section>
      <section className="mobile hidden bg-[#F8F1DE] p-8 rounded-[1.75rem] flex-col" >
        <h1 className="m-2 thunder-head text-[7.5vmax] leading-tight">EXPERIENCE THE</h1>
        <h1 className="m-2 thunder-head text-[7.5vmax] leading-tight">EXTRAORDINARY.</h1>
        <div className="relative flex justify-center h-[70vh]">
          <Image src={heromobile} alt="Loading.." className="rounded-3xl h-full" />
          <div className="absolute bg-[#F8F1DE] py-3 rounded-bl-2xl right-0">
            <div className="px-10 py-3 ml-4 rounded-[30px] text-[#000] flex items-center gap-4 bg-[#C9F090]">
              <p className="thunder-head text-center text-[8vw] leading-tight flex items-center"> EDITION </p>
              <SlotCounter startValue={0}
                value={value}
                duration={1.5}
                sequentialAnimationMode
                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
                charClassName="thunder-head text-[8vw]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center mt-6 gap-4 min-h-56">
          <h3 className="text-[3rem] thunder-subhead w-[100%]">About <br />Alcheringa</h3>
          <p className="text-md text-justify w-[100%] font-dm-sans">Alcheringa is the annual cultural festival of the Indian Institute of Technology (IIT), Guwahati. Started in 1996 by a group of students, Alcheringa, IIT Guwahati has become one of Asia’s most significant college-level cultural events. Spread over three days and four nights, Alcheringa attracts people from all over the world with its spectacular events and competitions.
          </p>
        </div>
      </section>
      <section className=" text-[#F8F1DE] text-[4.5vmax] thunder-subhead flex items-center gap-2 justify-evenly py-6">
        <div className="flex items-start small_tablet:items-center flex-col">
          <span className="flex items-center">
            <SlotCounter value={80}
              duration={1.5}
              animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
            />
            <p>+</p>
          </span>
          <p className="py-2 text-[3.5vmax] text-[#C9F090]">EVENTS</p>
        </div>
        <div className="flex items-start small_tablet:items-center flex-col">
          <span className="flex items-center">
            <SlotCounter value={200}
              duration={1.5}
              animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
            />
            <p>K+</p>
          </span>
          <p className="py-2 text-[3.5vmax] text-[#C9F090]">FOOTFALL</p>
        </div>
        <div className="flex items-start small_tablet:items-center flex-col">
          <span className="flex items-center">
            <SlotCounter value={45}
              duration={1.5}
              animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
            />
            <p>+</p>
          </span>
          <p className="py-2 text-[3.5vmax] text-[#C9F090]">COMPETITIONS</p>
        </div>
      </section>
      <FeaturedCompetitions pg={"home"} tag={"Featured"} title={"Events"} />
    </main>
  );
}



