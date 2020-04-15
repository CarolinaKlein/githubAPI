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
      <h1>Carolina's Repos</h1>
      <div>
        {data.map(data => (
          <div className="repo">
           <p key={data.id}>{data.name}</p>
           <a href={data.html_url} target="_blank" className="links">Visit Github Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
