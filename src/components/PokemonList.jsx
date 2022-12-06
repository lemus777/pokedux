import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return <PokemonCard />
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // crea un arreglo de 10 veces un string vacío
}

export default PokemonList;