import React from 'react'
import Header from "../src/assets/components/Header";
import Home from "../src/assets/components/Home";
import "../src/App.css"
import AboutMe from './assets/components/AboutMe';
import Portfolio  from './assets/components/Portfolio';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
