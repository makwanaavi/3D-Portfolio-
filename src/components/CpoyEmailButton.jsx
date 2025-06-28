/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setcopied] = useState(false);
  const email = "Your Email Address";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setcopied(true); // Spelling correct kiya

    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{y:-5}}
      whileTap={{scale:1.5}}
      className="relative px-1 py-4 text-sm text-center rounded-full bg-primary w-[12rem] cursor-pointer"
    >
        <AnimatePresence mode="wait">
      {copied ? (
        <motion.p
          className="flex items-center justify-center gap-2"
          key="copied"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <img src="assets/copy-done.svg" alt="Copy-done" className="w-5" />
          Email has Copied
        </motion.p>
      ) : (
        <motion.p
          className="flex item-center justify-center gap-2"
          key="copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <img src="assets/copy.svg" alt="Copy Icon" className="w-5" />
          Copy Email Address
        </motion.p>
      )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
