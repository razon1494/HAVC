import './App.css'
import NavBar from './components/NavBar/NavBar';
import Slider from './components/slider/Slider';
import React from 'react';
import Services from './components/services/Services';
import Progress from './components/progress/Progress';
import About from './components/about/About';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Client from './components/Client/Client';
function App() {

  return (
    <div className="App">
      <NavBar />
      <Slider></Slider>
      <Services />
      <Progress />
      <About />
      <Form />
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
