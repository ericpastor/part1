import React, { useState } from 'react'
import ReactDOM from 'react-dom'
 
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
 )
 const AnecdoteMostVoted = ({voted, score}) =>{
  return (<div>
          <h2>Anecdote with most votes</h2>
          <p>{voted}</p>
          <p>has {score} votes</p>
  </div>

  )
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [copy, setCopy] =  useState(Array(anecdotes.length).fill(0))
  
  const handleVote = () => {
    const pointsCopy = [...copy]
    pointsCopy[selected] += 1;
    setCopy(pointsCopy)
  }

  const max = Math.max(...copy)

  const mostVoted = copy.indexOf(max)
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br></br>
      <p>has {copy[selected]} votes</p>
      <Button handleClick={ handleVote} text='vote'/>
      <Button handleClick={ () => setSelected(getRandomInt(anecdotes.length))}text='next anecdote'/>
      <AnecdoteMostVoted voted = {props.anecdotes[mostVoted]} score = {copy[mostVoted]}/>
    </div>
  )
}
 
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
