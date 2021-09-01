import ResultsItem from './ResultsItem'
import './ResultsList.css'

function ResultsList({results}) {
    return (
        <div className="results-list">
            {results.length > 0 && <div id="results-heading" className="results-item">
                <div>Food:</div>
                <div>Amount:</div>
                <div>Calories:</div>    
            </div>}
            {results.map((result, i) => (
                <ResultsItem description={result.description} amount={result.amount}
                metric={result.metric} calories={result.calories}
                key={result.description + i*result.amount*result.calories} />
            ))}
        </div>
    )
}

export default ResultsList
