import { useEffect, useState } from "react";
import React from "react";
import axios from 'axios';
import '../styles/cities.css';
import { BsTools } from "react-icons/bs";

function Cities() {
    const [cities, setCities] = useState([])
    let citiesDb
    async function getData() {
        citiesDb = await axios.get("https://api-cities-crud-xh50.onrender.com/api/cities")
        setCities(citiesDb.data.response.cities)
    }
    useEffect(() => {
        getData()

    }, [])
    useEffect(() => {
        console.log(cities)

    }, [cities])
    return (
        <div className="container">
            <h1 className="title text-center lead">Page under construction <BsTools /></h1>
        </div>
    )
}

export default Cities;