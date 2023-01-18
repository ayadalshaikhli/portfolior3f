import React, { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import tataroski from "../../public/tataroski.JPG";
import deli from "../../public/deli.png";
import crypto from "../../public/cryptoo.png";
import recharge from "../../public/rechargee.png";
import livingmosaic from "../../public/livingmosaic.JPG";
import teatro from "../../public/teatro.png";
import zara from "../../public/zara.png";
import Link from "next/link";
import {
  IconName,
  FaFacebookF,
  FaPaperclip,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});

function ThirdSection() {

  return (
    <section className=" text-center h-full w-full text-white">
      <Tween from={{ y: "70%" }} to={{ y: "0%" }}>
        <section
          style={{
            zIndex: "2",
            backgroundColor: "#0E1012",
          }}
          className=" panel broder-2    text-center h-full w-full text-white"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white bg-black z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>Living Mosaic</div>
                <div> 2022 Branding, Agancy ,Development</div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      borderRadius: "100%",
                    }}
                    className=" btn relative bg-white ml-44  w-1 h-1  text-center"
                  >
                    <a
                      onClick={() => {
                        document
                          .getElementById("living")
                          .classList.toggle("hidden");

                        document.getElementById("zara").classList.add("hidden");
                        document
                          .getElementById("tataroski")
                          .classList.add("hidden");
                        document.getElementById("deli").classList.add("hidden");
                        document
                          .getElementById("crypto")
                          .classList.add("hidden");
                        document
                          .getElementById("recharge")
                          .classList.add("hidden");
                        document
                          .getElementById("teatro")
                          .classList.add("hidden");
                      }}
                      className=" absolute top-0 cur"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="https://ayadalshaikhli.github.io/videos/livingmosaic.JPG"
                  alt={"hi"}
                  objectFit="fill"
                  height={649}
                  width={1920}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>

      <Tween from={{ y: "75%" }} to={{ y: "5%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white  z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>Tataroski</div>
                <div> 2021 E-commerce, Branding, Development, Design</div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      borderRadius: "100%",
                    }}
                    className=" btn relative bg-white ml-44    text-center"
                  >
                    <h1
                      onClick={() => {
                        document
                          .getElementById("tataroski")
                          .classList.toggle("hidden");
                        document
                          .getElementById("crypto")
                          .classList.add("hidden");
                        document
                          .getElementById("recharge")
                          .classList.add("hidden");
                        document
                          .getElementById("teatro")
                          .classList.add("hidden");
                        document
                          .getElementById("living")
                          .classList.add("hidden");

                        document.getElementById("zara").classList.add("hidden");

                        document.getElementById("deli").classList.add("hidden");
                      }}
                      className=" absolute top-0"
                    >
                      View Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                    src="https://ayadalshaikhli.github.io/videos/tataroski.JPG"
                    alt={"hi"}
                    objectFit="fill"
                    height={649}
                    width={1920}
                    quality={100}
                    loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ y: "80%" }} to={{ y: "10%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white bg-black z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>Delicioso</div>
                <div> 2021 E-commerce,Development</div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      borderRadius: "100%",
                    }}
                    className=" btn relative bg-white ml-44  text-center"
                  >
                    <h1
                      onClick={() => {
                        document
                          .getElementById("deli")
                          .classList.toggle("hidden");
                        document
                          .getElementById("living")
                          .classList.add("hidden");
                        document
                          .getElementById("tataroski")
                          .classList.add("hidden");
                        document.getElementById("zara").classList.add("hidden");
                        document
                          .getElementById("crypto")
                          .classList.add("hidden");
                        document
                          .getElementById("recharge")
                          .classList.add("hidden");
                        document
                          .getElementById("teatro")
                          .classList.add("hidden");
                      }}
                      className=" absolute top-0"
                    >
                      View Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="https://ayadalshaikhli.github.io/videos/deli.png"
                  alt={"hi"}
                  objectFit="fill"
                  height={649}
                  width={1920}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ y: "85%" }} to={{ y: "15%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white bg-black z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>Recharge</div>
                <div> 2020 Branding, E-commerce,Development</div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      borderRadius: "100%",
                    }}
                    className="btn relative bg-white ml-44 text-center"
                  >
                    <h1
                      onClick={() => {
                        document
                          .getElementById("recharge")
                          .classList.toggle("hidden");
                        document
                          .getElementById("living")
                          .classList.add("hidden");
                        document
                          .getElementById("tataroski")
                          .classList.add("hidden");
                        document.getElementById("zara").classList.add("hidden");
                        document
                          .getElementById("crypto")
                          .classList.add("hidden");
                        document
                          .getElementById("teatro")
                          .classList.add("hidden");
                        document.getElementById("deli").classList.add("hidden");
                      }}
                      className=" absolute top-0"
                    >
                      View Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="https://ayadalshaikhli.github.io/videos/rechargee.png"
                  alt={"hi"}
                  objectFit="fill"
                  height={649}
                  width={1920}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ y: "90%" }} to={{ y: "20%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white bg-black z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>ZARA</div>
                <div> 2022 Branding, E-commerce,Development</div>
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
                   src="https://ayadalshaikhli.github.io/videos/zara.png"
                   alt={"hi"}
                   objectFit="fill"
                   height={649}
                   width={1920}
                   quality={100}
                   loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ y: "95%" }} to={{ y: "25%" }}>
        <section
          style={{
            zIndex: "2",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel text-center text-white bg-black z-10"
          >
            <div className="text-xl flex flex-col ">
              <div className="grid grid-cols-3 w-full border-b-2 p-2">
                <div>Teatro</div>
                <div> 2022 Branding, E-commerce,Development</div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      borderRadius: "100%",
                    }}
                    className="btn relative bg-white ml-44 text-center"
                  >
                    <h1
                      onClick={() => {
                        document
                          .getElementById("teatro")
                          .classList.toggle("hidden");
                        document
                          .getElementById("living")
                          .classList.add("hidden");
                        document
                          .getElementById("tataroski")
                          .classList.add("hidden");
                        document.getElementById("deli").classList.add("hidden");
                        document
                          .getElementById("crypto")
                          .classList.add("hidden");
                        document
                          .getElementById("recharge")
                          .classList.add("hidden");
                        document.getElementById("zara").classList.add("hidden");
                      }}
                      className=" absolute top-0"
                    >
                      View Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="https://ayadalshaikhli.github.io/videos/teatro.png"
                  alt={"hi"}
                  objectFit="fill"
                  height={649}
                  width={1920}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </section>
      </Tween>
      <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
        <section
          style={{
            zIndex: "2",

            backgroundColor: "#0E1012",
          }}
          className=" panel"
        >
          <section
            style={{
              backgroundColor: "#0E1012",
            }}
            className="panel  pt-10  text-white border-l-2 flex  overflow-hidden z-50"
          >
            <div className="bord h-full w-12 absolute text-6xl z-50 px-10  flex flex-col justify-between  uppercase">
              <div className="mt-20 -rotate-90">24</div>
              <div className="mb-20 -rotate-90 flex gap-4">
                <span>CONTACT</span> <span>ME</span>
              </div>
            </div>
        

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "53%",
                transform: "translate(-50%, -50%)",
              }}
              className="text-center  text-7xl"
            >
              <div>
                <h1>
                  Lets Build
                  <span className=" font-extrabold">
                    the next <br /> big thing
                  </span>
                  togather
                </h1>
              </div>
              <div className="mt-10">
                <a
                  className="contact__button--container--mobile mobile__only"
                  href="mailto:ayadalshaikhli@gmail.com"
                >
                  <span>KEEP IN TOUCH</span>
                </a>
              </div>
              <div>
                <div className="flex justify-around w-full">
                  <div className="text-2xl ">
                    <h1>Lets be internet BFFS</h1>
                    <div className="social flex gap-5 pt-5">
                      <a href="#contact">
                        <i className="fab fas fa-phone-alt"></i>
                      </a>
                      <a href="https://www.instagram.com/ayadalshaikly/">
                        <FaInstagram className="fab" />
                      </a>
                      <a href="https://www.facebook.com/ayad.m.alshaikhli/">
                        <FaFacebookF className="fab" />
                      </a>
                      <a href="https://www.linkedin.com/in/ayad-alshaikhli-815599208/">
                        <FaLinkedin className="fab" />
                      </a>
                      <a href="https://github.com/ayadalshaikhli">
                        <FaGithub className="fab" />
                      </a>
                      <a download href="data/ayadalshaikhli.pdf">
                        <FaPaperclip className="fab" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Tween>
    </section>
  );
}

export default ThirdSection;
