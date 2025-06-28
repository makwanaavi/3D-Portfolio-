import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Glob";

const About = () => {
  const grid2Container = useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid:01*/}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3rem] md:left-50 md:inset-y-10 lg:scale[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Avi Makwana</p>
            <p className="subtex">
              A passionate{" "}
              <span className="text-green-500 font-semibold">
                UI/UX Designer
              </span>{" "}
              who loves crafting modern, clean, and user-friendly web and mobile
              interfaces using{" "}
              <span className="text-blue-500 font-semibold">Figma</span>. I
              specialize in bringing ideas to life with creativity, detail, and
              functionality.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 1-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid:02*/}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRAPS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Desing Pattrens"
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%"}}
              text="Desing Principales"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />

             <Card
              style={{ rotate: "30deg", top: "70%", left: "68%" }}
              image = 'assets/logos/csharp-pink.png'
               containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "71%", left: "24%" }}
              image = 'assets/logos/dotnet-pink.png'
               containerRef={grid2Container}
            />

              <Card
              style={{ rotate: "45deg", top: "10%", left: "5%" }}
              image = 'assets/logos/blazor-pink.png'
               containerRef={grid2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">TimeZone</p>
            <p className="subtext">I'm based in Mars, and open to work worldwide</p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
          </figure>
        </div>
        <div className="grid-special-color grid-4"></div>
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
