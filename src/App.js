import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/CarolinaKlein/repos')
    .then(response => response.json())
    .then(response => {
      setData(response)
    })
  }, [])

  // response.map(data => data.name)
  
  return (
    <div>
      <h1>My Repos</h1>
      <ul>
        {data.map(data => 
           <li>{data.name}</li>
        )} 
      </ul>

      <ul>
        {data.map(data => 
          <li>{data.url}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
