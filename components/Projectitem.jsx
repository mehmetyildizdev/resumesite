import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projectitem({ title, subtitle, backgroundImg, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-silver-1 rounded-xl p-4 group hover:bg-gradient-to-r from-rosegold-1 to-gold-2 ">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{subtitle}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-gradient-to-br from-gold-2 to-rosegold-1  cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projectitem;
