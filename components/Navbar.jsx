import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookSquare,
  FaTelegramPlane,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaWindowClose,
  FaRegWindowClose,
  FaWindows,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#2E2E2E");
  const [linkColor, setLinkColor] = useState("#F8F9FA");
  const router = useRouter;

  useEffect(() => {
    if (
      router.asPath === "/elvinediz" ||
      router.asPath === "/temak" ||
      router.asPath === "/gwctr" ||
      router.asPath === "/tbtk" ||
      router.asPath === "/symposium"
    ) {
      setNavBg("transparent");
      setLinkColor("#B76E79");
    } else {
      setNavBg("#2E2E2E");
      setLinkColor("#F8F9FA");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-[0_15px_10px_-15px_rgba(255,255,255,0.3)] z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center  w-full p-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/logo-light.png"
            alt="/"
            width="240"
            height="60"
            loading="eager"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#">
              <li className="ml-10 text-md uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-md uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-md uppercase hover:border-b">Résumé</li>
            </Link>
            <Link href="https://blog.mehmetyildiz.dev">
              <a rel="noopener" target="_blank">
                <li className="ml-10 text-md uppercase hover:border-b">Blog</li>
              </a>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <FaBars size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/90" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60,5] md:w-[45%] h-screen bg-dark-1 ease-in duration-700"
              : "fixed left-[-100%] top-0 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="bg-black flex w-full justify-between items-center p-5">
              <Image src="/assets/logo.gif" width="95" height="40" alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full p-1 shadow-md shadow-silver-1  cursor-pointer"
              >
                <AiOutlineClose size={25} color="#E6E6E6" />
              </div>
            </div>

            <div className="border-b border-spacing-20 border-gold-1 my-4">
              <p className="w-[85%] md:w-[85%] px-6 pb-3">
                Let&apos;s build your web identity together!
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col">
            <ul className="uppercase">
              <Link href="/#">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Résumé
                </li>
              </Link>
              <Link href="https://blog.mehmetyildiz.dev">
                <a rel="noopener" target="_blank">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Blog
                  </li>
                </a>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-wider text-gold-1">
                Let&apos;s Connect!
              </p>
              <div className="flex items-center justify-between my-4">
                <a
                  href="https://www.linkedin.com/in/yildizmehmet/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gold-2 cursor-pointer p-2 hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn className="text-gold-1 text-lg" />
                  </div>
                </a>
                <a
                  href="https://twitter.com/albursavi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gold-2 cursor-pointer p-2 hover:scale-105 ease-in duration-300">
                    <FaTwitter className="text-gold-1 text-lg" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/teknikmuhakkik/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gold-2 cursor-pointer p-2 hover:scale-105 ease-in duration-300">
                    <FaFacebookSquare className="text-gold-1 text-lg" />
                  </div>
                </a>
                <a
                  href="https://t.me/memostar91"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gold-2 cursor-pointer p-2 hover:scale-105 ease-in duration-300">
                    <FaTelegramPlane className="text-gold-1 text-lg" />
                  </div>
                </a>
                <a
                  href="mailto:contact@mehmetyildiz.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gold-2 cursor-pointer p-2 hover:scale-105 ease-in duration-300">
                    <FaEnvelope className="text-gold-1 text-lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
