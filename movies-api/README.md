# Assignment 2 — Movies API + Integration

Name: David Fitzgerald

## Overview.

This assignment adds a Node/Express backend API with MongoDB + JWT auth and integrates it with the existing React app from Assignment 1.

### Repository Structure

### movies-assignment/

• movies-api/ — Express + MongoDB API (this assignment)

• react-movie-assignment/ — React app (Assignment 1), now calls the API

### What’s New (since A1)

• Backend API (Express + Mongoose + JWT)

• Auth: signup, login, and /auth/me (protected)

• User-specific data: favourites \& watchlist (TMDB IDs)

• Local Mongo collection: simple /api/movies create/list

• TMDB passthrough: backend proxies TMDB endpoints

• Frontend integration: React calls http://localhost:4000

### How to Run

### 1\) Backend (movies-api)

Create a .env file (copy from .env.example) and fill values:

PORT=4000

MONGO\_URI=<your Atlas connection string>

JWT\_SECRET=<any string>

TMDB\_KEY=<your TMDB v3 key>

Install \& start:

cd movies-api

npm install

npm run dev (Server: http://localhost:4000

)

You should see: “Server running on http://localhost:4000”

&nbsp;and “Connected to MongoDB”.
<img width="1462" height="342" alt="npm run" src="https://github.com/user-attachments/assets/994cce7c-5d2a-419b-918b-b99a6e8e58e0" />


### 2\) Frontend (react-movie-assignment)

Create a .env file (copy from .env.example):

REACT\_APP\_API\_BASE=http://localhost:4000

Install \& start:

cd react-movie-assignment

npm install

npm start (App: http://localhost:3000

)
<img width="1912" height="977" alt="Screenshot 2025-08-29 232811" src="https://github.com/user-attachments/assets/8a6b873f-620f-4c1d-9f2a-9442f260cd64" />

### API Endpoints (Summary)

Auth

• POST /auth/signup — body { email, password } → returns { token }

• POST /auth/login — body { email, password } → returns { token }

• GET /auth/me — requires header Authorization: Bearer <token> → returns { email, favouritesMovies, watchlistMovies }

Header for protected routes:

Authorization: Bearer <token>
<img width="1371" height="877" alt="Screenshot 2025-08-29 232903" src="https://github.com/user-attachments/assets/64ecee88-e0a1-40ff-b374-d8e43b406732" />

### User Lists (Movies)

• GET /users/me/favourites/movies

• POST /users/me/favourites/movies — body { "tmdbId": 238 }

• DELETE /users/me/favourites/movies/:tmdbId

• GET /users/me/watchlist/movies

• POST /users/me/watchlist/movies — body { "tmdbId": 603 }

• DELETE /users/me/watchlist/movies/:tmdbId

(Stores TMDB numeric IDs on the user document.)
<img width="1380" height="932" alt="Screenshot 2025-08-29 232952" src="https://github.com/user-attachments/assets/0c357870-eaa3-4311-abe0-1a351de4baf8" />

### Local Movies (Mongo collection)

• GET /api/movies

• POST /api/movies — example body: { "title": "Inception", "overview": "...", "releaseDate": "2010-07-16" }

TMDB Passthrough (uses TMDB\_KEY)

• GET /tmdb/movies/top\_rated

• GET /tmdb/tv/popular

• GET /tmdb/tv/:id
<img width="1408" height="897" alt="Screenshot 2025-08-29 233108" src="https://github.com/user-attachments/assets/15810bd1-e934-467e-91bb-0720069f37cc" />

### Frontend Integration (Pages)

• Top Rated Movies page → calls backend GET /tmdb/movies/top\_rated

• Popular TV Shows page → calls backend GET /tmdb/tv/popular

The React app uses axios with REACT\_APP\_API\_BASE to hit the backend.
<img width="1902" height="920" alt="Screenshot 2025-08-29 233202" src="https://github.com/user-attachments/assets/04e7c9a2-09e3-44e5-8be7-77c49574ac23" />

### Notes

• Do not commit real .env files (examples provided).

• MongoDB Atlas free M0 cluster used.

• CORS is enabled so the React app (port 3000) can call the API (port 4000).

