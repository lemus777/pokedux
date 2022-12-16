import { getPokemonDetails } from "../api";
import { SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

// el siguiente export necesita para funcionar como asíncrono tener instalado npm i redux-thunk
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
  dispatch(setPokemons(pokemonsDetailed))
};