import React from 'react';
import { useParams } from 'react-router-dom';

const ListItem = (props) => {

    return (
        <div className="card w-25">
        <img src={props.pokemon.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <a href="#" className="btn btn-primary">{props.pokemon.name}</a>
        </div>
        </div>
    );
};

export default ListItem;