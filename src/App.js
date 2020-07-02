import React from 'react'
import {  BrowserRouter, Link, Route, Switch} from "react-router-dom";

//import {  NavLink } from './components/NavLink';
import {  HomePage } from './components/HomePage';
import {  List } from './components/List';
import {  Item } from './components/Item';
import {  About } from './components/About';
import {  Contacts } from './components/Contacts';
import {  NotFound } from './components/NotFound';

import {  Page1,  Page2,  Page3} from './components/pages';

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/"> 
           <nav>
              <Link to="/"> HomePage </Link>
              <Link to="/list"> List </Link>
              <Link to="/about"> About </Link>
              <Link to="/contacts"> Contacts </Link>       
            </nav> 

        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={List} />
        <Route path="/list/:itemid" component={Item} /> 
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route component={NotFound} />
        </Switch>

      </ BrowserRouter>  
    </div>
  );
}

export default App;
/*
1) Обернуть роуты в компонент Switch и добавить компонент 404.
*/