import React, { useState } from 'react'
import ReactDOM from 'react-dom'
 
const Header = ({tittle}) =>{
  return <h1>{tittle}</h1>
} 

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
  )
  
  
const NotUsed = () =>{
  return <p>No feedback given</p>
}

const Stadisticline = ({text, value}) => {
  return <p>{text} {value}</p>
}



const Stadistics = ({good, neutral, bad, all, resultAv, resultPe}) => {

  
  if (all === 0) {
    return (
      <div>
        <NotUsed/>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        
            <tr>
            <td><Stadisticline text='good'/></td> 
            <td><Stadisticline value= {good}/></td>
            </tr>
            <tr>
            <td><Stadisticline text='neutral'/></td> 
            <td><Stadisticline value= {neutral}/></td>
            </tr>
            <tr>
            <td><Stadisticline text='bad'/></td> 
            <td><Stadisticline value= {bad}/></td>
            </tr>
            <tr>
            <td><Stadisticline text='avarage'/></td> 
            <td><Stadisticline value= {resultAv}/></td>
            </tr>
            <tr>
            <td><Stadisticline text='percetange'/></td> 
            <td><Stadisticline value= {resultPe.toFixed(2)+'%'}/></td>
            </tr>
       </tbody>   
    </table>       
    </div>
)
 
}
function sum (a, b, c) {
  return (a + b + c)
}
 
function avarage (a,  b, c){
  return ((a + b + c)/2)
}
 
function percentage (a, b, c){
  return ((a*100)/(a + b + c))
}
 
const App = () => {
  const tittle = 'give feedback'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  
  const all = sum(good, neutral, bad)
  const resultAv = avarage(good, neutral, bad)
  const resultPe = percentage(good, neutral, bad)
  
 
 
  return (
    <div>
     <Header tittle={tittle}/>
 
     <Button handleClick={ () => setGood(good + 1)}text='good'/>
     <Button handleClick={ () => setNeutral(neutral + 1)}text='neutral'/>
     <Button handleClick={ () => setBad(bad + 1)}text='bad'/>

     <h2>stadistics</h2>
 
     <Stadistics good = {good}
                 neutral = {neutral}
                 bad = {bad}
                 all = {all}
                 resultAv = {resultAv}
                 resultPe = {resultPe}
                 />
                    
     
    </div>
  )
}
 
ReactDOM.render(<App />,
  document.getElementById('root')
)
