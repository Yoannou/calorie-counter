// This is not a real file, just an idea of structure

function App() {
  return (
    <div className="container">
      <div className="nutrition-wrapper">
        <h3>USDA food data</h3>
      </div>
      <div className="daily-wrapper">
        <ul className="days">
          <li className="day">
            <div className="day-top-bar"></div>
            <div className="day-details"> DEFAULT OF THIS IS HIDDEN
              <ul className="food-entires">
                <li className="food-entry">
                  <div className="food-entry-name">eggs</div>
                  <div className="food-entry-amount">2</div>
                  <div className="food-entry-calories">100</div>
                </li>
                <li className="food-entry">
                  <div className="food-entry-name">bread</div>
                  <div className="food-entry-amount">2 slices</div>
                  <div className="food-entry-calories">300</div>
                </li>
              </ul>
            </div>
          </li>
          <li className="day">
            <div className="day-top-bar"></div>
            <div className="day-details">
              <ul className="food-entires">
                <li className="food-entry">
                  <div className="food-entry-name">eggs</div>
                  <div className="food-entry-amount">2</div>
                  <div className="food-entry-calories">100</div>
                </li>
                <li className="food-entry">
                  <div className="food-entry-name">bread</div>
                  <div className="food-entry-amount">2 slices</div>
                  <div className="food-entry-calories">300</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default App;