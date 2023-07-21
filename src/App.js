import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col, Spin } from "antd";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispacth = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispacth(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispacth(getPokemonsWithDetails(pokemonsRes));
      dispacth(setLoading(false))
    };

    fetchPokemon();
  });

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
