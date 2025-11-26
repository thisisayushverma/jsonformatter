"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConversionButton from "./components/ConversionButton";
import CodeEditor from "./components/CodeEditor";
import Copy from "./components/Copy";

export default function Home() {
  const [inputJson, setInputJson] = useState<any>("");
  const [outputJson, setOutputJson] = useState<any>("");

  const handleJSONFormatter = () => {
    try {
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

  useEffect(() => {
    handleJSONFormatter();
  }, [inputJson]);

  return (
    <div className="h-screen w-full p-2 flex flex-col">
      <h1 className="text-2xl font-bold mb-3">JSON Formatter</h1>

      {/* Parent flex container */}
      <div className="flex flex-1 gap-2">
        <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden ">
          <CodeEditor value={inputJson} setValue={setInputJson} />
        </div>

        <div className="w-[20%] my-4 flex flex-col gap-4">
          <ConversionButton label="Beautify" onClick={handleJSONFormatter} />

          <ConversionButton label="Minify" onClick={handleMinify} />
        </div>

        {/* Editor Box grows automatically */}
        <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative">
          {/* <Image 
          src={copyIcon} 
          alt="copyImage" 
          className="h-6 w-6 absolute z-1 right-5 top-5 cursor-pointer"
          /> */}

          <Copy value={outputJson} />

          <CodeEditor value={outputJson} setValue={setOutputJson} />
        </div>
      </div>
    </div>
  );
}
