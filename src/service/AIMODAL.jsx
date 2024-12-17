import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget, give me Hotel options list with hotel names, hotel address, price, hotel image url, geo cordinates, rating, descriptions, and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, time to travel to each of the locations for {totalDays} days with each day plan with best time to visit in JSON format.Dont add unnecessary text simply generate in JSON format "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n    \"hotels\": [\n        {\n          \"hotelName\": \"Hôtel Saint-André des Arts\",\n          \"hotelAddress\": \"62 Rue Saint-André des Arts, 75006 Paris, France\",\n          \"price\": \"€200-€300 per night\",\n          \"hotelImageUrl\": \"https://example.com/hotel1.jpg\",\n          \"geoCoordinates\": {\"latitude\": 48.8510, \"longitude\": 2.3416},\n           \"rating\": 4.5,\n          \"description\": \"Charming hotel in the heart of the Latin Quarter, known for its artistic ambiance and proximity to attractions.\"\n\n        },\n        {\n          \"hotelName\": \"Le Bristol Paris\",\n           \"hotelAddress\": \"112 Rue du Faubourg Saint-Honoré, 75008 Paris, France\",\n          \"price\": \"€800-€1200 per night\",\n          \"hotelImageUrl\": \"https://example.com/hotel2.jpg\",\n          \"geoCoordinates\": {\"latitude\": 48.8719, \"longitude\": 2.3125},\n          \"rating\": 4.8,\n          \"description\": \"Luxury hotel offering exceptional service and exquisite amenities with a rooftop pool and views.\"\n\n        },\n        {\n         \"hotelName\": \"Hotel Fabric\",\n         \"hotelAddress\": \"31 Rue de la Folie Méricourt, 75011 Paris, France\",\n          \"price\": \"€150-€250 per night\",\n          \"hotelImageUrl\": \"https://example.com/hotel3.jpg\",\n          \"geoCoordinates\": {\"latitude\": 48.8679, \"longitude\": 2.3699},\n          \"rating\": 4.3,\n          \"description\": \"Stylish hotel with industrial-chic decor in the trendy Oberkampf district, near bars and restaurants.\"\n\n        }\n      ],\n\n    \"itinerary\": {\n      \"day1\": {\n        \"bestTimeToVisit\": \"Morning\",\n        \"plan\": [\n          {\n            \"placeName\": \"Eiffel Tower\",\n            \"placeDetails\": \"Iconic wrought-iron lattice tower offering breathtaking views of Paris.\",\n             \"placeImageUrl\": \"https://example.com/eiffel.jpg\",\n              \"geoCoordinates\": {\"latitude\": 48.8584, \"longitude\": 2.2945},\n            \"ticketPricing\": \"€25-€35 per person\",\n            \"timeToTravel\": \"15 minutes by Metro from Latin Quarter\"\n\n          },\n          {\n            \"placeName\": \"Seine River Cruise\",\n            \"placeDetails\":\"Relaxing boat tour along the Seine, passing landmarks with picturesque views.\",\n           \"placeImageUrl\":\"https://example.com/seine.jpg\",\n             \"geoCoordinates\": {\"latitude\": 48.8566, \"longitude\": 2.3522},\n            \"ticketPricing\":\"€15-€20 per person\",\n            \"timeToTravel\": \"5 minutes from Eiffel tower\"\n          },\n          {\n              \"placeName\": \"Trocadéro Gardens\",\n              \"placeDetails\": \"Gardens offering the best views of the Eiffel Tower, beautiful for a walk and photoshoot.\",\n               \"placeImageUrl\":\"https://example.com/trocadero.jpg\",\n               \"geoCoordinates\": {\"latitude\": 48.8623, \"longitude\": 2.2915},\n              \"ticketPricing\": \"Free\",\n              \"timeToTravel\": \"Walkable distance from the Eiffel Tower\"\n            }\n        ]\n      },\n      \"day2\": {\n        \"bestTimeToVisit\": \"Morning\",\n        \"plan\": [\n          {\n            \"placeName\": \"Louvre Museum\",\n             \"placeDetails\": \"World-renowned art museum housing masterpieces like the Mona Lisa and Venus de Milo.\",\n             \"placeImageUrl\": \"https://example.com/louvre.jpg\",\n             \"geoCoordinates\": {\"latitude\": 48.8606, \"longitude\": 2.3376},\n            \"ticketPricing\": \"€17 per person\",\n            \"timeToTravel\": \"20 minutes by Metro from Hotel\"\n\n          },\n          {\n            \"placeName\": \"Tuileries Garden\",\n            \"placeDetails\": \"Beautiful public garden connecting the Louvre to Place de la Concorde, excellent for strolling.\",\n             \"placeImageUrl\": \"https://example.com/tuileries.jpg\",\n               \"geoCoordinates\": {\"latitude\": 48.8639, \"longitude\": 2.3265},\n            \"ticketPricing\":\"Free\",\n             \"timeToTravel\": \"Walkable distance from Louvre\"\n          },\n            {\n               \"placeName\": \"Arc de Triomphe\",\n               \"placeDetails\":\"Triumphal arch at the end of Champs-Élysées, offering panoramic city views.\",\n               \"placeImageUrl\":\"https://example.com/arc.jpg\",\n                \"geoCoordinates\": {\"latitude\": 48.8738, \"longitude\": 2.2950},\n              \"ticketPricing\": \"€13 per person\",\n               \"timeToTravel\":\"15 minutes by Metro from Tuileries Garden\"\n            }\n        ]\n      },\n      \"day3\": {\n       \"bestTimeToVisit\": \"Afternoon\",\n        \"plan\": [\n          {\n            \"placeName\":\"Notre-Dame Cathedral\",\n           \"placeDetails\":\"Historic Gothic cathedral on Île de la Cité, architectural masterpiece of Paris.\",\n           \"placeImageUrl\":\"https://example.com/notredame.jpg\",\n           \"geoCoordinates\": {\"latitude\": 48.8530, \"longitude\": 2.3498},\n            \"ticketPricing\":\"Free (access to courtyard and exterior), charges for tower\",\n            \"timeToTravel\": \"25 minutes by Metro from hotel\"\n          },\n           {\n            \"placeName\":\"Sainte-Chapelle\",\n            \"placeDetails\":\"Stunning Gothic chapel with incredible stained-glass windows.\",\n            \"placeImageUrl\":\"https://example.com/saintechapelle.jpg\",\n            \"geoCoordinates\": {\"latitude\": 48.8557, \"longitude\": 2.3447},\n            \"ticketPricing\":\"€11.50 per person\",\n            \"timeToTravel\": \"5 minutes walk from Notre Dame\"\n          },\n           {\n             \"placeName\": \"Latin Quarter\",\n             \"placeDetails\": \"Bustling student district with cafes, bookstores, and the Sorbonne University.\",\n             \"placeImageUrl\": \"https://example.com/latin.jpg\",\n              \"geoCoordinates\": {\"latitude\": 48.8510, \"longitude\": 2.3416},\n            \"ticketPricing\":\"Free (exploration)\",\n            \"timeToTravel\":\"5 minutes walk from Sainte-Chapelle\"\n           }\n        ]\n      },\n      \"day4\": {\n       \"bestTimeToVisit\":\"Morning\",\n        \"plan\":[\n          {\n            \"placeName\": \"Montmartre\",\n             \"placeDetails\":\"Picturesque hilltop neighborhood known for Sacré-Cœur Basilica and artist square (Place du Tertre).\",\n            \"placeImageUrl\": \"https://example.com/montmartre.jpg\",\n             \"geoCoordinates\": {\"latitude\": 48.8866, \"longitude\": 2.3432},\n            \"ticketPricing\":\"Free (access to the area, charges for Basilica)\",\n            \"timeToTravel\":\"20 minutes by Metro from Hotel\"\n          },\n           {\n             \"placeName\": \"Sacré-Cœur Basilica\",\n             \"placeDetails\": \"Beautiful Basilica on the top of Montmartre hill overlooking Paris.\",\n              \"placeImageUrl\": \"https://example.com/sacrecoeur.jpg\",\n               \"geoCoordinates\": {\"latitude\": 48.8867, \"longitude\": 2.3428},\n             \"ticketPricing\": \"Free access\",\n             \"timeToTravel\": \"Walkable distance in Montmartre\"\n           },\n           {\n             \"placeName\": \"Place du Tertre\",\n             \"placeDetails\":\"Artist square where artists create and sell paintings, excellent for a stroll.\",\n             \"placeImageUrl\":\"https://example.com/placedutertre.jpg\",\n               \"geoCoordinates\": {\"latitude\": 48.8869, \"longitude\": 2.3420},\n            \"ticketPricing\": \"Free (exploration)\",\n            \"timeToTravel\": \"Walkable distance in Montmartre\"\n            }\n        ]\n      },\n      \"day5\": {\n      \"bestTimeToVisit\":\"Morning\",\n       \"plan\": [\n        {\n           \"placeName\": \"Musée d'Orsay\",\n            \"placeDetails\":\"Art museum in a former railway station featuring Impressionist and Post-Impressionist masterpieces.\",\n             \"placeImageUrl\":\"https://example.com/orsay.jpg\",\n             \"geoCoordinates\": {\"latitude\": 48.8600, \"longitude\": 2.3266},\n            \"ticketPricing\": \"€16 per person\",\n           \"timeToTravel\": \"20 minutes by Metro from Hotel\"\n          },\n           {\n             \"placeName\":\"Shopping on Champs-Élysées\",\n             \"placeDetails\":\"Famous avenue with luxury boutiques, cafes, and flagship stores, perfect for buying souvenirs.\",\n            \"placeImageUrl\":\"https://example.com/champs.jpg\",\n             \"geoCoordinates\": {\"latitude\": 48.8686, \"longitude\": 2.3083},\n            \"ticketPricing\":\"Variable (spending money)\",\n           \"timeToTravel\": \"15 minutes by Metro from Orsay Museum\"\n          },\n         {\n          \"placeName\": \"Departure\",\n          \"placeDetails\":\"Head to the airport for your flight out of Paris.\",\n           \"placeImageUrl\":\"https://example.com/airport.jpg\",\n           \"geoCoordinates\": {\"latitude\": 48.8430, \"longitude\": 2.3547},\n           \"ticketPricing\":\"N/A\",\n           \"timeToTravel\":\"Depends on your flight time\"\n         }\n        ]\n      }\n    }\n  }\n}\n```\n"},
        ],
      },
    ],
  });