import axios from 'redaxios'

export async function getPokemonHome() { 
  const {data: response} = await axios(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
  return response
}


export async function getPokemonData(name:string) {
  const { data: response } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return response
}