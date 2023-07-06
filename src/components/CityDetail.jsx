import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function CityDetail() {
  const [city, setCity] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getCity() {
      try {
        const response = await axios.get(
          `https://api-cities-crud-xh50.onrender.com/api/cities/${id}`
        );
        setCity(response.data.response.city);
      } catch (error) {
        console.error("Error fetching city:", error);
      }
    }

    getCity();
  }, [id]);

  return (
    <>
      <Link
        to="/cities"
        className="arrow_container d-flex align-items-center justify-content-center"
      >
        <BsArrowLeft className="arrow" />
      </Link>
      {city && (
        <div className="city_detail-container" key={city._id}>
          <h1>{city.name}</h1>
          <h4>{city.country}</h4>
          <img className="w-100" src={city.image} alt={city.name} />
          <p>
            <span>About:</span> {city.description}
          </p>
          <p>
            <span>Population:</span> {city.population}
          </p>
        </div>
      )}
    </>
  );
}

export default CityDetail;
