import React from "react";

export default function Dictionary(){
    return(
        <div className="Dictionary-app">
            <p className="app-title"><span>SIMPLE</span> DICTIONARY</p>
            <form className="app-search-engine">
                <div className="app-search-engine-left">
                    <i class="fa-solid fa-bars app-menu-icon"></i>
                    <input type="search" autoFocus={true} className="app-search-bar" placeholder="Search"/>
                </div>
                <button className="app-search-button"><i class="fa-solid fa-magnifying-glass app-menu-icon"></i></button>
            </form>
        </div>
    )
}