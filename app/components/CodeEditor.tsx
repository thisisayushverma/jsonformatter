"use client";
import dynamic from "next/dynamic";

const MonacoEditor =dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export type EditorProps = {
  value: string;
  setValue: (v: string | JSON) => void;
};

function CodeEditor({ value, setValue }: EditorProps) {
  return (
    <div className="flex-1">
      <MonacoEditor
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
