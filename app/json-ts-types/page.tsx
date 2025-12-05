"use client"
import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ConversionButton from "../components/ConversionButton";
import FileUpload from "../components/FileUpload";
import Download from "../components/Download";
import  jsonToTS  from "json-to-ts"



function page() {

    const [json,setJson] = useState<any>("");
    const [tsType,setTsType] = useState<any>("");


    
  const handleConvert = () => {
    try {
      const parsed = JSON.parse(json);
      const interfaces = jsonToTS(parsed);

      const result = interfaces.join("\n\n");
      setTsType(result);
    } catch {
      setTsType("⚠️ Invalid JSON");
    }
  };


  return (
    <div className="flex gap-2 h-[90vh] m-1">
      {/* csv conversion */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden">
        <CodeEditor
          value={json}
          setValue={setJson}
          language="json"
        />
      </div>
      {/* middle section for button */}
      <div className="w-[20%] my-4 flex flex-col gap-4">
        <ConversionButton label="Convert TS types" onClick={handleConvert} />

        <FileUpload
          label="Upload Json File"
          accept=".json"
          onFileLoad={(content, file) => {
            setJson(content);
            console.log("file var in input file", file);
          }}
        />

        <Download
          label="Json"
          filename="data.json"
          mimeType="application/json"
          content={tsType}
        />
      </div>
      {/* json output */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative">
        <CodeEditor value={tsType} setValue={setTsType} />
      </div>
    </div>
  );
}

export default page;
