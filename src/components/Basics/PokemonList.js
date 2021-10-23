import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PokemonDetails from './PokemonDetails';


const PokemonList = ({match}) => {
    const [pokemonNames, SetPokemonNames] = useState([]);
    const [poke, setPoke] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then((response) => {
            return response.json();
        })
        .then((u) => {
            u.results.forEach(element => {
                console.log(element.name);
                var eachData = {};
                eachData.name = element.name;
                
                pokemonNames.push(eachData);
            });
            setPoke(u);
        })
    }, [pokemonNames])

    console.log(poke);

    if(poke.results){
        return (
            <section className="main-card--container">
                {pokemonNames.map((currEle) => {
                    return (
                        <div>
                            <Link to={`/pokemon-names/` + currEle.name }>
                                <h3>{currEle.name}</h3>
                                
                            </Link>
                            <Switch>
                                <Route path={'/pokemon-names/' +currEle.name}>
                                    <PokemonDetails />
                                </Route>
                            </Switch>
                            
                          
                        </div>
                        
                    )
                })}
            </section>
        )
    }
    else{
        return (
            <div>Still Loading....</div>
        
        )
    }
}

export default PokemonList;
