import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual); // shallowEqual evita rerenders innecesarios
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}> {/*el span total es 16, así que ocupa la mitad y con offset 8 lo centramos*/}
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
      
    </div>
  );
}

export default App;
