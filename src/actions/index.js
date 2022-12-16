import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({ // todo esto son acciones
  type: SET_POKEMONS, // este es el tipo de la acción
  payload // este es el payload que va a usar la acción
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

// el siguiente export necesita para funcionar como asíncrono tener instalado npm i redux-thunk
export const getPokemonsWithDetails = 
  (pokemons = []) =>  // le damos un valor inicial a pokemons de array vacío
  async (dispatch) => { // de forma asíncrona despachamos lo siguiente:
    const pokemonsDetailed = await Promise.all( // los pokemonsDetailed esperará a que acaben todas las consultas (Promise.all)
      pokemons.map(pokemon => getPokemonDetails(pokemon)) // cogerá los pokemons del estado, los mapeará, por cada uno obtendrá los detalles
    );

    dispatch(setPokemons(pokemonsDetailed))
};