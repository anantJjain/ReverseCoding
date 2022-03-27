import React, {useEffect} from "react";
import "./Accordion.css";
import question from './question.json'
import {Link, NavLink} from "react-router-dom"

const Accordion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="accordion-js">
      <div style={{textAlign:"center"}} className="questions-title">Questions</div>
      <div class="row">
        <div class="col">
          <div class="tabs">
            
            {
              question.map((questions,key) => (
                <div class="tab">
              <input type="checkbox" id={questions.id} />
              <label class="tab-label" for={questions.id} style={{fontSize:"1.2rem"}}>
              Question {questions.number}
              </label>
              <div class="tab-content">
                {questions.description}
                <br/>
                <br/>
                {/* <Link className="download-link" to={"/assets/Windows/"+questions.download} target="_blank" download>Download Link</Link> */}
                <Link className="btn backtohome" to={"/assets/Windows/"+questions.download} target="_blank" download>Download Link</Link>
                <br/>
                 <br/>
                
              <a href="#" className='btn backtohome'  id={questions.id} onClick={(e) => {window.open(questions.link)}}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               HackerRank
              </a>
              </div>
            </div>
              ))
            }

        <NavLink to="/" className='btn backtohomereal backtohome' style={{marginTop:"2rem"}} id="HomeButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
               Back to Home
        </NavLink>
          </div>
        </div>
        
      </div>
      
      
    
    </div>
  );
};

export default Accordion;
