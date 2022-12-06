import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}> {/*el span total es 16, así que ocupa la mitad y con offset 8 lo centramos*/}
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
