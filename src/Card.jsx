import React, { useEffect, useState } from "react";
import '../src/App.css';

function Card() {

    const [data, setData]= useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err){
             console.log(err);
        }
       
    }
    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <>
        <section>
            <h2> 🔴 Live</h2>
            <h2>Covid19 Tracker</h2>
            <ul>
                <li>
                    <div className="rec">
                        <div>
                            <p className="para"> Recovered</p>
                            <p className="secP">{data.recovered}</p>
                        </div>
                
                    </div>
                </li>
                <li>
                    <div className="death">
                        <div>
                            <p className="para"><span>Total</span> Deaths</p>
                            <p className="secP">{data.deaths}</p>
                        </div>
                
                    </div>
                </li>
                <li>
                    <div className="active">
                        <div>
                            <p className="para"><span>Total</span> Active</p>
                            <p className="secP">{data.active}</p>
                        </div>
                
                    </div>
                </li>
                <li>
                    <div className="con">
                        <div>
                            <p className="para"> Confirmed</p>
                            <p className="secP">{data.confirmed}</p>
                        </div>
                
                    </div>
                </li>
                
            </ul>
        </section>
        </>
       
    )
}

export default Card;