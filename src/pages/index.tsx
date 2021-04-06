
import { GetServerSideProps } from 'next'
import Link from "next/link"
import { getPokemonHome } from '@/lib/fetch'
import { Pokedex } from '@/types/Pokedex'
import Button from "@/components/button"
import Spacer from "@/components/spacer"

interface PokeDexApi {
  data: Pokedex
}

const PokemonsPage = (props: PokeDexApi) => {
  
  return (
    <div className="wrapper">
      <div></div>
      <div className="poke-content">
        <h1>Pokémons</h1>
        <p>Page to test Amplify SSR deployments with NextJS.</p>
        <p>Total of Pokémons: {props.data.count}</p>
        <Spacer size="12" style={{marginBottom: '20px'}}/>
        <Button />
        <Spacer size="12" style={{marginBottom: '40px'}}/>
          <ul className="poke-list">
          {props.data.results.map((pokemon, _index) => (
            <li key={pokemon.name}>
              <article>
              <span>{_index + 1} </span>
              <Link href={pokemon.name}><a className="poke-names">{pokemon.name}</a></Link>
              </article>
            </li>
          ))}
        </ul>
        <Spacer size="12" style={{marginBottom: '20px'}}/>
        <Button />
        <Spacer size="12" style={{marginBottom: '40px'}}/>
        </div>
      <div></div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getPokemonHome()
  return {
    props: {
      data
    }
  }
}

export default PokemonsPage
