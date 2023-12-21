import React from "react";
import './App.css';
import Meaning from "./Meaning"


export default function Results(props){
    if (props.resultsContent === null) {
        return(
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
        )
    }else{
        // console.log(props.results.meanings[0].definitions[0].definition);
        return(
        <div className="Results">
            <section id="results-section">
                <h2>{props.resultsContent.word}</h2>
                <p>
                {props.resultsContent.meanings.map(function(meaning,index){
                    return(
                        <div key={index}>
                            <Meaning meaning={meaning}/>
                        </div>
                    )
                })}
                </p>
            </section>
        </div>
    )
    }
}