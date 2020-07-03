// import React from 'react'
// import { Route } from "react-router-dom";
// import {  Item } from './Item';


// export const List = () => {
//     return(
//         <div>
//         <h1> List </h1>
//          <Route path="/list/:itemid" component={Item} />
//         </div>
//     );
// }

/*2) В роут /list выводить одну из следующих сущностей:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/photos
*/




import React, { Component } from 'react'
import { Route } from "react-router-dom";
//import {  Item } from './Item';
import ListСontacts from './ListСontacts';

class List2 extends Component {

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

            return(
                <div>
                    <h1> List </h1>
                    <div>
                    {
						users.map( (user, key) => ( 
                            <ListСontacts
                                key={key}
                                user={user}
                              />
							)
						)
					}
                    </div>                  
                </div>
            );
        }
    }

export default List2;