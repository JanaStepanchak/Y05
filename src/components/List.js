import React from 'react'
import { Route } from "react-router-dom";
import {  Item } from './Item';


export const List = () => {
    return(
        <div>
        <h1> List </h1>
         <Route path="/list/:itemid" component={Item} />
        </div>
    );
}


/* 
3) Во вложеный роут /list/:id выводить один элемент из этого списка
    https://jsonplaceholder.typicode.com/users/1
 */

/*import React, { Component } from 'react'
import { Route } from "react-router-dom";
import {  Item } from './Item';

class List extends Component {

     state = {
        users: []
     }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json() )
        .then( res => {
            this.setState({
                users: res
            });
        });       
    }

    render = () => {
        const { users } = this.state;
        consol.log (this.state);

            return(
                <div>
                    <h1> List </h1>
                    <div>
                    {
						users.map( (user, key) => ( 
                            <Route path="/list/:itemid" component={Item} 
								
                                { 	key={key}
									user={user} }>
								/> 
							)
						)
					}
                    </div>


                   
                </div>
            );
        }
    }

export default List;*/