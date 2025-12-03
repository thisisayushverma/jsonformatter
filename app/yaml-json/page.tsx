"use client"
import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ConversionButton from "../components/ConversionButton";
import FileUpload from "../components/FileUpload";
import Download from "../components/Download";
import { yamlToJson } from "../utils/yamlToJson";

function page() {
  const [inputYaml,setInputYaml] = useState<any>("");
  const [outputJson,setOutputJson] = useState<any>("");

  const handleYamlToJson = ()=>{
    try {
      setOutputJson(yamlToJson(inputYaml));
    } catch (error) {
      alert("Invalid YAML");
      console.log(error);
    }
  }

  return (
    <div className="flex gap-2 h-[90vh] m-1">
      {/* csv conversion */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden">
        <CodeEditor
          value={inputYaml}
          setValue={setInputYaml}
          language="plaintext"
        />
      </div>
      {/* middle section for button */}
      <div className="w-[20%] my-4 flex flex-col gap-4">
        <ConversionButton label="Yaml to Json" onClick={handleYamlToJson} />

        <FileUpload
          label="Upload Yaml File"
          accept=".yaml"
          onFileLoad={(content, file) => {
            setInputYaml(content)
            console.log("file var in input file",file);
            
          }}
        />

        <Download
          label="Json"
          filename="data.json"
          mimeType="application/json"
          content={outputJson}
        />
      </div>
      {/* json output */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative">
        <CodeEditor value={outputJson} setValue={setOutputJson} />
      </div>
    </div>
  );
}

export default page;
