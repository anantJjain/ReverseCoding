import React,{useEffect,useState} from 'react';
import Question from './components/Question/Question';
import Main from './components/main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/App.css'
import Loader from './components/Loader/Loader';
import Accordion from './components/Accordion';
import axios from 'axios';

export default function App() {

  const [time,setTime] = useState(0)
  // const [localtime,setlocalTime] = useState(0)
  const [show,setShow] = useState(false)

  // const [load,setLoad] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(true)
  //   }, 1000);
  // }, [])  

  useEffect(() => {
    axios.get(`http://worldtimeapi.org/api/timezone/Asia/Kolkata`)
    .then(res => {
        if ((res.data.unixtime)>1648870200)
          setShow(true)
        
        // setlocalTime(new Date(time).toLocaleDateString("en-US"));
        // console.log(time);
        // console.log(localtime);
      })        
}, [])


// { time=='2020-03-31T20:36:50+05:30'?setShow(true):null}
// date = new Date(unixTime*1000);
// console.log(date.toLocaleDateString("en-US"));}

  
  
  
  return (  
    <div>
     
   {/* { !load ?<div><Loader /></div> : <div> */}
    <BrowserRouter>
    {/* {time}{<br></br>}
    {localtime} */}
    
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/linux" render={() => <Accordion display={show} os={"linux"} />} />
        <Route path="/windows" render={() => <Accordion display={show} os={"windows"} />} />   
        <Route path="/macos" render={() => <Accordion display={show} os={"macos"} />}/>           
      </Switch>
    </BrowserRouter>
    </div>
// } 
    // </div>     
  );
}
