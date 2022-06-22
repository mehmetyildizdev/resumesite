import Image from "next/image";
import Link from "next/link";

function Projectitem({
  projecttitle,
  projectsubtitle,
  backgroundImg,
  projectUrl,
}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gold-2 rounded-xl p-4 group hover:bg-gradient-to-r from-rosegold-1 to-gold-2 ">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden w-[75%] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl sm:text-3xl tracking-wider text-center">
          {projecttitle}
        </h3>
        <p className="pb-4 pt-2 text-center">{projectsubtitle}</p>
        <Link href={projectUrl}>
          <p className="text-center text-xl font-bold text-dark-1 py-3 rounded-xl bg-gradient-to-br from-gold-2 to-rosegold-1 shadow-light-3 shadow-inner cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projectitem;
