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

class App extends React.Component {
  render(){
    return <div className="App">
      <div className='maindiv'>
      <Sidebar/>
      <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route exact path='/link1' element={'Link 1'} />
            <Route exact path='/link2' element={'Link 2'} />
            <Route exact path='/link3' element={'Link 3'} />
            <Route exact path='/link4' element={'link 4'} />
      </Routes >
      </div>
      <Footer/>
     </div>
  }
}

export default App;
