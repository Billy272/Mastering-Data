import React from 'react'
import "./header.css"

const App = () => {
        const [count, setCount] = useState(0);
       
        const increment = () => {
          setCount(prevCount => prevCount + 1);
        };
       
        return (
          <div className="App">
            <h1>Royalty Associates</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
          </div>
        );
       };
       
export default App;