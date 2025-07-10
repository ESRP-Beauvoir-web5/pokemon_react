import React, { useEffect, useState } from 'react';
import './css/header.css'
import axios from 'axios';

const Header = () => {

    const [ types, setTypes ] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)

useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/types')
        .then(res => {
            setTypes(res.data)
            setLoaded(true)
        })
        .catch(err => {
            setError(err)
            setLoaded(true)
        })
}, [])

if ( !loaded ) {
        return(
            <div className='d-flex justify-content-center align-items-center'>
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    else if ( error ) {
        return(
            <div>
                <p>Vous avez une erreur de type : {error.response.status} message : {error.message}</p>
            </div>
        )
    }
    else{
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/pokemon/list">Liste des pokemons</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Par type
                        </a>
                        <ul className="dropdown-menu">
                            {types.map(type => (
                                <li><a className="dropdown-item" href="#"><img className='col-2' src={type.image} alt="" />{type.name}</a></li>
                            ))}
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Le nom d'un pokémon" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Chercher</button>
                    </form>
                    </div>
                </div>
                </nav>
            </header>
        );
    }
};

export default Header;