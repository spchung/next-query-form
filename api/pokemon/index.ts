// define your react-query queryFn here - anything that returns a promise
import { error } from "console";
import { Pokemon, PokemonInfoModel } from "../types";

type PokeResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

export const getPokemonById = async (id: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
};

export async function getPokemonByName(name: string): Promise<Pokemon>{
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Failed to fetch pokemon: ${text}`)
    }
    return await res.json()
  }
  catch(error){
    throw new Error(`Failed to fetch pokemon: ${error}`)
  }
}

export async function listPokemon(limit: number, offset: number): Promise<PokeResponse<PokemonInfoModel>> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Failed to fetch list pokemon: ${text}`)
    }
    return await res.json()
  }
  catch(error){
    throw new Error(`Failed to fetch list pokemon: ${error}`)
  }
};