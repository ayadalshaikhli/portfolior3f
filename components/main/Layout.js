import Footer from "./footer";
import Header from "./header";
import Hero from "../three/Hero";

import IntroSection from "../sections/IntroSection";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>
        {`
          body {
            margin: 0;
            overflow-x: hidden;
            width: 100%;
            background-color: "0E1012";
          }
          section {
            height: 100vh;
            width: 100%;
          }
          #pinContainer {
            height: 100vh;
            width: 100vw;
            overflow: hidden;
          }
          .panel {
            height: 100vh;
            width: 100vw;
            position: absolute;
            text-align: center;
          }
          .bord {
            border: 1px solid #fff;
          }
          .bord-project {
            border: 1px solid #fff;
          }
        `}
      </style>
      {/* <IntroSection/> */}
      <Header />
      <Hero />
    
      <main
        style={{
          backgroundColor: "#0E1012",
        }}
        className=""
      >
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
