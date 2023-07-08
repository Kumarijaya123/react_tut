/*import './App.css'
import { useState } from 'react';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    console.log("Button clicked");
    if(count>0){
 setCount(count-1)
    }
   
  };

  return (
    <div>
      <p>{count}</p>
    <button onClick={handleClick}>-</button>
    </div>
  );
}

export default App
*/

import './App.css'

function App(){
  const home = () => {
    console.log("Button clicked");
   
  };
  const about = () => {
    console.log("Button clicked");
   
  };
  const contact = () => {
    console.log("Button clicked");
   
  };
  return(
    
    <div>
    <button className="my-button" onClick={home}>Home</button>
    <button className="my-button" onClick={about}>About</button>
    <button className="my-button" onClick={contact}>Contact Us</button>

    </div>
  )
}

export default App;