"use client";
import * as monaco from "monaco-editor";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const MonacoEditor =dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});


export default function CodeEditor() {
  const { resolvedTheme } = useTheme();

  // useEffect(() => {
  //   // when NextTheme changes -> update Monaco theme
  //   if (resolvedTheme === "dark") {
  //     monaco.editor.setTheme("json-dark");
  //   } else {
  //     monaco.editor.setTheme("json-light");
  //   }
  // }, [resolvedTheme]); // runs every time theme changes

  return <MonacoEditor height="90vh" defaultLanguage="json" theme={resolvedTheme === "dark" ? "vs-dark" : "light"} />;
}
