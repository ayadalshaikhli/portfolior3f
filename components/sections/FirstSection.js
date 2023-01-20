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
  //   once: true,
  //   trigger: ".exp",
  //   start: "top top",
  //   end: "bottom bottom",
  //   runBackwards: false,
    
  //   onEnter: () => {
  //     gsap.from(".image", {  
       
  //       x: "50px",
        
  //     });
  //     gsap.to(".image", {
  //       scale: 1,
  //       x: "0",
  //     });
  //   },
  //   onLeaveBack: () => {
     
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
          className=" panel "
        >
          <section className="panel gsap-first-animation  text-white border-l-2 border-white flex flex-col justify-between pt-11  uppercase z-10">
            <ul className=" text-4xl w-full ">
              <li className="border-b-2 flex pl-2 navigationn gsap-first-animation">About</li>
              <li className="border-b-2 flex pl-2 navigationn">APPROACH</li>
              <li className="border-b-2 flex pl-2 navigationn">SELECTED PROJECTS</li>
              <li className="border-b-2 flex pl-2 navigationn">AWARDS & RECOGNITIONS</li>
              <li className="border-b-2 flex pl-2 navigationn">CONTACT US</li>
              <li className="border-b-2 flex pl-2 navigationn">COLOPHON</li>
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
                      src={"https://ayadalshaikhli.github.io/videos/Gsap.png"}
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
                      src={"https://ayadalshaikhli.github.io/videos/expressjs.png"}
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
