import Image from "next/image";
import React from "react";
import share from "@/public/share.svg";
import { createShareLink } from "../utils/shareLink";

type featueProps = {
  output: string;
};

function Feature({ output }: featueProps) {

  const handleShare = ()=>{
    const url = createShareLink(output);
    navigator.clipboard.writeText(url);
    alert("Url Copied!!");
  }


  return (
    <div className="flex justify-end px-2 gap-3 bg-highlight w-full h-7 ">
      <div className="cursor-pointer" onClick={handleShare}>
        <svg
          className="w-6 h-6 text-black dark:text-white"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <circle
            cx="128"
            cy="256"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="384"
            cy="112"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="384"
            cy="400"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
          />
        </svg>
      </div>
    </div>
  );
}

export default Feature;
