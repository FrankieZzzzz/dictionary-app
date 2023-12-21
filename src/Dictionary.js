import React, { useState } from "react";
import axios from "axios";

export default function Dictionary(){
    let [keyValue, setKeyValue] = useState(null);

    function Searching(event){
        event.preventDefault()
        alert(`User searching for ${keyValue}`)

        let dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyValue}`;
        axios.get(dictionaryAPI).then(dictionaryFunction)
    }
    function dictionaryFunction(response){
        console.log(response.data[0]);
    }
    function getSearchValue(event){
        event.preventDefault();
        setKeyValue(event.target.value);
    }
    return(
        <div className="Dictionary-app">
            <p className="app-title"><span>SIMPLE</span> DICTIONARY</p>
            <form className="app-search-engine" onSubmit={Searching}>
                <div className="app-search-engine-left">
                    <i className="fa-solid fa-bars app-menu-icon"></i>
                    <input type="search" autoFocus={true} className="app-search-bar" placeholder="Search" onChange={getSearchValue}/>
                </div>
                <button className="app-search-button" type="submit"><i className="fa-solid fa-magnifying-glass app-menu-icon" onClick={Searching}></i></button>
            </form>
            <section id="recent-search-section">
                <h2>Recent Search</h2>
                <ul className="list-unstyled recent-search-list">
                    <li className="recent-search-word">
                        <div>Sunny</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="recent-search-word">
                        <div>Lucky</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li class="recent-search-word">
                        <div>Tomorrow</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                    <li className="recent-search-word">
                        <div>Swimming pool</div>
                        <i className="fa-regular fa-heart"></i>
                    </li>
                </ul>
            </section>
        </div>
    )
}