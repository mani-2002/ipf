import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/log-ip')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
      </header>
    </div>
  );
}

export default App;
