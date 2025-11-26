"use client";
import { Editor } from "@monaco-editor/react";

export type EditorProps = {
  value: string;
  setValue: (v: string | JSON) => void;
};

function CodeEditor({ value, setValue }: EditorProps) {
  return (
    <div className="flex-1">
      <Editor
        defaultLanguage="json"
        theme="vs-dark"
        value={value}
        onChange={(v: any) => setValue(v || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

export default CodeEditor;
