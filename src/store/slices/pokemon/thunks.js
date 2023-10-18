import { startLoadingPokemons } from "./PokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //todo: realiza peticion http
    const resp = await fetch(
      `https://pokeapi.co/api/v2/https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
        page * 10
      }`
    );
    const data = await resp.json();
    console.log(data);
    // dispatch(setPokemons());
  };
};
