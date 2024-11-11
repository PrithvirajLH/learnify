Learnify

Learnify is a Learning Management System (LMS) platform designed to offer a smooth learning process, course production, and dissemination. Learnify, which was developed with Next.js, Clerk, Prisma, Mux, Stripe, and other powerful tools, allows students to access organized, excellent courses and teachers to exchange knowledge.

Getting Started
To get a local copy of Learnify up and running, follow these steps.

Prerequisites
Ensure you have the following installed:

Node.js (v16 or later)
npm or yarn (for package management)
MySQL (for the database)

Installation

1. Install dependencies:
npm install
2. Environment Variables: Create a .env file in the root directory and Set the following environment variables in your .env file:
	
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key

# Prisma
DATABASE_URL=mysql://username:password@localhost:3306/learnify

# Mux
MUX_TOKEN_ID=your_mux_token_id
MUX_TOKEN_SECRET=your_mux_token_secret

# UploadThing
UPLOADTHING_SECRET=your_uploadthing_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

	
3. Run the Prisma migrations:
npx prisma migrate dev

4. Start the development server:
npm run dev

5. Connect stripe using the following code:
stripe listen --forward-to localhost:3000/api/webhook 


Database Schema
Here's an overview of the main models used in Prisma:

Course: Stores course information (title, description, image, price, etc.).
Category: Classifies courses into different categories.
Attachment: Stores information on files attached to courses.
Chapter: Represents sections within a course.
MuxData: Stores Mux video IDs and related data for streaming.
UserProgress: Tracks each user’s progress in a course.
Purchase: Records user purchases of courses.
StripeCustomer: Stores Stripe customer IDs for payment integration.
Refer to prisma/schema.prisma for detailed fields and relationships.

Deployment
This project is deployed using Vercel, ensuring high availability, scalability, and efficient performance. You can access the live version of the website using the following URL:

https://learnify-five-navy.vercel.app/

