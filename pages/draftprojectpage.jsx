import Image from "next/image";
import React from "react";
import { FaRegSun } from "react-icons/fa";
import Link from "next/link";

function tbtk() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/tbtk.jpg"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full p-5 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <h2 className="py-2">Türk Bilim Tarihi Kurumu</h2>
          <h4>Wordpress, Multilanguage, Donations</h4>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h6>Project</h6>
          <h2>Overview</h2>
          <div className="py-2">
            <p>
              Here you can see a full screen picture of landing page design.
              Clicking the image should redirect you to the website.
            </p>
          </div>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-silver-1 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> React
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> React
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> React
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> React
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> React
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default tbtk;
