import React from "react";
import './Photo.css';

export default function Photo(props){
    if (props.photoSrc){
        return(
            <section className="results-section">
                <p class="meaning-title">Relate images</p>
                <div className="row">
                    {props.photoSrc.map(function(photo,index){
                        return(
                            <div className="col-6" key={index}  id="image-section">
                                <a href={photo.src.original} rel="noreferrer">
                                    <img src={photo.src.landscape} alt={props.photoAlt} id="searchImage"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    } else {
        return null;
    }}