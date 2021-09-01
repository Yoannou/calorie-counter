import React from 'react'

function ResultsAmount({amount, metric}) {

    // Will need a callback function that climbs back up and changes the amount / metric
    // Can save this for when the switching project is done and just stick with grams for now
    // Get core functionallity of transfering done, deal with this later.

    return (
        <div className="results-amount">
            {amount + metric}
        </div>
    )
}

export default ResultsAmount
