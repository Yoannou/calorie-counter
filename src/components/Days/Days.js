import { useState } from 'react'
import './Days.css'
import Day from './Day'

const Days = () => {

    // State of all the days
    const [days, setDays] = useState([
        // A SAMPLE DAY (FROM DAY.JS)
        {
            date: 'Thursday August 11',
            entries: []
        },
        {
            date: 'Friday August 12',
            entries: []
        }
    ])

    /*
    function udateDays(){
        ...
        setDays((old days) => {some data to generate new days})
    }
    */

    return (
        <div className="days-wrapper">
            {days.map((day)=> (
                <Day key={day.id} day={day}/>
            ))}
        </div>
    )
}

export default Days