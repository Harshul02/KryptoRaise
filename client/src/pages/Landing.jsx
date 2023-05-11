import React from "react";
import Land4 from "./land4.png";
import Logo from "./krypti.png";
import "animate.css/animate.min.css";
import Typist from "react-typist";
import Benefits from "./LandingComponents/Benefits";
import Vision from "./LandingComponents/Vision";
import Creator from "./LandingComponents/Creator";
import Footer from "./LandingComponents/Footer";


export default function Landing({onHide}) {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%), url(${Land4})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    minHeight: "100vh",
  };
  const logoStyle = {
    height: "90px",
    width: "auto",
    background: `url(${Logo}) no-repeat`,
    backgroundSize: "contain",
    top: "0%",
    left: "50%",
    zIndex: "1",
    marginLeft: "25px",
  };

  return (
    <>
    <div style={backgroundImageStyle}>
      <div style={logoStyle}></div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col ml-20 w-full mb-12 animate_animated animate_fadeIn">
            <div className="flex flex-col w-full mb-12">
              <h3 className="sm:text-5xl text-9xl font-bold title-font mb-4 text-white " style={{ fontWeight:900 }}>
                Revolutionizing <span style={{ color: "#60F", fontWeight:900 }}>Crowdfunding</span> with <span style={{ color: "#60F", fontWeight:900 }}>Blockchain</span> !
              </h3>
              <h1
                className="lg:w-2/3 text-3xl  font-bold leading-relaxed text-white"
                style={{
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textShadow: "2px 2px #000",
                }}
              >
                Say Goodbye to Intermediaries
              </h1>
              <h1
                className="lg:w-2/3 text-3xl  font-bold leading-relaxed text-white"
                style={{
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textShadow: "2px 2px #000",
                }}
              >              <Typist avgTypingDelay={80} cursor={{ hideWhenDone: true }}>

                And Hello to {" "}
                  <span style={{ color: "#60F", fontWeight:900,fontSize:"35px" }}>KryptoRaise!</span>
                  <Typist.Backspace count={12} delay={1000} />
                  <span style={{ color: "#60F", fontWeight: 900,fontSize:"35px" }}>KryptoRaise!</span>

                  </Typist>

                </h1>
              <div className="flex mt-8">
              <button className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" onClick={onHide}>
  Get Started!
</button>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className=" mt-[-100px]">
    <div className="container align-center mt-[-100px]">
      <Benefits />
      <hr />
      <Vision />
      <hr />
      <Creator />
      <hr />
      <Footer />
      </div>
      </div>
      </>
  );
}