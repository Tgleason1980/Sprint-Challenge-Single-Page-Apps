import React from 'react'

export default function CharacterCard (props) {
  console.log(props)
  return (
  <div>
   {/* <img src={props.char.image} alt=''></img> */}
   <h2>{props.char.name}</h2>
  </div>
  )}
