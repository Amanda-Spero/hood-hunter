import React from "react";

const SearchForm = () => (
<div className="card grey-lighten">
    <div className="card-content blue-grey-darken-1-text">
        <span className="card-title">Neighborhood Must Haves</span>
        
            <form action="#">
            <p>
                <input type="checkbox" name="gym" id="gym"/>
                <label htmlFor="gym">Gym</label>
            </p>
            <p>
                <input type="checkbox" name="shopping" id="shopping"/>
                <label htmlFor="shopping">Shopping</label>
            </p>
            <p>
                <input type="checkbox" name="nightlife"/>
                <label htmlFor="nightlife">Night Life</label>
            </p>

            </form>
        
    </div>
</div> 
);

export default SearchForm;