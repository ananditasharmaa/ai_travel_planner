import React from 'react';
import { Link } from 'react-router-dom'

function PlaceCardItem({ dayKey, day, apiKey }) {
  const getMapImageUrl = (latitude, longitude) => {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x400&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;
  };

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-xl'>
        {dayKey.toUpperCase()} - Best Time: {day.bestTimeToVisit}
      </h2>

      <div>
        {day.plan?.map((place, placeIndex) => (
          <div key={placeIndex} className='p-4 border-b'>
            <h3 className='font-semibold text-lg'>{place.placeName}</h3>
            <p>{place.placeDetails}</p>
            <p>
              <strong>Ticket Pricing:</strong> {place.ticketPricing}
            </p>
            <p>
              <strong>Time to Travel:</strong> {place.timeToTravel}
            </p>
            {/* Static Map Image */}
            <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
              <img
                src={getMapImageUrl(
                  place.geoCoordinates.latitude,
                  place.geoCoordinates.longitude
                )}
                alt={`Map of ${place.placeName}`}
                className='w-40 h-40 object-cover mt-2'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceCardItem;
