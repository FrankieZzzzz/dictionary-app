import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import './Dictionary.css';
import Photo from "./Photo"


export default function Dictionary(props){
    let [keyValue, setKeyValue] = useState(props.defaultKeyword);
    let [resultsValue, setResultsValue] = useState(null)
    let [loaded, setLoaded] = useState(false);
    let [photo,setPhoto] = useState(null)
    // connect to dictionary api
    function Searching(event){
        event.preventDefault()
        apiCall();
    }
    function getPexelImage(response){
        console.log(response);
        setPhoto(response.data.photos)
    }
    // run api function
    function dictionaryFunction(response){
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResultsValue(response.data[0])
    }
    function apiCall(){
        let dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyValue}`;
        axios.get(dictionaryAPI).then(dictionaryFunction);

        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyValue}&per_page=6`;
        let pexelsApiKey = "7AZZqOI2GDW94yigYodcbytHN57CRjmoZujOk4t0qq2nAPoE08WQjgv3";
            
        let headers = {"Authorization" : `${pexelsApiKey}`}
        axios.get(pexelsApiUrl, { headers: headers })
        .then(getPexelImage);
    }

    // get searching value
    function getSearchValue(event){
        event.preventDefault();
        setKeyValue(event.target.value);
    }
    function load(){
        setLoaded(true);
        apiCall()
    }
    // return the html
    if (loaded === true) {
        return(
            <div className="Dictionary-app">
                <div>
                    <h1 className="app-title"><span>SIMPLE</span> DICTIONARY</h1>
                </div>
                <div id="search-section">
                    <p className="intro-title">What word do you want to look up?</p>
                    <form className="app-search-engine" onSubmit={Searching}>
                        <div className="app-search-engine-left">
                            {/* <i className="fa-solid fa-bars app-menu-icon"></i> */}
                            <input type="search" autoFocus={true} className="app-search-bar" placeholder="Search" onChange={getSearchValue}/>
                        </div>
                        <button className="app-search-button" type="submit"><i className="fa-solid fa-magnifying-glass app-menu-icon" onClick={Searching}></i></button>
                    </form>
                </div>
                <Results resultsContent={resultsValue}/>
                <Photo photoSrc={photo} photoAlt={keyValue}/>
            </div>
        )
    }else{
        load();
        return "Loading"
    }
    
}