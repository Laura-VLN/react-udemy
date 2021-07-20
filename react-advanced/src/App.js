import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {

  const [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>{toggle ? 'stop' : 'start'}</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
