import React,{useState} from 'react'
import Card from './UI/Card';

const App = () => {
  const [clickCounter, setClickCounter] = useState(0);
  
  const clickCounterHandler = (e) => {
    if(e.target.innerText === '+'){
      setClickCounter((preState)=>{
        return preState + 1;
      });
    }else{
      setClickCounter((preState)=>{
        return preState - 1;
      });
    }
  }
  return (
    <Card>
      <button onClick={clickCounterHandler}>+</button>
      <h1>{clickCounter}</h1>
      <button onClick={clickCounterHandler}>-</button>
    </Card>
  )
}

export default App