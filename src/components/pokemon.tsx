// import Image from 'next/image' ⚠️ Not supported yet in Amplify SSR deploy
// @ts-ignore  
import Button from '@/components/button'
// @ts-ignore  
import Spacer from '@/components/spacer'
// @ts-ignore 
import { Pokemon } from '@/types/Pokemon'

interface PokemonInfo {
  poke: {
    data: Pokemon
  }    
}

const PokemonForm = (props: PokemonInfo) => {


  const pokeImage = props.poke?.data?.sprites?.other?.["official-artwork"]?.front_default ?? props.poke?.data?.sprites?.front_default

  return (
  <article className="ditto">
        <img 
          src={pokeImage}
          width={240}
          height={240}
          alt={`Pokémon ${props?.poke?.data?.name}`}
        />
        <h1 className="poke-name">{props?.poke?.data?.name}</h1>
        <p>Number: {props?.poke?.data?.order}</p>
        <p>Type:</p>
        <ul className="poke-list">{props?.poke?.data?.types?.map((info: Pokemon, _: number) => (<li key={_}>{info.type.name}</li>))}</ul>
        <Spacer size="12" style={{marginTop: '20px'}}/>
      <Button />
      <div>
        
      </div>
    </article>
  )
}

export default PokemonForm