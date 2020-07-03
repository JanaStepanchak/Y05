import React from 'react'
import { Route } from "react-router-dom";
import {  Item } from './Item';
import List2 from './List2';

export const List = () => {
    return(
        <div>       
         <Route path="/list/:itemid" component={Item} />
         <List2 />
        </div>
    );
}

/*2) В роут /list выводить одну из следующих сущностей:
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/photos
*/
