import React from "react";
import { FlipWords } from "./Flipword";

const Herotext = () => {
  return (
    <div className="z-10 mt-10 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium text-white">Hi, I'm Avi</h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-white">
            Frontend Developer <br />
            Figma Designer
          </p>
          <div>
            <FlipWords
              words={[
                "Web Development",
                "UI Design",
                "Responsive Design",
                "Scalable Solutions",
                "User Experience",
              ]}
              className="font-black text-white font-medium text-8xl"
            />
          </div>
          <p className="text-4xl font-medium text-white">
            Your Vision, Our Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herotext;
