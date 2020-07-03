import React, { Component } from 'react';
import {  Link, Route} from "react-router-dom";
import {  Item } from './Item';

class ListСontacts extends Component {

    render = () => {
        const { user } = this.props;
        const {id, name, email, address } = user;

        return ( 
            <  div >
               
               <Route path="/list/:{id}" component={Item}> {name} </Route>
               
               <Link to="/list/:{id}"> {name} </Link>                    
                    
             {/* {<Route path={`/list/: ${id}`} component={Item} />     */}

                    <div >email : {email}</div>                   
                    <div> address  : {address.street}</div>                  
                
    
            </ div>
        )
    }

}

export default ListСontacts;