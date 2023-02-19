import React, { useEffect } from "react";
import "./Accordion.css";
import Winques from './Windows_question.json'
import LMques from './Linux&Mac_Question.json'
import { Link, NavLink } from "react-router-dom"
import Latex from "react-latex";
import DelayedStart from "./DelayedStart";
import Py from "./Py";

const Accordion = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  if (props.os === "linux") {
    var loc = "Linux/"
    var file = LMques
    console.log(loc)
  }
  else if (props.os === "macos") {
    var loc = "Macos/"
    var file = LMques
    console.log(loc)
  } else {
    var loc = "Windows/"
    var file = Winques
    console.log(loc)
  }



  return (

    <div className="accordion-js">
      {!props.display ? <h1 className="texttrue"><DelayedStart /></h1> :
        <div>
          <div style={{ textAlign: "center" }} className="questions-title">Questions</div>

          <div class="row">
            <div class="col">
              <div class="tabs">

                {
                  file.map((questions, key) => (

                    <div class="tab">
                      <input type="checkbox" className="input" id={questions.id} />

                      <label class="tab-label" for={questions.id} style={{ fontSize: "1.2rem" }}>
                        Question {questions.number}
                      </label>
                      <div class="tab-content">
                        <div className="navigators">
                          <div className="fakeButtons fakeClose"></div>
                          <div className="fakeButtons fakeMinimize"></div>
                          <div className="fakeButtons fakeZoom"></div>
                        </div>
                        <div className="prompt">
                        <br />
                        <p className="line1"><Latex displayMode={false}>{questions.description}</Latex></p>
                        <div className="output"><Py qid={questions.id} /></div>

                        <hr />
                       <p className="alternate">Alternate Method</p>
                        <div className="btn_container">
                          <Link className="btn backtohome" to={"/assets/" + loc + questions.download} target="_blank" download>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Download Link</Link>
                          <br />
                          <br />

                          <a href="#" className='btn backtohome' id={questions.id} onClick={(e) => { window.open(questions.HRlink) }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            HackerRank
                          </a></div>
                          </div> 
                      </div>
                    </div>
                  ))
                }

                <div id="btn_container">
                  <div className="accordbuttons">
                    <NavLink to="/" className='btn backtohomereal backtohome' style={{ marginTop: "2rem", alignSelf: "left" }} id="HomeButton">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Back to Home
                    </NavLink>

                    <Link to={{ pathname: "https://docs.google.com/document/d/1BaZVAFCw0ZUW8zvN7_AB706xvcmUFCEHJU6UpJ063Fs/edit?usp=sharing" }} target="_blank" className='btn backtohomereal backtohome instructions' style={{ marginTop: "2rem", alignSelf: "right" }} id="HomeButton">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Instructions
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      }
    </div>
  );
};

export default Accordion;

