"use client";

import React from "react";

import { Reveal } from "../Reveal/Reveal";
import AboutUs from "../AboutUs/AboutUs";

import { loraItalic } from "src/app/fonts";

function Team() {
  return (
    <div id="nosotros" className="flex w-screen flex-col justify-center mt-2">
      <div className="w-screen flex justify-center my-12">
        <div style={{ width: "80%" }}>
          <Reveal>
            <div>
              <div
                className={`${loraItalic.className} w-full font-black flex justify-center md:justify-start items-center flex-row gap-1.5 bg-white md:pl-12 p-5 rounded-xl text-xl`}
              >
                <p className="flex text-green_greenplus">NOSOTROS</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <Reveal>
          <AboutUs />
        </Reveal>
      </div>
    </div>
  );
}

export default Team;
