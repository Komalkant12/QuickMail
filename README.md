QuickMail
Automatic AI Email Generator
Welcome to QuickMail an Automatic AI Email Generator! This project is a web application developed using the MERN stack (MongoDB, Express, React, Node.js) and integrates OpenAI's GPT API to generate automated email responses.

Introduction
The Automatic AI Email Generator is designed to assist users in generating email responses based on prompts provided by the user. It leverages the power of OpenAI's GPT model to create contextually relevant and grammatically correct email content, saving time and effort in drafting emails.

Installation
1 Clone the repository:

git clone https://github.com/yourusername/ai-email-generator.git
cd ai-email-generator
2.Install server dependencies:


cd server
npm install
3.Install client dependencies:


cd ../client
npm install
4 Set up environment variables:

Create a .env file in the server directory and add the following:

makefile

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
Start the development server:
Start the backend server:

cd server
npm run dev
Start the frontend development server:

cd ../client
npm start
Open your browser:
Navigate to http://localhost:3000 to see the application in action.

Usage
Generate Emails: Enter a prompt and generate email responses using the AI.
Save Emails: Save your generated emails for future reference or copythe generated output.
Compose Email: Enter email in To for receiver & copied email in email form and apply send button.
Email Generation
POST /api/emails/generate: Generate an email based on a user-provided prompt.
Email Management
-GET /api/emails/history: Retrieve the history of generated emails for the logged-in user.

Contributing
We welcome contributions to enhance the functionality and features of this project. To contribute:

Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes.
Push the branch to your forked repository.
Create a pull request describing your changes.
Contact
For any inquiries or feedback, please contact:

Your Name: komalkantdeshmukh112@gmail.com
GitHub: https://github.com/komalkant12
Thank you for using the Automatic AI Email Generator! We hope it makes your email management more efficient and enjoyable.
