"use client"

import { montserrat } from "src/app/fonts";
import { RegisterProvider } from "./context/Register.context";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RegisterProvider>
      <section
        className={`bg-gradient-to-r from-gray-800 to-green-800 h-screen w-screen overflow-hidden flex`}
      >
        <div className="flex-col items-start ml-10 mt-16 max-w-2xl hidden sm:flex">
          <h1 className={`${montserrat.className} text-white text-9xl`}>
            GreenPlus
          </h1>
          <h2
            className={`${montserrat.className} text-white text-4xl mt-8 ml-3`}
          >
            Descubre cómo ayudar a descarbonizar el futuro y contribuir a la
            construcción de una economía sostenible.
          </h2>
        </div>
        <div className="flex items-center justify-end sm:ml-48">{children}</div>
      </section>
    </RegisterProvider>
  );
}
