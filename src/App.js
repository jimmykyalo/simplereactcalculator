import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'
import Button from './components/Button'


function App() {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState(0)

  const inputHandler =(value)=>{
    setInput(input+value)
  }

  const operands = ['/','*','-','+','.','(', ')']
  document.addEventListener('keyup', function(event){
    if (operands.includes(event.key)|| isFinite(event.key)){
        inputHandler(event.key)
    }else if (event.key === "Enter") {
      computeHandler()
    }
		
  })
  

  const computeHandler =()=>{
    setAnswer(evaluate(input))
  }
  
  
  return (
    <div className="app">
      <div className="calculator">
        <div className="row">
          <div className="screen">
            <div className="input">{input}</div>
            <div className="answer">{answer}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button inputHandler={inputHandler} value={'('} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={')'} />
          </div>
          <div onClick={()=>input===''?setAnswer(0):setInput(input.slice(0, -1))} className="col">
            <button className="digit">C</button>
          </div>
          <div className="col">
            <Button operation inputHandler={inputHandler} value={'/'} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button inputHandler={inputHandler} value={9} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={8} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={7} />
          </div>
          <div className="col">
          <Button operation inputHandler={inputHandler} value={'*'} displayValue={'x'} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button inputHandler={inputHandler} value={6} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={5} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={4} />
          </div>
          <div className="col">
            <Button operation inputHandler={inputHandler} value={'-'} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button inputHandler={inputHandler} value={3} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={2} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={1} />
          </div>
          <div className="col">
            <Button operation inputHandler={inputHandler} value={'+'} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button inputHandler={inputHandler} value={0} />
          </div>
          <div className="col">
            <Button inputHandler={inputHandler} value={'.'} />
          </div>
          <div onClick={()=>{setInput('');setAnswer(0)}} className="col">
            <button className="digit">CE</button>
          </div>
          <div className="col">
            <button onClick={()=>computeHandler()} className="digit true">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
