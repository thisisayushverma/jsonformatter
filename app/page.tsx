"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConversionButton from "./components/ConversionButton";
import CodeEditor from "./components/CodeEditor";
import Copy from "./components/Copy";
import { jsonToCsv } from "./utils/jsonToCsv";
import ThemeSwitch from "./components/ThemeSwitch";
import Link from "next/link";
import Feature from "./components/Feature";
import UrlInput from "./components/UrlInput";
import { handleGetResponse } from "./utils/apiRespone";

export default function Home() {
  const [inputJson, setInputJson] = useState<any>("");
  const [outputJson, setOutputJson] = useState<any>("");
  const [isModal,setIsModal] = useState<boolean>(false);

  const handleJSONFormatter = () => {
    try {
      console.log(inputJson);
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 4);
      setOutputJson(formatted);
    } catch (error) {
      console.log("error while conversion", error);
      setOutputJson("");
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed);
      setOutputJson(formatted);
    } catch (error) {
      console.log("error while conversion", error);
    }
  };

  const downloadCsv = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const result = jsonToCsv(Array.isArray(parsed) ? parsed : [parsed]);
      const blob = new Blob([result], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "output.csv";
      link.click();
    } catch (err) {
      alert("❌ Invalid JSON format");
    }
  };

  useEffect(() => {
    handleJSONFormatter();
  }, [inputJson]);

  return (
    <div className="h-screen w-full p-2 flex flex-col">
      {/* Parent flex container */}
      <div className="flex flex-1 gap-2">
        <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden ">
          <div className="flex bg-highlight justify-end items-center px-2 w-full h-7">
            <div className="cursor-pointer" onClick={()=> setIsModal(prev => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </div>
          </div>
          {
            isModal?
            <UrlInput onsubmit={(url) => handleGetResponse({url})} setInput={setInputJson}/>
            : null
          }
          <CodeEditor value={inputJson} setValue={setInputJson} />
        </div>

        <div className="w-[20%] my-4 flex flex-col gap-4">
          <ConversionButton label="Beautify" onClick={handleJSONFormatter} />

          <ConversionButton label="Minify" onClick={handleMinify} />

          <ConversionButton label="Download CSV" onClick={downloadCsv} />
        </div>

        {/* Editor Box grows automatically */}
        <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative">
          {/* <Image 
          src={copyIcon} 
          alt="copyImage" 
          className="h-6 w-6 absolute z-1 right-5 top-5 cursor-pointer"
          /> */}
          <Feature output={outputJson} />
          <Copy value={outputJson} />
          {/* <Copy value={outputJson} /> */}

          <CodeEditor value={outputJson} setValue={setOutputJson} />
        </div>
      </div>
    </div>
  );
}
