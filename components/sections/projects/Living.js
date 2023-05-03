import React from "react";
import Image from "next/image";
import livingmosaicd from "../../../public/ayadd.jpg";


function Living() {
  return (
    <div
      style={{
        backgroundColor: "#0E1012",
        position: "fixed",
        top: "0",
        left: "0",
        width: "50vw",
        height: "100%",
      }}
      id="living"
      className=" mt-10 text-white px-10 py-5 hidden"
    >
      <div
        className=" absolute right-10 top-8"
        onClick={() => {
          document.getElementById("living").classList.toggle("hidden");
        }}
      >
        X
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold pb-1 mr-20">Living Mosaic</h1>
          <div className="">
            <div
              dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="https://ayadalshaikhli.github.io/videos/living.mp4"
          
        />,
      `,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "60vh",
        }}
        className="pt-10 grid  grid-cols-2  gap-x-5"
      >
        <div>
          <h1>Client : Living Mosaic</h1>
          <h1>Project : Studio Living Mosaic</h1>
          <h1>Year : 2022</h1>
        </div>
        <div>
          <h1>Disciplines</h1>
          <h1>Branding</h1>
          <h1>E-commerce</h1>
          <h1>Development</h1>
        </div>
        <div className="w-96">
          Awards & recognitions A A w w w w w w a a r r d d s s S S i i t t e e
          o o f f t t h h e e M M o o n n t t h h N N o o m m i i n n e e e e ↗
          ↗ A A w w w w w w a a r r d d s s S S i i t t e e o o f f t t h h e e
          D D a a y y ↗ ↗ A A w w w w w w a a r r d d s s D D e e v v e e l l o
          o p p e e r r A A w w a a r r d d ↗ ↗ A A w w w w w w a a r r d d s s
          M M o o b b i i l l e e E E x x c c e e l l l l e e n n c c e e ↗ ↗ A
          A w w w w w w a a r r d d s s H H o o n n o o r r s s ↗ ↗ T T h h e e
          F F W W A A o o f f t t h h e e D D a a y y ↗ ↗ C C S S S S D D A A S
          S i i t t e e o o f f t t h h e e D D a a y y ↗ ↗ B B e e h h a a n n
          c c e e I I n n t t e e r r a a c c t t i i v v e e G G a a l l l l e
          e r r y y ↗ ↗
        </div>
        <div className="w-96">
          An otherworldly atmosphere pervades this Berlin-based industrial
          design studio’s e-commerce. Everything on the site circles around the
          atmosphere created by Berlin-based Studio Mærtens’s industrial design
          work. Incorporating the studio’s portfolio, mood boards and visual
          references, we built a solid foundation based on our inspiration. The
          relationship between all the projects is connected by an otherworldly
          post-industrial setting. This project began when founder
        </div>
      </div>
      <div className="mt-40">
        <div className="text-center p-10">
          <a href="https://tataroski.com">Visit live site</a>
        </div>
        <div>
          <div className="">
            <Image
              src={livingmosaicd}
              width="1600"
              height="700"
              objectFit="cover"
              alt="livingmosaicd"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 mt-10">
        <div>
          {" "}
          <Image
            src={livingmosaicd}
            width="1200"
            height="1200"
            objectFit="cover"

          />
        </div>
        <div>
          {" "}
          <Image
            src={livingmosaicd}
            width="1200"
            height="1200"
            objectFit="cover"
          />
        </div>
        <div></div>
        <div>
          <Image
            src={livingmosaicd}
            width="1200"
            height="1200"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={livingmosaicd}
            width="1200"
            height="1200"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={livingmosaicd}
            width="1200"
            height="1200"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/ayadd.jpg)",
          backgroundAttachment: "fixed",
          height: "500px",
        }}
        className="parallax"
      ></div>
      {/* <div className="pt-10 grid  grid-cols-2  gap-y-5 gap-x-5">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/living.mp4"
          
        />,
      `,
            }}
          ></div>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/living.mp4"
          
        />,
      `,
            }}
          ></div>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/living.mp4"
          
        />,
      `,
            }}
          ></div>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/living.mp4"
          
        />,
      `,
            }}
          ></div>
        </div>
      </div> */}
    </div>
  );
}

export default Living;
