import { useState, useEffect } from 'react'


function App() {
  const [previousValue, setPreviousValue] = useState('')
  const [nextValue, setNextValue] = useState('')
  return (
    <div className="App">
        <div className="row">
          <div className="col"><button className="digit">9</button></div>
          <div className="col"><button className="digit">8</button></div>
          <div className="col"><button className="digit">7</button></div>
        </div>
    </div>
  );
}

export default App;
