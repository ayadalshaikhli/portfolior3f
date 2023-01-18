import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
        }}
        className="bg-black panel text-white"
      >
        Manal
      </section>
    </Tween>

  </>
  )
}

export default ForthSectionMobile