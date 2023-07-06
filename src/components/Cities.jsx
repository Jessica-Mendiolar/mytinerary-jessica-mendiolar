import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "../styles/cities.css";
import { BsFillGeoFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cities() {
  const [cities, setCities] = useState([]);
  let citiesDb;
  async function getData() {
    citiesDb = await axios.get(
      "https://api-cities-crud-xh50.onrender.com/api/cities"
    );
    setCities(citiesDb.data.response.cities);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="title text-center lead mb-0">Cities</h1>
      <div className="container_city d-flex flex-wrap justify-content-center justify-content-md-between my-4">
        {cities?.map((city) => (
          <Link
            to={`/cityDetails/${city._id}`}
            className="city d-flex flex-column justify-content-end p-3"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${city.image})`,
            }}
            key={city._id}
          >
            <h4 className="mb-0">{city.name}</h4>
            <div className="point d-flex align-items-center gap-1">
              <BsFillGeoFill className="mb-0" />
              <p className="mb-0">{city.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Cities;
