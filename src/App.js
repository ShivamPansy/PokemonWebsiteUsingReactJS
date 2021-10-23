import React from 'react';
import { Route, Switch} from 'react-router-dom';
import PokemonCard from './components/Basics/pokemonCard';
import MainNavigation from './components/Basics/MainNavigation';
import PokemonList from './components/Basics/PokemonList';
import PokemonDetails from './components/Basics/PokemonDetails';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <PokemonCard />
        </Route>
        <Route path='/pokemon-names' exact>
          <PokemonList />
        </Route>
        
      </Switch>
    </div>
  )
}


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png


export default App;

