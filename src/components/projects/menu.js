import React from 'react'
//import { ROUTES } from "../../consts";
//import items from '../components/projects/AllData';
import { Link } from 'react-router-dom';

function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return (
                    <div key={item.id}>
                        <div>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>{item.challenge}</p>
                        </div>
                        <Link to={`/project/${item.id}`}>Show details</Link>
                    </div>)
                })
            }
        </div>
    )
}

export default Menu;
