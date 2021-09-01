import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import FoodData from './components/FoodData/FoodData';
import Days from './components/Days/Days';

function App() {

  const [days, setDays] = useState([]);

  // Fetch data when this component (aka the whole page) first renders
  useEffect(()=>{
    async function getDays() {
      const daysFromServer = await fetchDays();
      setDays(daysFromServer);
    }
    getDays();
  },
  // Empty dependency array so that this never runs again on re-renders: 
  []);

  async function fetchDays() {
    const res = await fetch('http://localhost:5000/days'); // Will change to user's database space, but same concept
    const data = await res.json();
    return data;
  }

  return (
    <>
      <Header title="Calorie Log" />
      <div className="container">
        <FoodData className="data-wrapper"></FoodData>
        <Days className="daily-wrapper" days={days}></Days>
      </div>
    </>
  );
}

export default App;