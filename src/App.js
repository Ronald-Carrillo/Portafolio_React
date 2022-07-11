import React from 'react'
import Header from "../src/assets/components/Header";
import Home from "../src/assets/components/Home";
import "../src/App.css"
import AboutMe from './assets/components/AboutMe';
import Portfolio  from './assets/components/Portfolio';
import Contactme from './assets/components/Contactme';


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contactme></Contactme>
    </div>
  );
}

export default App;
