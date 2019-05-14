import React from 'react';
import './list.css'
function List(props){

    alert(JSON.stringify(props));
    return(
        <ul className='list'>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    );
}
export default List;