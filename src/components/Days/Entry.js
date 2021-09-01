import './Entry.css'

const Entry = ({ entry, styleName }) => {
    return (
        <>
            <div className={`entry ${styleName ? styleName : ''}`}>
                <div className="entry-column">{entry.name}</div>
                <div className="entry-column">{entry.amount}</div>
                <div className="entry-column">{entry.calories}</div>
            </div>
        </>
    )
}

export default Entry