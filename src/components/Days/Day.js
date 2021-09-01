import './Day.css'
import Entry from './Entry'

const Day = ({ day }) => {

    // Find out how to append 'entryTopRow' to the first entry's classList
    // Find out how to give entires unique keys
    return (
        <div className="day">
            <h3>{day.date}</h3>
            <div className="entries">
                <Entry key={day.id+'-header'} entry={{name: 'FOOD', amount: 'AMOUNT', calories: 'CALORIES'}} styleName="entryTopRow" />
                {day.foods.map((entry) =>
                    <Entry key={day.id+'-'+entry.name+entry.amount+'-'+entry.calories} entry={entry} />
                )}
            </div>
        </div>
    )
}

export default Day