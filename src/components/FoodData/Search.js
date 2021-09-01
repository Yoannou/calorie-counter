// Copy searchbar from food-data project
function Search({keyword, keywordChange, keywordSubmit}) {


    return (
        <div className="search-wrapper">
            <form id="search-form" onSubmit={keywordSubmit}>
                <label>
                    Search foods:
                    <input type="search" value={keyword} onChange={keywordChange}></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search