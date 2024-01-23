// import React from 'react'
// import Player from '../Player'
// import { Button, Card } from 'react-bootstrap'

// const PlayerCard = ({id,name}) => {
//   return (
//     <Card style={{display: "flex", flexWrap: "wrap", width: "18rem", margin: "10px", border: "2px solid", borderRadius: "8px", cursor:"pointer" }}>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//       {Player.id}
//       {Player.name}
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
//       )
// }

// export default PlayerCard

import React from "react"; 
import Card from "react-bootstrap/Card"; 
import Button from 'react-bootstrap/Button';  
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {   
    return (     // Inline styling     
    <Card style={{display: "flex", flexWrap: "wrap", width: "18rem", margin: "10px", border: "2px solid", borderRadius: "8px", cursor:"pointer" }}>       
        <Card.Img variant="top" src={imageUrl} />       
        <Card.Body>         
            <Card.Title>{name}</Card.Title>         
            <Card.Text>           
                Team: {team} <br />           
                Nationality: {nationality} <br />           
                Jersey Number: {jerseyNumber} <br />           
                Age: {age}         
            </Card.Text>         {/* Adding a button to the Cards from ReactBootstrap */}         
            <Button> More </Button>       
        </Card.Body>     
    </Card>   ); };  
    export default Player;