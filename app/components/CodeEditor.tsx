"use client";
import * as monaco from "monaco-editor";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export type EditorProps = {
  value: string;
  setValue: (v: string | JSON) => void;
  language? : string 
};

export default function CodeEditor({ value, setValue,language="json" }: EditorProps) {
  const { resolvedTheme } = useTheme();

  // useEffect(() => {
  //   // when NextTheme changes -> update Monaco theme
  //   if (resolvedTheme === "dark") {
  //     monaco.editor.setTheme("json-dark");
  //   } else {
  //     monaco.editor.setTheme("json-light");
  //   }
  // }, [resolvedTheme]); // runs every time theme changes

  return (
    <MonacoEditor
      height="90vh"
      value={value}
      onChange={(v: any) => setValue(v || "")}
      language={language}
      theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
    />
  );
}
