"use client";
import React, { useState, useRef } from "react";

interface FileUploadProps {
  label?: string;
  accept?: string;
  className?: string;
  onFileLoad: (content: string, file: File) => void;
}

function FileUpload({
  label = "Upload File",
  accept = ".csv,.json",
  className = "",
  onFileLoad,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    const text = await file.text();
    onFileLoad(text, file); // send file content to parent
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition
        ${isDragging ? "bg-gray-200 border-gray-500" : "bg-uploadFileClr"}
        ${className}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
      }}
    >
      📁 <p className="font-semibold">{label}</p>
      <p className="text-sm text-gray-500">Drag & drop or click to upload</p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}

export default FileUpload;
