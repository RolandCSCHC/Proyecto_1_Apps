import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './TripPage.css';

const TripPage = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/trips/${tripId}`);
        setTrip(response.data);
      } catch (error) {
        console.error('Error fetching trip:', error);
      }
    };

    fetchTrip();
  }, [tripId]);

  if (!trip) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="trip-page">
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>

      <div className="image-gallery">
        {trip.images.map((image, index) => (
          <img key={index} src={image} alt={` ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default TripPage;
