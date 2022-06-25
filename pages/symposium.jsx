import Image from "next/image";
import React from "react";
import { FaRegSun } from "react-icons/fa";
import Link from "next/link";

function symposium() {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/symposium.jpg"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full p-5 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <h2 className="py-2">Fuat Sezgin Sempozyumu</h2>
          <h4>Wordpress, Multilingual, Search Engine Optimization</h4>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h6>Webmaster</h6>
          <h2 className="py-4">
            Website of International Symposium Organized in Honor of Prof. Dr.
            Fuat Sezgin
          </h2>
          <div className="py-2 space-y-4">
            <p>
              In this project I built a Wordpress website using Event Star Theme
              integrated with Polylang. I also handled hosting and mailing
              services together with data management such as information
              regarding participants.
            </p>
            <p>
              While I no longer handle their web services, this was my first
              professional work for building websites. As I didnt know much
              about handling Wordpress that time, I had to edit every media file
              sent by designer to fit into default values provided by theme.
            </p>
            <p>
              The universities in charge of symposium ran ad campaigns online.
              For that to work better, I learned search engine optimization in
              Wordpress. Using Yoast plugin, which handles SEO pretty well
              itself, became my first step on SEO practices. It allowed me to
              learn more about SEO techniques later on.
            </p>
            <hr className="border-gold-1 w-[25%]" />
            <p>
              Below you can see a full screen picture of landing page design.
              Clicking the image should open the website in new tab.
            </p>
          </div>
          <div className="py-4">
            <Link href="/#projects">
              <p className="underline cursor-pointer text-gold-1">
                Go Back to Homepage
              </p>
            </Link>
          </div>
          <div>
            <Link href="https://fuatsezginsempozyumu.org">
              <a rel="noopener noreferrer" target="_blank">
                <Image
                  src="/assets/projects/symposium.png"
                  alt="/"
                  width="1903px"
                  height="4998px"
                  objectFit="contain"
                  className="cursor-pointer py-8"
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:grid h-48 md:col-span-1 shadow-lg shadow-gold-2 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Features</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Wordpress
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Multilingual
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> SEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default symposium;
