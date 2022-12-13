import axios from "axios";

export const getPokemon = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((res) => res.data.results) // primero hacemos console.log(data) para ver qué nos devuelve y buscar ahí lo que necesitamos, en este caso data.results
  .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}