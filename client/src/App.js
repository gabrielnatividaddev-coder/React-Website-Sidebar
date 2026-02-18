import logo from './logo.svg';
import React from 'react';
import '@mantine/core/styles.css';
import './App.css';
import { Button } from '@mantine/core';
import Sidebar from './Sidebar/Sidebar.js';
import { Switch, Route, Navigate, Routes  } from 'react-router-dom';
import Home from './Home/Home.js'
import Footer from './Footer/footer.component.jsx';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Firstlink from './Firstlink/Firstlink.js';
import Secondlink from './Secondlink/Secondlink.js';
import Thirdlink from './Thirdlink/Thirdlink.js';
import Fourthlink from './Fourthlink/Fourthlink.js';

class App extends React.Component {
  render(){
    return <div className="App">
      <div className='maindiv'>
      <Sidebar/>
      <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route exact path='/link1' element={<Firstlink/>} />
            <Route exact path='/link2' element={<Secondlink/>} />
            <Route exact path='/link3' element={<Thirdlink/>} />
            <Route exact path='/link4' element={<Fourthlink/>} />
      </Routes >
      </div>
      <Footer/>
     </div>
  }
}

export default App;
