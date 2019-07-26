import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  //const id = props.match.params.id;
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const characters = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setCharacter(res.data.results)
      //console.log(character);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
}

characters();
}, [character]);

if (!character) {
  return <div>Loading character information...</div>;
}
else{
  return <section className='character-list grid-view'>

      <h2> {character.map(char => (
        <CharacterCard key={char.id} char={char} />
      ))}</h2>
    </section>
}

}
