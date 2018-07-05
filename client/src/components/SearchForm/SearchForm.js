import React from "react";

const SearchForm = () => (
<div className="card grey-lighten">
    <div className="card-content blue-grey-darken-1-text">
        <span className="card-title">Neighborhood Must Haves</span>
        <p>
            <form action="#">
        
            <p>
                <label>
                    <input id="indeterminate-checkbox" type="checkbox" />
                    <span>Gym</span>
                </label>
            </p>
        
            <p>
                <label>
                    <input id="indeterminate-checkbox" type="checkbox" />
                    <span>Shopping</span>
                </label>
            </p>

            <p>
                <label>
                    <input id="indeterminate-checkbox black-text" type="checkbox" />
                    <span>Night Life</span>
                </label>
            </p>

            </form>
        </p>
    </div>
</div> 
);

export default SearchForm;