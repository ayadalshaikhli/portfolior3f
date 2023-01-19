import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function ForthSection() {
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
            <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase">
              <div className="mt-20 -rotate-90">5</div>
              <div className="mb-20 -rotate-90 flex gap-4">
                <span>WORK</span> <span>Experiance</span>
              </div>
            </div>
            <div className=" pl-10 grid grid-rows-3 text-left mt-20">
              <div className="grid grid-rows-2 ml-[900px]">
                <p className="w-1/2 text-2xl text-justify">
                  Results-driven full stack web developer with (X) years of experience building elegant, user-friendly applications from end-to-end. Proficient in JavaScript, React, Node.js, HTML/CSS and relational databases. Collaborative team player with a passion for clean code, optimization, and learning new technologies.
                </p>
              </div>
              <div className="flex mt-32">
                <div className="flex flex-col space-y-3 text-2xl ml-[40rem] mt-10">
                  <div>Tech2u</div>
                  <div>Full-Stack Web Developer</div>
                  <div className="text-sm w-1/2 text-justify">Created React Native apps integrating Stripe APIs and Firebase.
                    Developed mobile apps and ecommerce sites with Shopify and React.
                    Built PHP incentive and admin systems.
                    Created fulfillment and shipping apps using APIs.
                    Optimized websites for performance and SEO.</div>
                  <div>1</div>
                </div>
                <div className="flex flex-col space-y-3 text-2xl mt-10">
                  <div>UpWork</div>
                  <div>Full-Stack Web Developer</div>
                  <div className="text-sm w-1/2 text-justify">Created React Native apps integrating Stripe APIs and Firebase.
                    Developed mobile apps and ecommerce sites with Shopify and React.
                    Built PHP incentive and admin systems.
                    Created fulfillment and shipping apps using APIs.
                    Optimized websites for performance and SEO.</div>
                  <div>2</div>
                </div>
                <div className="flex flex-col space-y-3 text-2xl mt-10">
                  <div>Facebook</div>
                  <div>Content Creator</div>
                  <div className="text-sm w-1/2 text-justify">Created React Native apps integrating Stripe APIs and Firebase.
                    Developed mobile apps and ecommerce sites with Shopify and React.
                    Built PHP incentive and admin systems.
                    Created fulfillment and shipping apps using APIs.
                    Optimized websites for performance and SEO.</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Tween>

    </>
  )
}

export default ForthSection