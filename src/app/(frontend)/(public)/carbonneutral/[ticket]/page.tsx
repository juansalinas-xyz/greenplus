"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const params = useParams<{ ticket: string }>();
  const router = useRouter();

  if(params.ticket.length > 6 || params.ticket.length < 3) {
    router.push("/error");
    return null;
  }

  return (
    <div className="w-screen h-auto flex-col bg-slate-200 pb-12">
      <div className="h-[45vh] lg:max-h-80 w-full bg-center bg-cover flex justify-center items-center lg:items-start lg:justify-start bg-[url('/ticket/fondo_ticket2.jpg')]">
        <div className="md:h-80 md:w-80 h-[80%] w-[80%] min-h-[310px] lg:mt-[70px] lg:ml-[188px] py-5 px-5 rounded-2xl flex flex-col items-center gap-5 bg-white shadow-md backdrop-blur-lg">
          <div className="flex gap-3 flex-col">
            <div className="flex justify-center">
              <Image
                src={"/ticket/greenplus.png"}
                alt={""}
                height={35}
                width={35}
                className="h-auto w-auto"
              />
            </div>
            <div className="flex flex-row justify-center h-auto gap-5">
              <div className="flex flex-col items-center">
                <p className="text-4xl">ASU</p>
                <p className="text-sm text-gray-500">Asunción</p>
                <p className="text-xs text-gray-600 mt-0.5">20/05/2024</p>
              </div>
              <div className="mt-2">
                <Image
                  src={"/ticket/flecha.png"}
                  alt={""}
                  height={30}
                  width={30}
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl">BUE</p>
                <p className="text-sm text-gray-500">Buenos Aires</p>
                <p className="text-xs text-gray-600 mt-0.5">20/05/2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <p className="bg-black text-white w-24 py-2 rounded-3xl text-center">
                1 pasajero
              </p>
            </div>
            <div className="flex flex-row gap-1 justify-center">
              <Image
                src={"/ticket/avion2.png"}
                alt={""}
                height={20}
                width={20}
                className="h-auto w-auto"
              />
              <p className="text-green_greenplus font-bold">TRIBU Air</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 lg:w-[70%] w-full flex lg:justify-end justify-center lg:items-center lg:ml-44 mt-4 font-black cursor-pointer">
        <Link href={"/"}>
          <div className="group flex flex-row gap-1 hover:bg-green_greenplus hover:rounded-2xl hover:p-2 hover:mt-4 transition-all duration-500">
            <p className="text-end text-black group-hover:text-white transition-all duration-500">
              Powered by
            </p>
            <p className="text-end text-green_greenplus group-hover:text-white transition-all duration-500">
              GREEN PLUS
            </p>
            <Image
              src={"/ticket/greenplus.png"}
              alt={""}
              height={20}
              width={20}
              className="h-auto w-auto"
            />
          </div>
        </Link>
      </div>
      <div className="h-full w-full flex flex-col items-center lg:mt-36 mt-10 gap-12">
        <div className="flex lg:items-start items-center md:flex-row flex-col gap-5 lg:w-[70%] w-[85%]">
          <div className="w-full flex flex-col lg:items-start items-center gap-3">
            <p className="ml-0.5 w-full font-bold text-2xl">Detalles del vuelo</p>
            <div className="w-full h-28 py-4 rounded-xl bg-white flex flex-col gap-2 px-5">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row justify-center gap-3">
                  <Image
                    src={"/ticket/flecha_gris.png"}
                    alt={""}
                    height={25}
                    width={25}
                  />
                  <p className="text-gray-500 text-base">Solo ida</p>
                </div>
                <div className="h-full w-0.5 bg-gray-500"></div>
                <div className="flex flex-row">
                  <p className="text-gray-500 text-base">1 Adulto</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 my-1"></div>
              <div className="flex flex-row gap-3">
                <Image
                  src={"/ticket/ticket.png"}
                  alt={""}
                  height={25}
                  width={25}
                />
                <div className="flex flex-row gap-2">
                  <p className="text-gray-500 text-base">Codigo de reserva:</p>
                  <p className="text-green_greenplus text-base font-bold">
                    {params.ticket}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="ml-0.5 w-full font-bold text-2xl">Pasajeros</p>
            <div className="w-full h-28 py-4 rounded-xl bg-white flex flex-col gap-2 px-5">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row justify-center gap-3">
                  <Image
                    src={"/ticket/persona.png"}
                    alt={""}
                    height={20}
                    width={20}
                    className="h-auto w-auto"
                  />
                  <p className="text-gray-500 text-base">Juan Perez</p>
                </div>
                <div className="h-full w-0.5 bg-gray-500"></div>
                <div className="flex flex-row gap-2">
                  <p className="text-gray-500 text-base">Asiento:</p>
                  <p className="text-green_greenplus text-base">123A</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-300 my-1"></div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-2">
                  <p className="text-gray-500 text-base">Nacionalidad:</p>
                  <p className="text-green_greenplus text-base">Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:items-stretch items-center lg:w-[70%] w-[85%]">
          <p className="ml-0.5 w-full font-medium text-xl text-gray-600">Ida</p>
          <div className="w-full h-auto py-4 rounded-xl bg-white flex flex-col justify-center gap-2 px-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-0.5">
                  <p className="text-zinc-800 text-lg font-medium">Asunción</p>
                  <p className="text-zinc-600 text-lg font-medium">(ASU)</p>
                </div>
                <p className="text-zinc-600 text-lg font-medium">-</p>
                <div className="flex flex-row gap-0.5">
                  <p className="text-zinc-800 text-lg font-medium">
                    Buenos Aires
                  </p>
                  <p className="text-zinc-600 text-lg font-medium">(BUE)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2">
                    <Image
                      src={"/ticket/despegue.png"}
                      alt={""}
                      height={12}
                      width={15}
                      className="h-auto w-auto"
                    />
                    <p>Lunes, 20 de Mayo de 2024</p>
                  </div>
                  <div className="ml-7 flex flex-col text-gray-500">
                    <p>
                      19:00 ASU Asunción - (Aeropuerto Internacional Silvio
                      Pettirossi)
                    </p>
                    <p className="text-green_greenplus">TRIBU Air</p>
                    <p>2h 50m</p>
                    <p>Vuelo N° AB123 | Economy</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2">
                    <Image
                      src={"/ticket/aterrizaje.png"}
                      alt={""}
                      height={12}
                      width={15}
                      className="h-auto w-auto"
                    />
                    <p>Lunes, 20 de Mayo de 2024</p>
                  </div>
                  <div className="ml-7 flex flex-col text-gray-500">
                    <p>21:50 AEP Buenos Aires - (Aeroparque Jorge Newbery)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:items-stretch flex-col lg:w-[70%] w-[85%]">
          <div className="w-full flex justify-start">
            <p className="font-medium text-lg text-gray-600">Compensación de carbono</p>
          </div>
          <div className="w-full h-auto py-4 rounded-xl bg-white flex flex-col justify-start gap-2 px-4 mt-3">
            <p className="text-center font-medium text-gray-800 lg:text-[16px] text-sm">Descubre más información sobre la neutralización de la huella de carbono de tu vuelo en la blockchain</p>
            <Link href={"https://testnet.explorer.perawallet.app/tx/KOWSWS24JUKVLWDQFMOOWWDHV4SW5LIOY7FPARCF7MYHRX3N6LTA/"}>
              <div className="flex flex-row justify-center items-center gap-2 mx-4 mt-2 bg-green_greenplus rounded-xl p-2 cursor-pointer hover:shadow-2xl transition-all">
                <Image src={"/ticket/blockchain.png"} alt={""} height={20} width={20} className="bg-cover h-auto w-auto"/>
                <p className="text-white">Manifiesto</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
