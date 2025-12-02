import React from 'react'

interface downloadButtonProps {
    label:string;
    className?:"";
    content:string;
    filename?:string;
    mimeType?: string;     
} 

function Download({
    label="Json",
    className="",
    content,
    filename="file.txt",
    mimeType="text/plain",
}:downloadButtonProps) {

    const handleDownload = ()=>{
        if(content=== "" || content == null ){
            alert("output file must not be empty");
            return;
        }
        const blob = new Blob([content],{type:mimeType});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    
        URL.revokeObjectURL(url);
    }
  return (
    <button 
        onClick={handleDownload}
    className={`px-4 py-2 rounded-md font-medium bg-green-600 hover:bg-green-700 text-white transition ${className}`}>
        {`Download ${label} `}
    </button>
  )
}

export default Download
