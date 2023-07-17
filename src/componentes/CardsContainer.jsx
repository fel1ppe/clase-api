import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../css/estilos.css'

function CardsContainer(props){

const [pokemons,setPokemons]=useState([]);
const [isLoading,setIsLoading]=useState(true);
    const fethApi=async()=>{
        const results = [];
        for(let i=1; i <= 10; i++) {
            const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const json=await response.json()
            results.push(json)
        }       
        setPokemons(results)
    }

    useEffect(()=>{
        (async()=>{
            await fethApi()
            setIsLoading(false)
        })()
        
    },[] );

if(isLoading){
    return(
        <div>Cargando.....</div>
    )
}

return(
    <div className='cards-container'>
        {pokemons.map(pokemon => {
            const {species: {name}, types, sprites: {front_default: imagen}} = pokemon;
            return(
                <Card nombre={name} tipo={types} imagen={imagen}/>
            );
        })}
    </div>
)
}
export default CardsContainer;
