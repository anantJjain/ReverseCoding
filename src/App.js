import React,{useEffect,useState} from 'react';
import Question from './components/Question/Question';
import Main from './components/main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Spline } from 'react-spline';
import '../src/App.css'
import Loader from './components/Loader/Loader';
import Accordion from './components/Accordion';
// import Spline from '@splinetool/react-spline';

export default function App() {

  const [load,setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
      // console.log("HELLO")
    }, 6000);
  }, [])
  
  return (  
    <div>
   { !load ?<div><Loader /></div> : <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/linux" component={Question} />
        <Route path="/windows" component={Accordion} />
            
      </Switch>
      <button className='button'>HackerRank</button>
    </BrowserRouter>
    {/* <h1>Hello</h1> */}
    </div>
} 

    </div>    


    
    
  );
}
