import axios from "axios";

export const getPokemon = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((res) => res.data.results) // nos devuelve lo que necesitamos, en este caso data.results
  .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url) // para obtener los detalles de cada pokemon hacemos consulta de la url que nos da cada pokemon de pokemons
  .then(res => res.data)
  .catch((err) => console.log(err));
}