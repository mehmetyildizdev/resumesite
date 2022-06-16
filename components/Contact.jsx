import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaTelegramPlane,
  FaGithub,
  FaEnvelope,
  FaAngleDoubleUp,
} from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="hidden w-full lg:h-screen">
      <div className="max-w-[1280px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-wider uppercase text-gold-1">Contact</p>
        <h2 className="py-4"></h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-silver-1 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-150"
                  src="/../public/assets/ist.jpg"
                  alt="/"
                  width="500"
                  height="300"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
                    <FaTwitter />
                  </div>
                  <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
                    <FaFacebook />
                  </div>
                  <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
                    <FaTelegramPlane />
                  </div>
                  <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
                    <FaEnvelope />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-silver-1 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gold-1"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gold-1"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-Mail</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gold-1"
                    type="e-mail"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gold-1"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gold-1"
                    rows="6"
                  ></textarea>
                </div>
                <button className="w-full p-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#">
            <div className="rounded-full shadow-lg shadow-silver-1 cursor-pointer p-6 hover:scale-105 ease-in duration-100">
              <FaAngleDoubleUp className="text-gold-1" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
