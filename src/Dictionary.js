import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import './App.css';


export default function Dictionary(){
    let [keyValue, setKeyValue] = useState(null);
    let [resultsValue, setResultsValue] = useState(null)
    // console.log(resultsValue);
    // connect to api
    function Searching(event){
        event.preventDefault()

        let dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyValue}`;
        axios.get(dictionaryAPI).then(dictionaryFunction)
    }
    // run api function
    function dictionaryFunction(response){
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResultsValue(response.data[0])
    }
    // get searching value
    function getSearchValue(event){
        event.preventDefault();
        setKeyValue(event.target.value);
    }
    // return the html
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
            
            <Results resultsContent={resultsValue}/>
        </div>
    )
}