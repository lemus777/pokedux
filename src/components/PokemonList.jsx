import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) => { // pokemons lo obtiene de nuestro estado en el reducer
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard // las siguientes propiedades salen del objeto devuelto por el fetch que está guardado en el estado pokemons y es mapeado
            name={pokemon.name} 
            key={pokemon.name} 
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // crea un arreglo de 10 veces un string vacío
}

export default PokemonList;