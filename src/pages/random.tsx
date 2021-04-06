import { GetServerSideProps } from 'next'
import Head from "next/head"
// @ts-ignore  
import { getPokemonHome, getPokemonData } from '@/lib/fetch'
// @ts-ignore  
import { Pokemon } from '@/types/Pokemon'
// @ts-ignore  
import { Pokedex } from '@/types/Pokedex'
// @ts-ignore 
import PokemonForm from '@/components/pokemon'

interface PokemonApi {
  data: Pokemon
}

const Ditto = (props: PokemonApi) => {
  if (!props.data.name) return null;

  const pokeName = props.data.species.name.charAt(0).toUpperCase() + props.data.species.name.slice(1)
  
  return (
    <section className="container">     
      <Head>
        <title>A wild {pokeName} appears! | PokéSSR - AWS Amplify</title>
        <meta property="og:title" content={`A wild ${pokeName} appears! | PokéSSR - AWS Amplify`} key="title" />
      </Head>
      <PokemonForm poke={props}/>
    </section>
    )
      
}


export const getServerSideProps: GetServerSideProps = async () => {
  const random = await getPokemonHome() as Pokedex

  const ditto = random.results[random.results.length * Math.random() | 0].name

  let data;
    
  if (typeof ditto === 'string') {
    data = await getPokemonData(ditto)
  } else {
    data = {}
  }

  return {
    props: {
      data
    }
  }
}

export default Ditto