import Link from "next/link";
import React from "react";

interface Props {
  img: string;
  name: string;
  position: string;
  desc: string;
  linkedin: string;
}

function Profile({ img, name, position, desc, linkedin }: Props) {
  return (
    <Link href={linkedin} target="_blank">
      <div className="block justify-center w-[300px] h-[350px] bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl cursor-pointer hover:bg-green_greenplus hover:h-[410px] transition-all duration-500">
        <div className="w-full flex justify-center p-8">
          <div
            className="w-40 h-40 bg-cover bg-center rounded-full group-hover:shadow-2xl"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div className="flex justify-center text-center">
          <p className="text-2xl group-hover:text-white transition-colors duration-500">
            {name}
          </p>
        </div>
        <div className="flex justify-center text-center mt-2">
          <p className="text-lg font-medium text-green_greenplus group-hover:text-white transition-colors duration-500">
            {position}
          </p>
        </div>
        <div className="flex justify-center text-center mt-5 px-4">
          <p className="hidden text-sm font-light text-black group-hover:block group-hover:text-white transition-colors duration-500">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Profile;
