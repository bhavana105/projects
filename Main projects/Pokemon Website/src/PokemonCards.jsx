// import React from 'react'
import './PokemonCards.css'
const PokemonCards = ({pokemonData}) => {
  return (
<li >
  <div className='bg'>
  <img 
  src={pokemonData.sprites.other.dream_world.front_default
}
  alt={pokemonData.name}
  />
    </div>
  <h4>{pokemonData.name}</h4>
  <div className='bar'>
    {
//      pokemonData.types.map((currdata)=>{
// console.log(currdata.type.name);
 pokemonData.types.map((currdata)=>currdata.type.name).join(", ")}
  </div>

<div className="mesurements">
     <p>
      <span className="mesurements color">Heigth</span>{pokemonData.height}
    </p>
    <p>
      <span className="mesurements color">Weigth</span>{pokemonData.weight}
    </p>
    <p>
      <span className="mesurements color">Speed</span>{pokemonData.stats[5].base_stat
}
    </p>

  </div>
  <div className='mesurements align'>
    <p>
      <span className='mesurements color'>Experience</span>{pokemonData.base_experience}
    </p>
    <p>
      <span className='mesurements color'>Attack</span>{pokemonData.stats[1].base_stat
}
    </p>
     <p>
      <span className='mesurements color'>Abilits</span>
      {pokemonData.abilities.map((currability)=>currability.ability.name
      ).slice(0,1).join(", ")
}
    </p>
  </div>
  </li> 
 )
}

export default PokemonCards;
// sprites->dream_world->front_desault(img link)