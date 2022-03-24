import React from 'react';
import Question from './components/Question/Question';
import Main from './components/main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  
  return (  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/linux" component={Question} />
      </Switch>
    </BrowserRouter>
  );
}
