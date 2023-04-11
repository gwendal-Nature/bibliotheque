import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <div className='Book'>
            <h1>Vos livres</h1>
            {data.map((Books) => (
                <div key={Books.name.common}>
                    <h2>{Books.name.common}</h2>
                </div>
            ))}
        </div>
    );
};

export default Countries;