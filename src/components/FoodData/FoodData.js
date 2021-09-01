import React, { useState } from 'react'
import Search from './Search'
import ResultsList from './ResultsList'
import './FoodData.css'

const initialState = [];

function FoodData() {
    // Component-related variables and functions:
    const [keyword, setKeyword] = useState('');

    // Can this not be handled in Search.js so the whole section isn't
    // re-rendered with each keystroke?
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    }
    const handleKeywordSubmit = (event) => {
        event.preventDefault();
        searchFoods(keyword);        
    }

    const [searchData, setSearchData] = useState(initialState);


    // FoodData API-related variables and functions:
    const APIKey = 'R0m9UmYNvrMIrKcaSTRoLAeZYVDlWhnXW8ZWSDXL';

    /*
    async function fetchFoodItem(fdcid) {
        try {
            const res = await fetch('https://api.nal.usda.gov/fdc/v1/food/' + fdcid + '?api_key=' + APIKey);
            const foodItem = await res.json();
            return foodItem;
        }
        catch (err) {
            console.log("Error retrieving data from FoodData server:\n" + err);
        }
    }

    async function getCalories(foodItem) {
        const item = await foodItem;
        return item.foodNutrients[2].amount;
    }
    */

    /* Instead of rendering results of this as divs in a searchResults container,
    we will render them as ResultsItem components, each of which is a div which receives
    as props the data object.
    They will get rendered in the ResultsList component. Look up "conditionally rendering components".
    Best bet is that all of the data will be stored in this function's state
    and passed to ResultsList as a prop, which will then render ResultsItems for each item. */
    async function searchFoods(searchField) {
        // Ensure that it doesn't give you foods of the BRANDED datatype
        const dataTypes = ["Foundation", "SR Legacy"];
        try {
            const res = await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + APIKey
            + '&query=' + searchField + '&dataType=' + dataTypes);
            const data = await res.json();
            if (data.totalHits < 1 || searchField.length < 1) {
                // 1) searchResults.innerText = "No data for this item could be found."
                console.log("No data could be found for this item.")
            }
            else {
                // Seems to have a length of 50 per page:
                const results = data.foods;
                const newList = [];
                for(let i=0; i<results.length; i++) {
                    const entryData = {
                        description: results[i].description,
                        amount: 100,
                        metric: 'g',
                        calories: results[i].foodNutrients.filter(n => n.unitName == 'KCAL')[0].value,
                    };
                    // May change this to just setSetSearchData and appending, clearing at function start:
                    newList.push(entryData);
                }
                setSearchData(newList)
                console.log(searchData);
            }
            // Display results:
            // 4) searchResults.style.display = "block";
        }
        catch (err) {
            console.log("Search Error:\n" + err);
        }
    }

    return (
        <div className="data-wrapper">
            <Search keyword={keyword} keywordChange={handleKeywordChange} keywordSubmit={handleKeywordSubmit}/>
            <ResultsList results={searchData}/>
        </div>
    )
}

export default FoodData
