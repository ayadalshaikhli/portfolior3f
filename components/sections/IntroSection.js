import React from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function IntroSection() {
  React.useEffect(() => {
    gsap.to(".intro-top", 3, {
      y: "50%",
      x: "-100%",
      delay: 2,
      display: "none",
      
      ease: Expo.easeOut,
      borderBottomRightRadius: "500px",
      borderBottomLeftRadius: "500px",
      borderTopRightRadius: "500px",
      borderTopLeftRadius: "500px",

    });
    gsap.to(".intro-bottom", 3, {
      y: "-50%",
      x: "100%",
      delay: 2,
      display: "none",
      borderBottomRightRadius: "500px",
      borderBottomLeftRadius: "500px",
      borderTopRightRadius: "500px",
      borderTopLeftRadius: "500px",
      
      ease: Expo.easeOut,
    });

    gsap.to(".text-mosaicc", 2, {
      opacity: 1,
      
      stagger: 0.2,
    });
    gsap.to(".intro-container", 1, {
      display: "none",
      delay: 3,
    });
    gsap.to(".fulltext", 1.2, {
      display: "none",
      delay: 1,
    });
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "100",
      }}
      className="intro-container"
    >
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#fff",
        }}
        className="intro-top"
      ></div>
      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#fff",
        }}
        className="intro-bottom"
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="text-9xl text-black uppercase font-thin fulltext "
      >
      
        <span className="text-sec">AL</span>
        <span className="text-mosaicc opacity-0">S</span>
        <span className="text-mosaicc opacity-0">H</span>
        <span className="text-mosaicc opacity-0">A</span>
        <span className="text-mosaicc opacity-0">I</span>
        <span className="text-mosaicc opacity-0">K</span>
        <span className="text-mosaicc opacity-0">H</span>
        <span className="text-mosaicc opacity-0">L</span>
        <span className="text-mosaicc opacity-0">I</span>
      </div>
    </div>
  );
}

export default IntroSection;
