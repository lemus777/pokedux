import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails', // nombre del slice/nombre de la constante
  async (_, {dispatch}) => { //primer argumento es la propiedad que necesitemos, en este caso _ porque no necesitamos enviar nada
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon(); // llamamos de forma asíncrona a nuestra función de consulta axios a la api
    const pokemonsDetailed = await Promise.all( // los pokemonsDetailed esperará a que acaben todas las consultas (Promise.all)
      pokemonsRes.map(pokemon => getPokemonDetails(pokemon)) // cogerá los pokemons del estado, los mapeará, por cada uno obtendrá los detalles
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);
// con redux toolkit los reducers son un objeto con las acciones. Toolkit se encargará de la inmutabilidad de forma automática
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;