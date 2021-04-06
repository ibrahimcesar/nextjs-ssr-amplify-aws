import { GetServerSideProps } from 'next'
import Head from "next/head"
// @ts-ignore  
import { getPokemonData } from '@/lib/fetch'
// @ts-ignore  
import { Pokemon } from '@/types/Pokemon'
// @ts-ignore 
import PokemonForm from '@/components/pokemon'

interface PokemonApi {
  data: Pokemon
}

const Ditto = (props: PokemonApi) => {
  if (!props.data.name) return null;

  const pokeImage = props.data?.sprites?.other?.["official-artwork"]?.front_default ?? props.data?.sprites?.front_default

  const pokeName = props.data.species.name.charAt(0).toUpperCase() + props.data.species.name.slice(1)
  
  return (
    <section className="container">
      <Head>
        <title>{pokeName} | PokéSSR - AWS Amplify</title>
        <meta property="og:title" content={`${pokeName} | PokéSSR - AWS Amplify`} key="title" />
      </Head>
      <PokemonForm poke={props}/>
    </section>
  )
      
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
    
  const { ditto} = context.query;
    
  if (typeof ditto === 'string') {
    data = await getPokemonData(ditto)
  } else {
    data = {}
  }
  

  return { props: { data } }
}

export default Ditto