import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import FirstSection from "../components/sections/FirstSection";
import SecoundSection from "../components/sections/SecoundSection";
import ThridSection from "../components/sections/ThirdSection";
import ForthSection from "../components/sections/ForthSection";
import ThirdSection from "../components/sections/ThirdSection";
import Hero from "../components/three/Hero";
import Wall from "../components/three/Wall";
import Living from "../components/sections/projects/Living";
import Tataroski from "../components/sections/projects/Tataroski";
import Recharge from "../components/sections/projects/Recharge";
import Delicioso from "../components/sections/projects/Delicioso";
import Zara from "../components/sections/projects/Zara";
import Crypto from "../components/sections/projects/Crypto";
import Teatro from "../components/sections/projects/Teatro";
import FirstSectionMobile from "../components/sections/FirstSectionMobile";
import ForthSectionMobile from "../components/sections/ForthSectionMobile";
import ThirdSectionMobile from "../components/sections/ThirdSectionMobile";



export default function IndexPage() {
  return (
    <>
      <Controller >
        <div className="hidden  md:block">
          <Scene triggerHook="onLeave" duration="1200%" pin={true}>
            <Timeline wrapper={<div id="pinContainer" />}>
              <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                <FirstSection />
              </Tween>
              {/* <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
              <ThirdSection />
            </Tween> */}
              <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                <ForthSection />
              </Tween>
            </Timeline>
          </Scene>

          <Scene triggerHook="onLeave" duration="1200%" pin={true}>
            <Timeline wrapper={<div id="pinContainer" />}>
              <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                <ThirdSection />
              </Tween>
            </Timeline>
          </Scene>
        </div>
        <div className="md:hidden">
          <Scene triggerHook="onLeave" duration="1200%" pin={true}>
            <Timeline wrapper={<div id="pinContainer" />}>
              <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                <FirstSectionMobile />
              </Tween>
              {/* <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
              <ThirdSection />
            </Tween> */}
              {/* <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
              <ForthSectionMobile />
            </Tween> */}
              <Timeline wrapper={<div id="pinContainer" />}>
                <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                  <ThirdSectionMobile />
                </Tween>
              </Timeline>
            </Timeline>
          </Scene>

          {/* <Scene triggerHook="onLeave" duration="1200%" pin={true}>
          
        </Scene> */}
        </div>
      </Controller>

      <Living />
      <Tataroski />
      <Delicioso />
      <Recharge />
      <Zara />
      <Crypto />
      <Teatro />
    </>
    // <div className="flex flex-col items-center justify-center space-y-12">
    //   <Image
    //     src="/team-of-critters.svg"
    //     alt="Four one-eyed aliens playing"
    //     width={576}
    //     height={429.734}
    //     priority
    //   />

    //   <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
    //     Hi! Welcome to your first Next.js site.
    //   </h2>
    // </div>
  );
}
