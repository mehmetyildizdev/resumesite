import Image from "next/image";
import Link from "next/link";
import React from "react";

function Skills() {
  return (
    <div id="skills" className="w-full sm:h-screen p-4 py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center h-full">
        <h6>Skills</h6>
        <h2 className="py-4">Résumé</h2>
        <section className="lg:grid grid-cols-3 mt-2 gap-6">
          <div className="col-span-2 sm:grid grid-cols-2 gap-6">
            <leftcol>
              <div className=" shadow-lg shadow-gold-2 rounded-xl flex items-center justify-center py-8">
                <Image
                  className="animation:bounce"
                  src="/../public/assets/pp.png"
                  alt="/"
                  width="200px"
                  height="200px"
                />
              </div>
              <div className="p-2 mt-6 md:mt-12 rounded-xl shadow-lg shadow-gold-2">
                <h3>Education</h3>
                <div className="py-4">
                  <div className="grid grid-cols-3">
                    <Image
                      src="/../public/assets/fsm.png"
                      width="120px"
                      height="80px"
                      className="object-scale-down col-span-1"
                    />
                    <div className="pl-2 col-span-2">
                      <p className="font-bold ">
                        Fatih Sultan Mehmet Vakif University
                      </p>
                      <p className="text-[12px]">
                        Bachelor's Degree - History of Science
                      </p>
                      <p className="text-[12px]">2015 - 2018</p>
                      <p className="text-[12px]">
                        Graduated with high honors (GPA: 3.6)
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-4">
                    <Image
                      src="/../public/assets/au.png"
                      width="120px"
                      height="80px"
                      className="object-scale-down col-span-1"
                    />
                    <div className="pl-2 col-span-2">
                      <p className="font-bold ">Anadolu University</p>
                      <p className="text-[12px]">
                        Associate Degree - Web Design and Coding
                      </p>
                      <p className="text-[12px]">2019 - 2021</p>
                      <p className="text-[12px]">
                        Graduated with honors (GPA: 3.46)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </leftcol>
            <midcol>
              <div className="p-2 mt-6 sm:mt-0 rounded-xl shadow-lg shadow-gold-2">
                <h3>Experience</h3>
                <div className="py-4">
                  <div>
                    <h4 className="text-gold-1">Freelance Webmaster</h4>
                    <p className="text-[12px]">2018 - present</p>
                    <div>
                      <p className="px-4 py-1">
                        While I mainly focus on front-end development, what I
                        have done so far falls into description of a webmaster.
                        Clients often require assistance in their whole web
                        related services:
                      </p>
                      <p className="px-4 py-1">
                        Domain registration, hosting purchase, mailing set-up,
                        CMS installation, web design, logo design, graphic
                        design, content creation, translation, other 3rd party
                        services related to websites.
                      </p>
                      <p className="px-4 py-1">
                        While I am not master at everything I do, I present
                        quick solutions & workarounds to reduce cost for my
                        clients as well as learning something new in the
                        process.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gold-1">Part-Time Library Assistant</h4>
                    <h5>Fatih Sultan Mehmet Vakif University</h5>
                    <p className="text-[12px]">2018 - 2019</p>
                    <div>
                      <p className="px-4 py-1">
                        Had opportunity to learn about library management tools,
                        cataloging principles, and database management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </midcol>
          </div>
          <righcol>
            <div className="p-2 mt-6 sm:mt-0 rounded-xl shadow-lg shadow-gold-2 ">
              <h3>Skills</h3>
              <div>
                <div className="py-4">
                  <ul className="mx-2 ">
                    <li className="bg-dark-2 my-1">
                      <div className="w-[95%] bg-gold-1 pl-2 text-black">
                        Professional Level English
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[90%] bg-gold-1 pl-2 text-black">
                        Researcher
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[75%] bg-gold-1 pl-2 text-black">
                        Analytical Thinker
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[97%] bg-gold-1 pl-2 text-black">
                        Adaptable
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[85%] bg-gold-1 pl-2 text-black">
                        Office Software Whiz
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[55%] bg-gold-1 pl-2 text-black">
                        Graphic Designer
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[66%] bg-gold-1 pl-2 text-black">
                        HTML, CSS, JS
                      </div>
                    </li>
                    <li className="bg-dark-2 my-1">
                      <div className="w-[80%] bg-gold-1 pl-2 text-black">
                        Content Management & SEO
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h3>Certificates</h3>
                <div className="py-2 grid sm:col-span-1 md:grid-cols-2 lg:grid-cols-2 place-items-center gap-8">
                  <Link href="https://www.sololearn.com/Certificate/1014-5506616/jpg/">
                    <a rel="noopener noreferrer" target="_blank">
                      <div className="p-4 shadow-md shadow-gold-2 rounded-xl hover:scale-105 ease-in duration-150">
                        <div className="grid grid-cols-2 place-items-center">
                          <div className="m-auto">
                            <Image
                              src="/../public/assets/certificates/cert-html.jpg"
                              width="120px"
                              height="80px"
                            />
                          </div>
                          <div className="m-0 p-0">
                            <h5 className="rotate-90">HTML</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.sololearn.com/Certificate/1023-5506616/jpg/">
                    <a rel="noopener noreferrer" target="_blank">
                      <div className="p-4 shadow-md shadow-gold-2 rounded-xl hover:scale-105 ease-in duration-150">
                        <div className="grid grid-cols-2 place-items-center">
                          <div className="m-auto">
                            <Image
                              src="/../public/assets/certificates/cert-css.jpg"
                              width="120px"
                              height="80px"
                            />
                          </div>
                          <div className="m-0 p-0">
                            <h5 className="rotate-90">CSS</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.sololearn.com/certificates/course/en/5506616/1024/landscape/png">
                    <a rel="noopener noreferrer" target="_blank">
                      <div className="p-4 shadow-md shadow-gold-2 rounded-xl hover:scale-105 ease-in duration-150">
                        <div className="grid grid-cols-2 place-items-center">
                          <div className="m-auto">
                            <Image
                              src="/../public/assets/certificates/cert-js.jpg"
                              width="120px"
                              height="80px"
                            />
                          </div>
                          <div className="m-0 p-0">
                            <h5 className="rotate-90">Javascript</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.sololearn.com/Certificate/1097-5506616/jpg/">
                    <a rel="noopener noreferrer" target="_blank">
                      <div className="p-4 shadow-md shadow-gold-2 rounded-xl hover:scale-105 ease-in duration-150">
                        <div className="grid grid-cols-2 place-items-center">
                          <div className="m-auto">
                            <Image
                              src="/../public/assets/certificates/cert-react.jpg"
                              width="120px"
                              height="80px"
                            />
                          </div>
                          <div className="m-0 p-0">
                            <h5 className="rotate-90">React</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </righcol>
        </section>
      </div>
    </div>
  );
}

export default Skills;
