import Entries from './Entries'
import './Day.css'

const Day = ({ key, day }) => {

    // Define the day's entries:
    const entries = {

    }

    return (
        <div className="day" entries={entries}>{day.date}</div>
    )
}

export default Day