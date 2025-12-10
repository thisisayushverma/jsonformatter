"use client"
import React, { useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import FileUpload from '../components/FileUpload'
import ConversionButton from '../components/ConversionButton';
import { transformIntoZod } from '../utils/zod';
import { input } from 'framer-motion/client';

function page() {

    const [json,setJson] = useState<any>("");
    const [output,setOutput] = useState<any>("");


    const handleJsonToZod = ()=>{
        console.log(json);
        
        const parsed = JSON.parse(json);
        transformIntoZod(parsed);
    }


  return (
    <div className='flex gap-2 h-[90vh] m-1'>
      {/* csv conversion */}
      <div className='w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden'>
        <CodeEditor
        value={json}
        setValue={setJson}
        />
      </div>
      {/* middle section for button */}
      <div className='w-[20%] my-4 flex flex-col gap-4'>
        <ConversionButton label='Csv to Zod' onClick={handleJsonToZod}/>

        <FileUpload 
        label='Upload json File'
        accept='.json'
        onFileLoad={(content,file)=> setJson(content)}/>

      </div>
      {/* zod output */}
      <div className='w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative'>
        <CodeEditor value={output} setValue={setOutput}/>
      </div>
    </div>
  )
}

export default page
