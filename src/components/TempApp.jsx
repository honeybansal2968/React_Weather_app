import React, { useEffect, useState } from 'react'
import axios from 'axios';
const TempApp = () => {
    const [city, setCity] = useState('Mumbai');
    const [temperature, setTemp] = useState('')
    const [search, setSearch] = useState('Delhi');
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await axios.get(url);
            setCity(response.data)
            console.log(response.data);
            setTemp(response.data.main)
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="center_div" style={{ width: '25%', height: '60%', display: 'grid', placeItems: 'center', backgroundColor: 'black', borderRadius: '0.3rem' }}>
                <input type="search" value={search} onChange={(event) => { setSearch(event.target.value) }} style={{ marginTop: '0', height: '1.5rem', borderRadius: '0.3rem' }} />
                {city?(<>
                    <div style={{display:'grid', width:'100%'}}>
                        <h2 style={{ fontSize: '2.5rem',color:'white', width:'100%', textAlign:'center'}}>{temperature.temp} </h2>
                        <h2 style={{ fontSize: '2.5rem', marginLeft: '0rem', color:'white',width:'100%', textAlign:'center'}}>{city.name} </h2>
                    </div>
                    <div style={{ marginTop: '-5rem', width: '100%', height: '2.5rem', color: 'white', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>Max: { temperature.temp_max}</h2>
                        <h2 style={{ fontSize: '1.5rem' }}>Min: { temperature.temp_min}</h2>
                    </div>
                    <div className="firstWave"></div>
                </>):<p style={{color:'white'}}></p>}
            </div>

        </>
    )
}
export default TempApp;