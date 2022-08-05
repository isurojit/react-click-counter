import React,{useState} from 'react'

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
    <div>
      <button onClick={clickCounterHandler}>+</button>
      <h1>{clickCounter}</h1>
      <button onClick={clickCounterHandler}>-</button>
    </div>
  )
}

export default App