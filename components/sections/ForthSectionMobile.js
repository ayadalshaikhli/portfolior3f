import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function ForthSectionMobile() {
  return (
    <>
   <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "1",
            backgroundColor: "#0E1012",
          }}
          className="bg-black panel text-white">
          <section
            id="about"
            className="about panel relative text-white flex pt-10 z-10">
                <div style={{
              border: "1px solid #fff",
            }} className="bord h-full w-12 absolute text-2xl  px-5  flex flex-col justify-between  uppercase ">
              <div className="mt-20 -rotate-90">5</div>
              <div className="mb-20 -rotate-90 flex gap-4"><span>WORK</span> <span>Experiance</span></div>
            </div>
            <div className=" pl-10 grid grid-rows-4 text-left mt-5 ml-5">
              <div className="grid grid-rows-2 ">
                <p className="w-[75%] text-sm text-justify ">
                  Results-driven full stack web developer with (X) years of experience building elegant, user-friendly applications from end-to-end. Proficient in JavaScript, React, Node.js, HTML/CSS and relational databases. Collaborative team player with a passion for clean code, optimization, and learning new technologies.
                </p>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col space-y-2 text-xl ">
                  <div>Tech2u</div>
                  <div className="text-xs">Full-Stack Web Developer</div>
                  <div className="text-xs w-[75%] ">Created React Native apps integrating Stripe APIs and Firebase.
                    Developed mobile apps and ecommerce sites with Shopify and React.
                    Built PHP incentive and admin systems.
                    Created fulfillment and shipping apps using APIs.
                    Optimized websites for performance.</div>
                  <div className="font-extrabold">1</div>
                </div>
                <div className="flex flex-col space-y-2 text-xl ">
                  <div>UpWork</div>
                  <div className="text-xs">Full-Stack Web Developer</div>
                  <div className="text-xs w-[75%] ">Developed a Zara website mockup with 99% performance and 100% SEO using Next.js and Shopify.
                    Created Halloween and phone recharge websites with Javascript, Shopify, NextJS, Three.js, Tailwind, Photoshop, GSAP, and Blender.
                    Helped launch multiple Shopify stores with custom themes.
                  </div>
                  <div className="font-extrabold">2</div>
                </div>
                <div className="flex flex-col space-y-2 text-xl ">
                  <div>Facebook</div>
                  <div className="text-xs">Content Creator</div>
                  <div className="text-xs w-[75%] ">Produced tech tutorials and gaming live streams.
                    Grew YouTube channel to 145k followers and 6500 subscribers.
                    15M+ views and 20k shares.
                    Proficient with: Photoshop, Premiere, Illustrator, OBS Studio, Discord.
                    Soft skills: adaptability, flexibility, problem solving, loyalty building.</div>
                  <div className="font-extrabold">3</div>
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
          className="bg-black panel text-white">
          <section
            id="about"
            className="about panel relative text-white flex pt-10 z-10">
               <div style={{
              border: "1px solid #fff",
            }} className="bord h-full w-12 absolute text-2xl  px-5  flex flex-col justify-between  uppercase ">
              <div className="mt-20 -rotate-90">5</div>
              <div className="mb-20 -rotate-90 flex gap-4"><span>SELECTED</span> <span>PROJECT</span></div>
            </div>
            <div className=" w-full h-full ml-12">
              <Image
                src="https://ayadalshaikhli.github.io/videos/Capture.JPG"
                alt="Picture of the author"
                layout="responsive"
                objectFit="cover"
                width={1000}
                height={2400}
                className="rounded-2xl
                 
                "
              />
            </div>

          </section>
        </section>
      </Tween>

  </>
  )
}

export default ForthSectionMobile