"use client";

import React from "react";
import { Reveal } from "../Reveal/Reveal";
import ContactMean from "../ContactMean/ContactMean";

import { loraItalic } from "src/app/fonts";

function Contact() {
  const means = [
    {
      icon: "/landing/contact/email.png",
      title: "Email",
      data: "info@greenplus.global",
      link: "",
    },
    {
      icon: "/landing/contact/telefono.png",
      title: "Telefono",
      data: "+595-976-840-833",
      link: "",
    },
    {
      icon: "/landing/contact/whatsapp.png",
      title: "Whatsapp",
      data: "wa.me/595976840833",
      link: "https://api.whatsapp.com/send/?phone=595976840833&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <div id="contacto" className="w-screen flex justify-center my-12">
      <div style={{ width: "80%" }}>
        <Reveal>
          <div className="w-full flex justify-center flex-col">
            <div className={`${loraItalic.className} w-full font-black flex justify-center md:justify-start items-center flex-row gap-1.5 bg-white mb-12 md:pl-12 p-5 rounded-xl text-xl`}>
              <p className="flex text-green_greenplus">CONTACTO</p>
            </div>
            <div>
              <p className="text-lg text-center px-4 mb-6 md:px-28 md:mb-12 font-light text-gray-500">
                Contactános para obtener más información sobre nuestro servicio y sus ventajas. Estamos para responder tus preguntas y brindarte toda la información que necesitas.
              </p>
            </div>
            <div className="h-full flex justify-center flex-col items-center">
              {means.map((item, index) => (
                <ContactMean key={index} index={index} icon={item.icon} title={item.title} data={item.data} link={item.link} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Contact;
