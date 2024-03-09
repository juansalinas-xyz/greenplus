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
        className={`flex justify-center bg-cover bg-center relative h-screen w-screen overflow-hidden`}
        style={{backgroundImage: 'url(/fondo_arboles_register.jpg)'}}
      >
        <div className="flex-col items-start mt-16 max-w-2xl hidden sm:flex">
          <h1 className={`${montserrat.className} text-white font-bold text-7xl`}>
            GreenPlus
          </h1>
          <h2
            className={`${montserrat.className} text-white text-2xl mt-8`}
          >
            Descubre cómo ayudar a descarbonizar el futuro y contribuir a la
            construcción de una economía sostenible.
          </h2>
        </div>
        <div className="flex items-center justify-end">{children}</div>
      </section>
    </RegisterProvider>
  );
}
