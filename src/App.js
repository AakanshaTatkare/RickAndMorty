// App.js
import React from 'react';
import './App.css'; // Add your styles
import AppRouter from './Components/Router';

const App = () => {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <AppRouter />
    </div>
  );
};

export default App;
