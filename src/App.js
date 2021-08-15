import './App.css';
import Header from './components/Header'
import Nutrition from './components//Nutrition/Nutrition';
import Days from './components/Days/Days';

// Use state to create our list of days and their associated data

function App() {
  return (
    <>
      <Header title="Calorie Log" />
      <div className="container">
        <Nutrition className="nutrition-wrapper"></Nutrition>
        <Days className="daily-wrapper"></Days>
      </div>
    </>
  );
}

export default App;