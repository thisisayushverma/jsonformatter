"use client";
import React, { useEffect, useState } from 'react'
import CodeEditor from '../components/CodeEditor';
import { loadSharedJson } from '../utils/shareLink';

function page() {
    const [value,setValue] = useState<any>("");
    useEffect(()=>{
        setValue(loadSharedJson());
    },[])
  return (
    <div>
      <CodeEditor value={value} setValue={setValue}/>
    </div>
  )
}

export default page
