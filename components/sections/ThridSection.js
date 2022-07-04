import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image"
import tataroski from "../../public/tataroski.JPG";
import deli from "../../public/deli.png";
import crypto from "../../public/Crypto.png";
import recharge from "../../public/recharge.png";
import teatro from "../../public/teatro.png";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function ThirdSection() {
  ScrollTrigger.create({
    trigger: ".product-list",
    start: "top 50%",
    end: "bottom 0%",

    onEnter: () => {
      gsap.to(".body", {
        duration: 1.0,
        backgroundColor: "#fff",
      });
    },

    onLeaveBack: () => {
      gsap.to(".body", {
        duration: 1.0,
        backgroundColor: "#000",
      });
    },
  });
  return (
    <section className=" text-center h-full w-full">
      
      <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
           <section
                  className="panel text-center text-white bg-black z-10"
                 
                >
                  <div className="text-xl flex flex-col ">
                    <div className="grid grid-cols-3 w-full border-b-2 p-2">
                      <div>Tataroski</div>
                      <div> 2020 Branding, E-commerce,Development</div>
                      <div>
                        <div
                          style={{
                            fontSize: "1rem",
                            borderRadius: "100%",
                          }}
                          className=" btn relative bg-white ml-44  w-1 h-1  text-center"
                        >
                          <h1 className=" absolute top-0">View Project</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Image
                        src={tataroski}
                        alt={"hi"}
                        layout="fixed"
                        objectFit="fill"
                        quality={100}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
        </section>
      </Tween>
      <Tween from={{  y:"90%" }} to={{  y:"5%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-blue-500 panel"
        >
          <section
                  className="panel text-center text-white bg-black z-10"
                
                >
                  <div className="text-xl flex flex-col ">
                    <div className="grid grid-cols-3 w-full border-b-2 p-2">
                      <div>Delisioso</div>
                      <div> 2021 E-commerce, Branding, Development, Design</div>
                      <div>
                        <div
                          style={{
                            fontSize: "1rem",
                            borderRadius: "100%",
                          }}
                          className=" btn relative bg-white ml-44    text-center"
                        >
                          <h1 className=" absolute top-0">View Project</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Image
                        src={deli}
                        alt={"hi"}
                        layout="fixed"
                        objectFit="fill"
                        quality={100}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
        </section>
      </Tween>
      <Tween from={{  y:"80%" }} to={{  y:"10%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-red-500 panel"
        >
          <section
                  className="panel text-center text-white bg-black z-10"
               
                >
                  <div className="text-xl flex flex-col ">
                    <div className="grid grid-cols-3 w-full border-b-2 p-2">
                      <div>Crypto</div>
                      <div> 2022 E-commerce,Development</div>
                      <div>
                        <div
                          style={{
                            fontSize: "1rem",
                            borderRadius: "100%",
                          }}
                          className=" btn relative bg-white ml-44  text-center"
                        >
                          <h1 className=" absolute top-0">View Project</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Image
                        src={crypto}
                        alt={"hi"}
                        layout="fixed"
                        objectFit="fill"
                        quality={100}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
        </section>
      </Tween>
      <Tween from={{ y:"85%" }} to={{  y:"15%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-pink-500 panel"
        >
         <section
                  className="panel text-center text-white bg-black z-10"
               
                >
                  <div className="text-xl flex flex-col ">
                    <div className="grid grid-cols-3 w-full border-b-2 p-2">
                      <div>recharge</div>
                      <div> 2020 Branding, E-commerce,Development</div>
                      <div>
                        <div
                          style={{
                            fontSize: "1rem",
                            borderRadius: "100%",
                          }}
                          className="btn relative bg-white ml-44 text-center"
                        >
                          <h1 className=" absolute top-0">View Project</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Image
                        src={recharge}
                        alt={"hi"}
                        layout="fixed"
                        objectFit="fill"
                        quality={100}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </section>
        </section>
      </Tween>
      <Tween from={{  y:"90%" }} to={{  y:"20%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-green-500 panel"
        >
          Ledya
        </section>
      </Tween>
    </section>
  );
}

export default ThirdSection;
