/* eslint-disable no-unused-vars */
import React from "react";
import { FlipWords } from "./Flipword";
import { motion } from "motion/react";

const Herotext = () => {
  return (
    <div className="z-10 mt-10 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop Views */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: "0.5" }}
        >
          Hi, I'm Avi
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-white "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: "0.8" }}
          >
            Frontend Developer <br />
            Figma Designer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: "1" }}
          >
            <FlipWords
              words={[
                "Development",
                "Design",
                "Responsive",
                "Solutions",
                "Experience",
              ]}
              className="font-black text-white font-medium text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: "1.2" }}
          >
            Your Vision, Our Design
          </motion.p>
        </div>
      </div>
      {/* Mobile Views */}
      <div className="flex flex-col space-y-6 md:hidden px-4 py-8">
        <motion.p className="text-5xl font-semibold text-white">
          Hi, I'm Avi
        </motion.p>

        <motion.div className="space-y-4">
          <motion.p className="text-6xl font-extrabold text-neutral-400">
            Building
          </motion.p>

          <FlipWords
            words={[
              "Development",
              "Design",
              "Responsive",
              "Solutions",
              "Experience",
            ]}
            className="font-black text-white text-7xl"
          />

          <motion.p className="text-5xl font-semibold text-neutral-300">
            Your Vision, Our Design
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Herotext;
