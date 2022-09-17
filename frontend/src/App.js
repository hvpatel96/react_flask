import React, {useState, useEffect} from 'react'

import Dashboard from './dashboard_temp/Dashboard'

function App() {

  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    
    <div>
      <Dashboard />
      {/* {
        (typeof data.members === 'undefined') ? (
          <p> Loading ... </p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          )))
      } */}
    </div>
  );
}

export default App;

