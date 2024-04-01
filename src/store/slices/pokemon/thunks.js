import {setPokemons, startLoadingPokemons } from "./PokemonSlice";
import {pokemonApi} from '../../../api/pokemonApi.js';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState ) => {
    dispatch(startLoadingPokemons());
// console.log(    dispatch(startLoadingPokemons()));
    //todo: realiza peticion http
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)


    dispatch(setPokemons  ({ pokemons: data.results, page: page + 1}));
  };
};
