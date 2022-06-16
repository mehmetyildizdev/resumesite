import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div id="about" className="w-full sm:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1280px] pt-12 m-auto sm:grid grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto shadow-lg shadow-gold-2 rounded-xl flex items-center justify-center p-8 hover:scale-105 ease-in duration-500">
          <Image
            className="rounded-full"
            src="/../public/assets/ppdrawing.jpg"
            alt="/"
            width="200px"
            height="200px"
          />
        </div>
        <div className="col-span-2 pt-4">
          <h6>About Me</h6>
          <h2 className="py-4">I am not your typical developer!</h2>
          <p className="py-2">
            I have a passion for computers and history since childhood. While
            having opportunity to pursue education mainly in history, I have
            always been the person to "go to" among my social circle about
            computers. This could be about buying, fixing, using devices, or
            installing, learning, using all types of software.
          </p>
          <p className="py-2">
            With the help of my interest in constant learning, I decided to turn
            my passion into professional knowledge in the world of computers. I
            started with web design, and now getting more familiar with
            programming side of front-end technologies. My ultimate aim is to be
            skillful at both front and back end of web technologies to create
            useful applications.
          </p>
          <div className="hidden items-center gap-8 py-4">
            <button className="px-6 py-2">Check my blog</button>
            <Link href="/../public/assets/CV_Mehmet_YILDIZ">
              <a target="_blank">
                <button className="px-6 py-2">Download my résumé</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
