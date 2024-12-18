// App.js with nested routes
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<FoodList />}>
          <Route path="/food-details/:id" element={<FoodDetails />} />
        </Route>
      </Routes>
    
  );
}

export default App;
