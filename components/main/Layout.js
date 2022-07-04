import Footer from "./footer";
import Header from "./header";
import Hero from "../three/Hero";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>
        {`
          body {
            margin: 0;
            overflow-x: hidden;
            width: 100%;
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
      <Header />
      <Hero />
      <main className="bg-black">{props.children}</main>

      <Footer />
    </div>
  );
}
