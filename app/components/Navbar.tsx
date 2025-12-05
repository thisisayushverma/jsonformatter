"use client";
import React from "react";
import Link from "next/link";
import ConversionButton from "./ConversionButton";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex justify-between items-center h-16 px-4">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold tracking-wide">JSON Formatter</h1>
      </Link>
      <div className="flex gap-4  items-center ">
        <Link href={"/xml-json"}>
            <ConversionButton
              label="Xml to Json"
              className={`
              ${
                pathName === "/xml-json"
                  ? "bg-[#595858] text-[#e7e5e5] border border-gray-500 scale-105 shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } px-5 py-2 rounded-lg font-medium text-lg transition-all duration-200`}
            />
          </Link>

        <Link href={"/yaml-json"}>
          <ConversionButton
            label="Yaml to Json"
            className={`
            ${
              pathName === "/yaml-json"
                ? "bg-[#595858] text-[#e7e5e5] border border-gray-500 scale-105 shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } px-5 py-2 rounded-lg font-medium text-lg transition-all duration-200`}
          />
        </Link>

        <Link href={"/csv-json"}>
          <ConversionButton
            label="CSV to JSON"
            className={`
            ${
              pathName === "/csv-json"
                ? "bg-[#595858] text-[#e7e5e5] border border-gray-500 scale-105 shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } px-5 py-2 rounded-lg font-medium text-lg transition-all duration-200`}
          />
        </Link>

        <Link href={"/json-schema-validator"}>
          <ConversionButton
            label="Validate Json Schema"
            className={`
            ${
              pathName === "/json-schema-validator"
                ? "bg-[#595858] text-[#e7e5e5] border border-gray-500 scale-105 shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } px-5 py-2 rounded-lg font-medium text-lg transition-all duration-200`}
          />
        </Link>

        <ThemeSwitch />
        
      </div>
    </div>
  );
}

export default Navbar;
