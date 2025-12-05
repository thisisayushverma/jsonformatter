"use client";
import React, { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ConversionButton from "../components/ConversionButton";
import { validateJson } from "../utils/validateJson";

function page() {
  const [schema, setSchema] = useState<any>("");
  const [json, setJson] = useState<any>("");
  const [result, setResult] = useState("");

  const handleValidateJson = () => {
    try {
      const parsedSchema = JSON.parse(schema);
      const parsedJson = JSON.parse(json);
      const validation = validateJson(parsedSchema, parsedJson);

      if (validation.valid) {
        setResult("✅ JSON is valid against schema.");
      } else {
        setResult(
          validation.errors
            .map((err) => `❌ ${err.instancePath || "/"} ${err.message}`)
            .join("\n")
        );
      }
    } catch {
      setResult("⚠️ Invalid JSON format in editor.");
    }
  };

  return (
    <div className="flex gap-2 h-[90vh] m-1">
      {/* csv conversion */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden">
        <CodeEditor value={schema} setValue={setSchema} language="plaintext" />
      </div>
      {/* middle section for button */}
      <div className="w-[20%] my-4 flex flex-col gap-4">
        <ConversionButton label="Validate Json" onClick={handleValidateJson} />

        {result && (
          <pre className="bg-gray-900 text-green-300 p-3 rounded whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </div>
      {/* json output */}
      <div className="w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative">
        <CodeEditor value={json} setValue={setJson} />
      </div>
    </div>
  );
}

export default page;
