import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";

const PokemonCard = () => {
    const [dataFetched, setDataFetched] = useState([]);
    const [apiDatas, setApiDatas] = useState([]);

    //const datas = [];
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=892")
            .then((response) => {
                return response.data.results;
            })
            .then((element) => {
                
                element.forEach(u => {
                    fetch(u.url)
                    .then((apiData)=>{
                        return apiData.json();
                    })
                    .then((apiFetchedData) => {
                        var eachData = {};
                        eachData.name = apiFetchedData.name;
                        eachData.image = apiFetchedData.sprites.other["official-artwork"].front_default;

                        dataFetched.push(eachData);
                        setApiDatas(apiFetchedData);
                    
                    })
                });
            })
            .catch((error) => {
                console.log(error);
            });
        
    },[dataFetched]);

    if(apiDatas.species){
        return (
            
            <div>
                <h1>Welcome To Pokemon world</h1>
                
                <section className="main-card--container">
                
                    {dataFetched.map((currEle) => {
                        return (
                            <div>
                                <div className='card-container'>
                                    <div className="card">
                                        <div className="card-body">
                                            <span>{currEle.name}</span>
                                        
                                            <img src={currEle.image} alt={currEle.name} className="card-media" />  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </section>
            </div>
        )
    }else{
        return <h1>Not loaded</h1>
    }
};

export default PokemonCard;
