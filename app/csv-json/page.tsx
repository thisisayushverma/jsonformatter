"use client"
import React, { useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import ConversionButton from '../components/ConversionButton';
import { csvToJson } from '../utils/csvToJson';
import FileUpload from '../components/FileUpload';
import Download from '../components/Download';

function page() {
    const [inputCsv,setInputCsv] = useState<any>("");
    const [outputJson,setOutputJson] = useState<any>("");

    const handleCsvToJson = ()=>{
        console.log("hello");
        
        try {
            const temp = csvToJson(inputCsv);
            setOutputJson(JSON.stringify(temp, null, 4));
        } catch (error) {
            console.log("error while conversion", error);
            setOutputJson("");    
        }
    }
  return (
    <div className='flex gap-2 h-[90vh] m-1'>
      {/* csv conversion */}
      <div className='w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden'>
        <CodeEditor
        value={inputCsv}
        setValue={setInputCsv}
        language='plaintext'
        />
      </div>
      {/* middle section for button */}
      <div className='w-[20%] my-4 flex flex-col gap-4'>
        <ConversionButton label='Csv to Json' onClick={handleCsvToJson}/>

        <FileUpload 
        label='Upload CSV File'
        onFileLoad={(content,file)=> setInputCsv(content)}/>

        <Download label='Json' filename='data.json' mimeType='application/json' content={outputJson} />

      </div>
      {/* json output */}
      <div className='w-[40%] flex flex-col p-2 rounded-2xl overflow-hidden relative'>
        <CodeEditor value={outputJson} setValue={setOutputJson}/>
      </div>
    </div>
  )
}

export default page
