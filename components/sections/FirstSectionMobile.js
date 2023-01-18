import React from "react";
import { gsap } from "gsap/dist/gsap";
import { Tween } from "react-gsap";
import Image from "next/image"
import PhotoMobile from "../three/PhotoMobile";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function FirstSectionMobile() {

  return (
    <>
      <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "1",
            backgroundColor: "#0E1012",
          }}
          className=" panel"
        >
          <section className="panel text-white border-l-2 border-white flex flex-col justify-between pt-11  uppercase z-10">
            <ul className=" text-2xl w-full ">
              <li className="border-b-2 flex pl-2">About</li>
              <li className="border-b-2 flex pl-2">APPROACH</li>
              <li className="border-b-2 flex pl-2">SELECTED PROJECTS</li>
              <li className="border-b-2 flex pl-2">AWARDS & RECOGNITIONS</li>
              <li className="border-b-2 flex pl-2">CONTACT US</li>
              <li className="border-b-2 flex pl-2">COLOPHON</li>
            </ul>
            <span className="uppercase flex text-7xl items-end justify-center">
              Summary

            </span>
          </section>
        </section>
      </Tween>
      <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "1",
            backgroundColor: "#0E1012",
          }}
          className="bg-red-500 panel"
        >
          <section
            id="about"
            className="about panel relative  text-white  flex pt-10 z-10"
          >
            <div style={{
              border: "1px solid #fff",
            }} className="bord h-full w-12 absolute text-2xl  px-5  flex flex-col justify-between  uppercase ">
              <div className="mt-20 -rotate-90">3</div>
              <div className="mb-20 -rotate-90">About</div>
            </div>
            <div className="">
              <div className="grid grid-row-2 text-md text-left">
                <div className="ml-9 text-left px-5 py-10 w-4/6">
                  Hi, My name is
                  <span className="text-orange-400"> Ayad</span>. I am 26 years
                  old Web Developer Welcome to my portfolio website. Dive into
                  some fun projects I have done over the years. I design and
                  develop websites for businesses using HTML, CSS, JavaScript. I
                  have also worked as a video and photo editor using Adobe
                  PhotoShop and Adobe Premiere. I am also passionate about
                  building animated websites using three.js blender webgl.

                </div>

                <div className="image ml-12">
                  <PhotoMobile />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "1",
            backgroundColor: "#0E1012",
          }}
          className="bg-red-500 panel"
        >
          <section className="exp panel   text-white pt-10  flex overflow-hidden z-10">
          <div style={{
              border: "1px solid #fff",
            }} className="bord h-full w-12 absolute text-2xl  px-5  flex flex-col justify-between  uppercase ">
              <div className="mt-20 -rotate-90">4</div>
              <div className="mb-20 -rotate-90">Experiance</div>
            </div>
            <div className="space-y-3 pl-10 grid grid-rows-2">
              <div className="mt-10 text-left flex flex-col justify-around pl-10">
                <div>
                  <h1 className="text-2xl font-extrabold">SKILLS & TOOLS</h1>
                </div>
                <div className="flex flex-col justify-around font-bold">
                  <h1 className="text-xl">My Toolbox & Things I Can Do</h1>
                  <h1 className="text-xl">
                    The skills, tools and technologies I use to bring your
                    products to life:
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-4 ml-2 text-xs">
                <div className="helo">
                  <Image
                    alt="JavaScript"
                    src={"https://ayadalshaikhli.github.io/videos/java.png"}
                    width={150}
                    height={150}
                  />
                  <h1>JavaScript</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="react"
                    src={"https://ayadalshaikhli.github.io/videos/react.png"}
                    width={150}
                    height={150}
                  />
                  <h1>React</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="nextjs"
                    src={"https://ayadalshaikhli.github.io/videos/nextjs.png"}
                    width={150}
                    height={150}
                  />
                  <h1>NextJS</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="jquery"
                    src={"https://ayadalshaikhli.github.io/videos/jquery.png"}
                    width={150}
                    height={150}
                  />
                  <h1>jQuery</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="Gsap"
                    src={"https://ayadalshaikhli.github.io/videos/gsap.png"}
                    width={150}
                    height={150}
                  />
                  <h1>Gsap</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="three"
                    src={"https://ayadalshaikhli.github.io/videos/three.png"}
                    width={150}
                    height={150}
                  />
                  <h1>ThreeJS</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="html"
                    src={"https://ayadalshaikhli.github.io/videos/html.png"}
                    width={150}
                    height={150}
                  />
                  <h1>HTML</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="css"
                    src={"https://ayadalshaikhli.github.io/videos/css.png"}
                    width={150}
                    height={150}
                  />
                  <h1>CSS</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="blender"
                    src={"https://ayadalshaikhli.github.io/videos/blender.png"}
                    width={150}
                    height={150}
                  />
                  <h1>Blender</h1>
                </div>

                <div className="helo">
                  <Image
                    alt="mongodb"
                    src={"https://ayadalshaikhli.github.io/videos/mongodb.png"}
                    width={150}
                    height={150}
                  />
                  <h1>mongoDB</h1>
                </div>

                <div className="helo">
                  <Image
                    alt="nodejs"
                    src={"https://ayadalshaikhli.github.io/videos/nodejs.png"}
                    width={150}
                    height={150}
                  />
                  <h1>NodeJS</h1>
                </div>
                <div className="helo">
                  <Image
                    alt="expressjs"
                    src={"https://ayadalshaikhli.github.io/videos/ExpressJS.png"}
                    width={150}
                    height={150}
                  />
                  <h1>ExpressJS</h1>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Tween>

    </>
  );
}

export default FirstSectionMobile;
