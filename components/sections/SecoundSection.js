import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function SecoundSection() {
  return (
    <section className="bg-pink-500 text-center panel">
        <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="bg-red-500">
                green
            </section>
        </Tween>

    </section>
  )
}

export default SecoundSection