import React from 'react'
import { useEffect, useState } from 'react';
import script from '../components/py.py';
import "./Accordion.css";


export default function Py() {
    const runScript = async (code) => {
      const pyodide = await window.loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/"
      });
    
      return await pyodide.runPythonAsync(code);
    }
  const [output, setOutput] = useState("(loading...)");
  const [click, setClick] = useState(0)
  const [para, setPara] = useState(0)
  const [argument, setArgument] = useState(`
  def func():
      return (
         'enter a number to be doubled:' 
      )
  
  func()
  `)

  useEffect(()=>{
    setArgument(`def func():
    return (
      2*${para}
    )

func()`)
  },[para])

  useEffect(() => {
    const run = async () => {
      const scriptText = ((argument));
    //   const scriptText = await (await fetch(script)).text();
      console.log(scriptText);
      const out = await runScript(scriptText);
      setOutput(out);
    }
    run();
    console.log('working')
  }, [click]);


  return (
    <div className="">
      <p className='output'>
        {output}
      </p>
        <input
        className='input'
              type="text"
              placeholder="enter your test case"
              onChange={(e) => {
                setPara(e.target.value)
                console.log(para)}
              }
              name="test-case"
              value={para}
            />
        <button
          className='btn backtohomereal backtohome'
          onClick={()=>
             {setClick(click+1)
             console.log(click)}
             }>click</button>
  </div>
);
}


   