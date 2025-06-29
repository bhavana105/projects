import { useEffect, useState } from "react";
import PokemonCards from'./PokemonCards';
import './Pokemon.css';
  const Pokemon = () => {
  const[pokemon,setPokemon]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  const[search,setSearch]=useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";


  const fetchPokemon=async()=>{


    try{
const res = await fetch(API);
const data = await res.json();
// console.log(data);

 const innerFetch = data.results.map(async(curr)=>{
const res = await fetch(curr.url);
const data = await res.json();
return data;
// console.log(data);
  // console.log(curr.url);
});
console.log(innerFetch);
const deatailsResponse = await Promise.all(innerFetch);
console.log(deatailsResponse);
setPokemon(deatailsResponse);
setLoading(false);

}catch(error){
  console.log(error);
  setLoading(false);
setError(error);
}}
useEffect(()=>{
fetchPokemon();

},[]);

const searchData = pokemon.filter((curpokemon)=>curpokemon.name.toLowerCase().includes(search.toLowerCase()));

if(loading){
return<div>
    <h1>Loading...</h1>
</div>
}
if(error){
  return<h1>
    {error.message}
  </h1>
}

  return (
    <>
   <div className="container">
     <header>
      <h1>Lets Catch Pokemon</h1>
    </header>
    <div className="search">
      <input type="text" placeholder="search here"
       value={search} 
      onChange={(e)=>{setSearch(e.target.value)}}/>
    </div>
    <div>
      <ul className="cards">
      {
        searchData.map((curr)=>{
          // return<li key={curr.id}>
          //   {curr.height}
          // </li>
          return<PokemonCards key={curr.id}pokemonData={curr}/>
        })
      }
      </ul>
    </div>
   </div>

    </>
  )
}

export default Pokemon