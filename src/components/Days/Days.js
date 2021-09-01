import './Days.css'
import Day from './Day'

const Days = ({ days }) => {

    return (
        <div className="days-wrapper">
            {days.map((day) => (
                <Day key={day.id} day={day}/>
            ))}
        </div>
    )

}

export default Days
