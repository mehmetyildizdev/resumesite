import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/ist.jpg";
import wordpressImg from "../public/assets/ist.jpg";
import tbtkImg from "../public/assets/ist.jpg";
import elvinImg from "../public/assets/ist.jpg";
import Projectitem from "./Projectitem";

function Projects() {
  return (
    <div id="projects" className="hidden w-full">
      <div className="max-w-[1280px] mx-auto px-2 py-16">
        <p className="text-xl mt-10 tracking-wider uppercase text-gold-1">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitem
            title="Property Finder"
            subtitle="*subtitle1*"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <Projectitem
            title="Wordpress Finder"
            subtitle="*subtitle2*"
            backgroundImg={wordpressImg}
            projectUrl="/property"
          />
          <Projectitem
            title="TBTK Finder"
            subtitle="*subtitle3*"
            backgroundImg={tbtkImg}
            projectUrl="/property"
          />
          <Projectitem
            title="Elvin Finder"
            subtitle="*subtitle4*"
            backgroundImg={elvinImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
