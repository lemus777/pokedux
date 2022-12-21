import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS: 
      // return {...state, pokemons: action.payload }; forma de hacerlo antes de instalar immutable, garantiza la inmutabilidad
      return state.setIn(['pokemons'], fromJS(action.payload))
    case SET_FAVORITE:
      // const newPokemonsList = [...state.pokemons];  nos hace copia de la lista de pokemons del estado, con immutable instalado no es necesaria
      //  const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => { // va a buscarnos el index del pokemon dado con una función
      //  return pokemon.id === action.payload.pokemonId // va a comparar el id de todos los pokemon de la lista con el pokemonId del pokemon del payload
      //});
      // con immutable instalado:
      const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
        return pokemon.get('id') === action.payload.pokemonId;
      });

      // este if se mantiene en ambos casos igual
      if (currentPokemonIndex < 0) { // si el pokemon no existe nos devolverá el estado tal cual
        return state;
      }

      // newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite; pero si existe a ese pokemon le cambia el favorite
      // con immutable instalado:
      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']); // isFavorite es igual al favorite guardado en el estado

      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite); // y lo que retornamos es ese estado favorite cambiado
    default:
      return state;
  }
}