import React from "react";
import './Sidebar.css';
import JBDM from  '../assets/javier.png';
import { Link } from 'react-router-dom';
import {
  IconShare,
  IconAddressBook,
  IconLayoutBottombarCollapse,
  IconHome,
} from '@tabler/icons-react';
class Sidebar extends React.Component {
  render(){
    return <div className="sidebarmain">
            <div className="leftsidediv">
                <img className='setimage' height={30} src={JBDM}></img>
                <h2 className='leftside'>Gabriel </h2>
            </div>
             <div className='sevenitems'>
                <Link to="/" className='item'><div className="icon"><IconHome stroke={1.5} /><span>Home</span></div></Link>
                <Link to='/About' className='item'><div className="icon"><IconLayoutBottombarCollapse stroke={1.5} /><span>About</span></div></Link>
                <Link to='/Contact' className='item'><div className="icon"><IconAddressBook stroke={1.5} /><span>Contact</span></div></Link>
                <Link to='/link1' className='item'><div className="icon"><IconShare stroke={1.5} /><span>Link 1</span></div> </Link>
                <Link to='/link2' className='item'><div className="icon"><IconShare stroke={1.5} /><span>Link 2</span></div></Link>
                <Link to='/link3' className='item'><div className="icon"><IconShare stroke={1.5} /><span>Link 3</span></div></Link>
                <Link to='/link4' className='item'><div className="icon"><IconShare stroke={1.5} /><span>Link 4</span></div></Link>
            </div>
          </div>
  }
}

export default Sidebar;