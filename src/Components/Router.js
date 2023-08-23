// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} /> 
        <Route path="/character/:id" component={CharacterDetail} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
