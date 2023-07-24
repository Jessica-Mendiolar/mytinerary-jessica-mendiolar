import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillGeoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/cities.css";
import { useDispatch } from "react-redux";
import citiesActions from "../redux/reducers/actions/citiesActions";

function Cities() {
  const dispatch = useDispatch()
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getData() {
    const response = await axios.get(
      "https://api-cities-crud-xh50.onrender.com/api/cities"
    );
    setCities(response.data.response.cities);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCities = cities.filter((city) => {
    return city.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderCities = filteredCities.length > 0 ? filteredCities : null;

  return (
    <>
    <br />
      <h1 className="title text-center lead mb-0">Cities</h1>
      <div className="input_container d-flex justify-content-end mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder= "Type to search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div
        className={`container_city d-flex flex-wrap justify-content-center my-4 ${
          !renderCities
            ? "justify-content-center"
            : "justify-content-md-between"
        }`}
      >
        {renderCities ? (
          renderCities.map((city) => (
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
          ))
        ) : (
          <p>No se encontraron ciudades</p>
        )}
      </div>
    </>
  );
}

export default Cities;
