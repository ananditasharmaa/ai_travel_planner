# AI Trip Planner

AI Trip Planner is an intelligent, full-stack web application designed to assist travelers in planning personalized trips. Leveraging the power of Gemini AI, Firebase, and TailwindCSS, this tool generates tailored travel itineraries, including destination recommendations, activities, and accommodations, all based on user preferences.

With an easy-to-use interface and smart AI-driven suggestions, the AI Trip Planner makes trip planning a breeze.

## Key Features

- **Personalized Itinerary Generation**: AI-powered recommendations for destinations, activities, and accommodations tailored to your preferences and travel dates.
- **Real-Time Information**: Integrates with external APIs to provide up-to-date details such as weather forecasts, popular attractions, and local events.
- **User Profiles**: Save your travel preferences and previous trips to receive more relevant recommendations.
- **Easy Authentication**: Secure user login with Firebase Authentication.
- **Responsive UI**: A seamless experience across all devices, thanks to TailwindCSS.

## Technologies Used

- **Frontend**:
  - React.js for building the user interface
  - TailwindCSS for responsive and modern design
  - Gemini AI for smart travel recommendations
- **Backend**:
  - Firebase for user authentication and database
- **APIs**: Integration with weather and travel-related APIs
- **Deployment**: Firebase Hosting (optional for production deployment)

## Installation and Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Firebase Account** for authentication and backend services

### Step-by-Step Guide

1. **Clone the repository**:
   ```bash
Navigate to the project folder:

bash
Copy code
cd ai-trip-planner
Install the necessary dependencies:

bash
Copy code
npm install
Configure Firebase:

Create a new project in the Firebase Console.
Enable Firebase Authentication.
Obtain your Firebase configuration details and create a .env file in the root directory of the project.
Add your Firebase config to the .env file:
env
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Start the development server:

bash
Copy code
npm start
Open the app:
Go to http://localhost:3000 in your browser to view the application.

How to Use
Create an Account: Sign up or log in using Firebase Authentication for a personalized experience.
Start Planning Your Trip: Enter your travel preferences, such as destination type, budget, and activities you enjoy.
Get AI Recommendations: Based on your inputs, the AI will generate a customized travel itinerary for your trip.
Save Your Itinerary: Save your trip details for future reference or to share with friends.
Contributing
We welcome contributions to improve the AI Trip Planner project. To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Open a pull request to merge your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Gemini AI: For providing powerful AI-driven travel recommendations.
Firebase: For secure authentication and backend services.
TailwindCSS: For providing a responsive and modern UI framework.
