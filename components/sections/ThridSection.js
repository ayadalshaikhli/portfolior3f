import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
          className="bg-yellow-500 panel"
        >
          Ledya
        </section>
      </Tween>
      <Tween from={{ x: "100%", y:"90%" }} to={{ x: "0%", y:"10%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-blue-500 panel"
        >
          Ledya
        </section>
      </Tween>
      <Tween from={{ x: "100%", y:"80%" }} to={{ x: "0%", y:"20%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-red-500 panel"
        >
          Ledya
        </section>
      </Tween>
      <Tween from={{ x: "100%", y:"70%" }} to={{ x: "0%", y:"30%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className="bg-pink-500 panel"
        >
          Ledya
        </section>
      </Tween>
      <Tween from={{ x: "100%", y:"60%" }} to={{ x: "0%", y:"40%" }}>
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
