import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

const List = () => {
    // Mettre en place des constantes avec un état de base et une fonction qui modifiera cet état

    // La constante pokemons qui stockera les données de l'api.
    const [ pokemons, setPokemons ] = useState([]);
    // Une constante qui servira de chargement des données.
    const [ loaded, setLoaded ] = useState(false);
    // Une constante qui va gérer les erreurs éventuelles.
    const [ error, setError ] = useState(null);

    // seEffect est un "hook" de React qui va gérer les changements d'états mais aussi l'appel à l'api.
    useEffect(() => {
        // Axios permet de faire un fetch sur l'adresse de l'api
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
            // Sachant que la requête d'axios est une promesse, il faut la gérer avec un .then et .catch
            // Cette promesse renvoi une réponse qui va être gérée dans le .then.
            .then(res => {
                // On fait un console.log de cette réponse en récupérant les données de l'api (data).
                console.log(res.data);

                setPokemons(res.data);
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
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
    else {
        return (
            <div>
                <h1 className='text-center m-5'>Liste des pokemons</h1>
                <div className='d-flex flex-wrap gap-3 justify-content-center'>
                    {pokemons.map((pokemon, index) => {
                        return (
                                <ListItem pokemon={pokemon} key={index} />
                        ) 
                    })}
                </div>
            </div>
        );
    }
};

export default List;