import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import Image from "next/image"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Photo from "../three/Photo";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function FirstSection() {
  // ScrollTrigger.create({
  //   trigger: ".product-list",
  //   start: "top 50%",
  //   end: "bottom 0%",

  //   onEnter: () => {
  //     gsap.to(".body", {
  //       duration: 1.0,
  //       backgroundColor: "#fff",
  //     });
  //   },

  //   onLeaveBack: () => {
  //     gsap.to(".body", {
  //       duration: 1.0,
  //       backgroundColor: "#000",
  //     });
  //   },
  // });
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
          <section className="panel  text-white border-l-2 border-white flex flex-col justify-between pt-11  uppercase z-10">
            <ul className=" text-4xl w-full ">
              <li className="border-b-2 flex pl-2">About</li>
              <li className="border-b-2 flex pl-2">APPROACH</li>
              <li className="border-b-2 flex pl-2">SELECTED PROJECTS</li>
              <li className="border-b-2 flex pl-2">AWARDS & RECOGNITIONS</li>
              <li className="border-b-2 flex pl-2">CONTACT US</li>
              <li className="border-b-2 flex pl-2">COLOPHON</li>
            </ul>
            <span className="uppercase flex text-9xl items-end justify-center">
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
            }} className="bord h-full w-12 absolute text-6xl  px-10  flex flex-col justify-between  uppercase ">
              <div className="mt-20 -rotate-90">3</div>
              <div className="mb-20 -rotate-90">About</div>
            </div>
            <div className="">
              <div className="grid grid-cols-2  text-2xl text-left ml-4">
              
                <div className=" ml-32  text-left px-5 py-10 ">
                  Hi, My name is
                  
                  <span className="text-orange-400 "> Ayad</span>. I am 26 years
                  old Web Developer Welcome to my portfolio website. Dive into
                  some fun projects I have done over the years. I design and
                  develop websites for businesses using HTML, CSS, JavaScript. I
                  have also worked as a video and photo editor using Adobe
                  PhotoShop and Adobe Premiere. I am also passionate about
                  building animated websites using three.js blender webgl.
                 
                </div>
              
                <div className="image">
                  <Photo />
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
            }}
                
                className="bord h-full w-12  absolute text-6xl px-10 flex flex-col justify-between  uppercase "
              >
                <div className="mt-20 -rotate-90 mr-4">4</div>
                <div className="mb-20 -rotate-90 mr-4">Experiance</div>
              </div>
              <div className="space-y-10 pl-10 grid grid-rows-2">
                <div className=" mt-10 text-left flex flex-row justify-around pl-20">
                  <div>
                    <h1 className="text-xl ">SKILLS & TOOLS</h1>
                  </div>
                  <div className="flex flex-col justify-around font-extrabold">
                    <h1 className="text-3xl">My Toolbox & Things I Can Do</h1>
                    <h1 className="text-3xl">
                      The skills, tools and technologies I use to bring your
                      products to life:
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <div className="helo">
                    <Image
                      alt="JavaScript"
                      src={"/java.png"}
                      width={150}
                      height={150}
                    />
                    <h1>JavaScript</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="react"
                      src={"/react.png"}
                      width={150}
                      height={150}
                    />
                    <h1>React</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="nextjs"
                      src={"/nextjs.png"}
                      width={150}
                      height={150}
                    />
                    <h1>NextJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="jquery"
                      src={"/jquery.png"}
                      width={150}
                      height={150}
                    />
                    <h1>jQuery</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="Gsap"
                      src={"/Gsap.png"}
                      width={150}
                      height={150}
                    />
                    <h1>Gsap</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="three"
                      src={"/three.png"}
                      width={150}
                      height={150}
                    />
                    <h1>ThreeJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="html"
                      src={"/html.png"}
                      width={150}
                      height={150}
                    />
                    <h1>HTML</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="css"
                      src={"/css.png"}
                      width={150}
                      height={150}
                    />
                    <h1>CSS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="blender"
                      src={"/blender.png"}
                      width={150}
                      height={150}
                    />
                    <h1>Blender</h1>
                  </div>

                  <div className="helo">
                    <Image
                      alt="mongodb"
                      src={"/mongodb.png"}
                      width={150}
                      height={150}
                    />
                    <h1>mongoDB</h1>
                  </div>

                  <div className="helo">
                    <Image
                      alt="nodejs"
                      src={"/nodejs.png"}
                      width={150}
                      height={150}
                    />
                    <h1>NodeJS</h1>
                  </div>
                  <div className="helo">
                    <Image
                      alt="expressjs"
                      src={"/expressjs.png"}
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

export default FirstSection;
