
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
  const [show,setShow] = useState(false)

  useEffect(() => {
    axios.get(`https://worldtimeapi.org/api/timezone/Asia/Kolkata`)
    .then(res => {
        if ((res.data.unixtime)>1649129400)
          setShow(true)
        
        // setlocalTime(new Date(time).toLocaleDateString("en-US"));
        // console.log(time);
        // console.log(localtime);
      })        
}, [])



  // const [load,setLoad] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(true)
  //   }, 1000);
  // }, [])
  
  return (  
    <div>
   {/* { !load ?<div><Loader /></div> : <div> */}
   <BrowserRouter>
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
