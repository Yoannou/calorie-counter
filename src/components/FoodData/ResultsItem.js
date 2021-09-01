import ResultsAmount from "./ResultsAmount"
import './ResultsItem.css'

function ResultsItem({description, amount, metric, calories}) {
    return (
        <div className="results-item">
            <div className="results-description">{description}</div>
            <ResultsAmount amount={amount} metric={metric} />
            <div className="calories">{calories}</div>
            <div className="add-button"><button>ADD</button></div>
        </div>
    )
}

export default ResultsItem
