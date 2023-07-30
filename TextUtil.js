import React from 'react'
 import './TextUtil.css'
import { useState } from 'react'
function TextUtil() {
    const [text, setText]=useState("");
  
   const getText=(e)=>{
    setText(e.target.value)
   }

  const changeToUpperCase=()=>{
    setText(text.toUpperCase());
   }

   const copyText=()=>{
    window.navigator.clipboard.writeText(text)
   }
   
  return (
    <div className='container'>
        <div className="box">
            <h1>Text Util</h1>
            <textarea name="input" id="para" cols="30" rows="10" placeholder='Enter Text here.......' onChange={(e)=>getText(e)} value={text}></textarea>

            <button onClick={()=>changeToUpperCase()}>uppercase </button>
            <button onClick={()=>setText(text.toLowerCase())}>Lower case</button>
            <button onClick={()=>setText("")}>clear text </button>
            <button onClick={()=>copyText()}>Copy Text</button>
            <button onClick={()=>setText(text.trim())}>Remove Extra Space</button>
            <h2>Summary of your Text </h2>
            <p>Number of words: {text.split(" ").length}</p>
            <p>number of characters: {text.split("").length}</p>
            <p>Reading Time: {0.4*(text.split(" ").length)} milli seconds</p>
        </div>
    </div>
  )
}

export default  TextUtil;
