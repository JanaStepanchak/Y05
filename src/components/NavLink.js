import React from 'react'
import {   Link, Route} from "react-router-dom";

import {  HomePage } from './HomePage';
import {  List } from './List';
import {  About } from './About';
import {  Contacts } from './Contacts';

export const NavLink = () => {
    return (
      <div>
       
            <nav>
              <Link to="/"> HomePage </Link>
              <Link to="/list"> List </Link>
              <Link to="/about"> About </Link>
              <Link to="/contacts"> Contacts </Link>       
            </nav>   
        <Route path="/" component={HomePage} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
       
      </div>
    );
  }
