import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS: 
      return {...state, pokemons: action.payload };
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons]; // nos hace copia de la lista de pokemons del estado
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => { // va a buscarnos el index del pokemon dado con una función
        return pokemon.id === action.payload.pokemonId // va a comparar el id de todos los pokemon de la lista con el pokemonId del pokemon del payload
      });

      if (currentPokemonIndex < 0) { // si el pokemon no existe nos devolverá el estado tal cual
        return state;
      }

      newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite; //pero si existe a ese pokemon le cambia el favorite
      return {...state, pokemons: newPokemonsList};
    case SET_LOADING:
      return {...state, loading: action.payload };
    default:
      return state;
  }
}