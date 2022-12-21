import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions/index'
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS(); // hay que usar toJS() porque immutable trabaja con estructura de datos, y nosotros necesitamos un objeto plano, por eso lo transformamos así. shallowEqual evita rerenders innecesarios
  const loading = useSelector(state => state.getIn(['ui','loading'])); // aqui no usamos toJS() porque el valor de loading no es un objeto, es un booleano
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon(); // llamamos de forma asíncrona a nuestra función de consulta axios a la api
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
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
