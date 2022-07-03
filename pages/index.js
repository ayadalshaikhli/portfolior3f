
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import FirstSection from "../components/sections/FirstSection";
import SecoundSection from "../components/sections/SecoundSection";
import ThridSection from "../components/sections/ThridSection";
import ForthSection from "../components/sections/ForthSection";
import ThirdSection from "../components/sections/ThridSection";


export default function IndexPage() {
  return (
    <>
      <Controller>
        <Scene triggerHook="onLeave" duration="400%" pin={true}>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
              <FirstSection />
            </Tween>
            <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
              <ThirdSection />
            </Tween>
            <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
              <ForthSection />
            </Tween>
          </Timeline>
        </Scene>
        <Scene triggerHook="onLeave" duration="400%" pin={true}>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
              <SecoundSection />
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
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
