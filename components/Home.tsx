"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MusicPlayer } from "@/components/music";
import { anim, text } from "@/data/data";
import { Program } from "@/components/Program";
import { TimeBox } from "@/components/TimeBox";
import { Footer } from "./footer";
import Image from "next/image";
import AttendanceGuests from "./RSVP";

export default function Home() {

  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={`${openEnvelope ? "" : "relative h-dvh"} bg-[#fafafa] max-w-xl overflow-hidden m-auto text-vrayi `}
    >

      <div
        className={`${openEnvelope ? "animate-bounceYB" : ""} bg-center bg-cover z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <div
        className={`${openEnvelope ? "animate-bounceYT" : ""} bg-center bg-cover z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
        style={{ backgroundImage: `url("/envelope.png")` }}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />



      <div className={`max-w-xl m-auto ${openEnvelope ? "" : "hidden"}`}>

        {/* music button */}
        <div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed z-10 bg-[#4A4A4A70] right-5 top-6 rounded-[10px] w-16 h-16flex justify-center items-center"
          >
            <Image
              src="/musIcon.png"
              alt="music"
              width={20}
              height={20}
              className="w-full p-3 invert-100"
            />
          </button>
          <MusicPlayer isPlaying={isPlaying} />
        </div>

        {/* 1 img */}
        <div
          className="min-h-dvh text-[#F2F2F2]  max-w-xl m-auto bg-cover  bg-no-repeat  bg-center  text-vrayi flex flex-col items-center justify-end text-center p-8 "
          style={{
            backgroundImage: "url('/arajin.jpg')",
          }}
        >
          <h1 className=" text-[#000000] text-[50px] mb-10 FontMassis">
            {text.firstwho}
          </h1>
        </div>

        <section className="text-center FontMassis tracking-[8%] px-5 py-15">
          <motion.h2 {...anim} className="mb-5 font-bold text-vrayi text-2xl">
            {text.title1}
          </motion.h2>
          <motion.p {...anim} className=" text-2xl text-vrayi">
            {text.descr1}
          </motion.p>
          <motion.h2
            {...anim}
            className=" mt-15 my-10 relative z-0 text-vrayi text-4xl w-max mx-auto"
          >
            Միջոցառմանը մնաց
            <p className=" absolute w-max -z-1 text-5xl -top-1 left-1/2 -translate-x-1/2 text-hetevi ">
              Միջոցառմանը մնաց
            </p>
          </motion.h2>
          <TimeBox />
        </section>

        {/* 2 img */}
        <section
          className="text-6xl text-[#fdf8f5] h-150 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/second.jpg')",
          }}
        >
          <div className="h-full p-8 backdrop-brightness-50 flex flex-col justify-center gap-30 text-center ">
            <motion.div
              {...anim}
              className="relative w-[70%] mx-auto FontMassis flex flex-col gap-20"
            >
              <p className="text-6xl text-start font-bold">SAVE </p>
              <p className="text-end ml-10 mt-10 absolute text-[#ffffff50] -z-1  w-full text-9xl">
                The
              </p>
              <p className="text-6xl font-bold text-start">DATE</p>
            </motion.div>

            <motion.h2
              {...anim}
              className=" tracking-widest FontMassis text-5xl"
            >
              {text.day}
            </motion.h2>
          </div>
        </section>

        {/* 3 img */}
        <div className="px-6 mt-20 mb-10">
          <div
            className="w-full h-110  bg-center no-repeat bg-cover rounded-[10px]"
            style={{
              backgroundImage: "url('/last.jpg')",
            }}
          ></div>
        </div>
        <Program />

        <section className="text-center font-bold  px-2 pb-12">
          <motion.h2
            {...anim}
            className="relative z-1 FontMassis my-4 text-vrayi text-2xl"
          >
            {text.child}
            <p className=" absolute -z-1 w-max text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-hetevi ">
              {text.child}
            </p>
          </motion.h2>
        </section>

        {/* text info */}
        <section className="text-center font-bold px-2 pb-12">
          <motion.h2
            {...anim}
            className="relative z-1 FontMassis my-4 text-vrayi text-2xl"
          >
            {text.txtEnd}
            <p className=" absolute -z-1 w-max text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-hetevi ">
              {text.txtEnd}
            </p>
          </motion.h2>
        </section>


        {/* RSVP */}
        <AttendanceGuests />



        <Footer />
      </div>
    </div>
  );
}
