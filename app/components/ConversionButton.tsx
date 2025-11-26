import React from 'react'

export type ConversionBtnProps  =  {
    label:string;
    onClick?: ()=> void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?:boolean
}

function ConversionButton({label,onClick,type,className,disabled=false}:ConversionBtnProps) {
  return (
      <button className={`bg-[#1e1e1e] w-full h-10 text-2xl font-medium cursor-pointer ${className}`} disabled={disabled} type={type} onClick={onClick}>{label}</button>
  )
}

export default ConversionButton
