import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
import NavCompomemt from './component/NavComponent/NavCompomemt';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/services">
            <NavCompomemt />
            <div style={{backgroundColor:'red',width:'100%',height:'100vh'}}></div>
          </Route>
          <Route path="/product">
            <NavCompomemt />
            <div style={{backgroundColor:'green',width:'100%',height:'100vh'}}></div>
          </Route>
          <Route path="/contact">
            <NavCompomemt />
            <div style={{backgroundColor:'yellow',width:'100%',height:'100vh'}}></div>
          </Route>
          <Route path="/signup">
            <NavCompomemt />
            <div style={{backgroundColor:'black',width:'100%',height:'100vh'}}></div>
          </Route>
          <Route path="/">
              <NavCompomemt />
              <HomePage></HomePage>
          </Route>
        </Switch>
      
    </Router>
    
  );
}


export default App;
