import Image from "next/image";
import Link from "next/link";
import React from "react";
import tbtkImg from "../public/assets/projects/tbtk_sml.jpg";
import gwctrImg from "../public/assets/projects/gwctr_sml.jpg";
import temakImg from "../public/assets/projects/temak_sml.jpg";
import elvinImg from "../public/assets/projects/elvinediz_sml.jpg";
import symposiumImg from "../public/assets/projects/symposium_sml.jpg";
import Projectitem from "./Projectitem";

function Projects() {
  return (
    <div id="projects" className="w-full h-screen pt-24">
      <div className="max-w-[1280px] mx-auto px-2 pb-10">
        <h6>Projects</h6>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitem
            projecttitle="Türk Bilim Tarihi Derneği"
            projectsubtitle="Wordpress, Multilanguage, Donations"
            backgroundImg={tbtkImg}
            projectUrl="/tbtk"
          />
          <Projectitem
            projecttitle="Elvin Ediz Immigration Services"
            projectsubtitle="Wordpress, Multilanguage, Booking, Dark Mode"
            backgroundImg={elvinImg}
            projectUrl="/elvinediz"
          />
          <Projectitem
            projecttitle="GoldWing Club Türkiye"
            projectsubtitle="Wordpress, Multilanguage, Event, Membership"
            backgroundImg={gwctrImg}
            projectUrl="/gwctr"
          />
          <Projectitem
            projecttitle="Fuat Sezgin Symposium"
            projectsubtitle="Wordpress, Multilanguage, SEO"
            backgroundImg={symposiumImg}
            projectUrl="/symposium"
          />
          <Projectitem
            projecttitle="Temak Altunizade"
            projectsubtitle="Wordpress, Landing Page Design, Business Integration"
            backgroundImg={temakImg}
            projectUrl="/temak"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
