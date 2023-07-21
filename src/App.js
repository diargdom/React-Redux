import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import {Col} from 'antd'
import { useEffect } from 'react';
import { getPokemon } from './api';
import { setPokemons} from './actions';
import logo from './statics/logo.svg'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const pokemons = useSelector(state => state.pokemons)
  const dispacth = useDispatch()

  useEffect(() => {        
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon()
      dispacth(setPokemons(pokemonsRes))
    }
    fetchPokemon()
  })

  return (
    <div className="App">
    <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux' /> 
    </Col>
    <Col span={8} offset={8}>
      <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


export default App;
