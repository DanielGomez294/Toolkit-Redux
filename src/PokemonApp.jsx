import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"
import {startLoadingPokemons} from './store/slices/pokemon'

export const PokemonApp = () => {

    const dispatch = useDispatch()

    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons)

    // const isLoading  = useSelector(state => state.isLoading)
    console.log("reducer",pokemons)
    console.log("reducer", isLoading)


    useEffect(() => {
        dispatch(getPokemons());

    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? "true" : "false" }</span>
            <hr />

            <ul>
                {
                    pokemons.map(({name}) => (
                        <li key={name}>
                            {name}
                        </li>
                    )
                    )
                }
            </ul>


<button disabled={isLoading} onClick={() => { dispatch(getPokemons(page))  }}
>
    next 
</button>
        </>
    )
}
