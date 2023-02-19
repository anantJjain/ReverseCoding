import React, { useState } from 'react'
import axios from 'axios'
import "./Accordion.css"

export default function Py({qid}) {
  const [output, setOutput] = useState(""),
        [input, setInput] = useState({
            "id": qid,
            "input": ""
        });

  const url = `${input}`;

  const giveOutput = ()=> {
    // axios.get(url).then((response) => {
    //   setOutput(response.data)
    //   console.log(response.data)
    // })


    console.log(input  )
  //   axios({
  //     method: "POST",
  //     url: "https://bits-and-pses.centralindia.cloudapp.azure.com/courseview/",
  //     data: input
  // })
  }

  return (
    <div>
      <div className='testcase'>
      <input
        className='input_field'
              type="text"
              placeholder="enter test case"
              onChange={e => {
                setInput({
                  ...input,
                  input: e.target.value,
                });
                console.log(input);
              }}
              name="test-case"
              value={input.input}
            />
        <button
          className='click'
          onClick={giveOutput} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Calculate
        </button>
    </div>

      <p className='output'>
          Output: {output}
      </p>

    </div>
  )
}