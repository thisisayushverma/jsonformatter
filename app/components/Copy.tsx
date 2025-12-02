"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import copyIcon from "@/public/copy.svg";
import checkIcon from "@/public/check.svg";
import { motion } from "framer-motion";

export type copyProps = {
  value: string | JSON;
};

function Copy({ value = "" }: copyProps) {
  const [isCopy, setIsCopy] = useState(false);
  const handleCopy = async () => {
    if (isCopy === false) {
      await navigator.clipboard.writeText(value.toString());
      setIsCopy((prev) => !prev);
    }
  };

  useEffect(() => {
    setIsCopy(false);
    console.log("i call");
  }, [value]);
  return (
    <div className="absolute h-6 w-6 right-5 top-9 z-10" onClick={handleCopy}>
      {!isCopy ? (
        <motion.div
          key="copy"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={copyIcon} alt="copy" />
        </motion.div>
      ) : (
        <motion.div
          key="copied"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={checkIcon} alt="copied" />
        </motion.div>
      )}
    </div>
  );
}

export default Copy;
