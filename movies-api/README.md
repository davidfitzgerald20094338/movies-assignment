# Assignment 2 — Movies API + Integration



Name: David Fitzgerald



This assignment adds a Node/Express backend API with MongoDB + JWT auth and integrates it with the existing React app from Assignment 1.



Repository Structure



movies-assignment/

• movies-api/ — Express + MongoDB API (this assignment)

• react-movie-assignment/ — React app (Assignment 1), now calls the API



What’s New (since A1)



• Backend API (Express + Mongoose + JWT)

• Auth: signup, login, and /auth/me (protected)

• User-specific data: favourites \& watchlist (TMDB IDs)

• Local Mongo collection: simple /api/movies create/list

• TMDB passthrough: backend proxies TMDB endpoints

• Frontend integration: React calls http://localhost:4000

&nbsp;(axios)



How to Run

1\) Backend (movies-api)



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



You should see: “🚀 Server running on http://localhost:4000”

&nbsp;and “✅ Connected to MongoDB”.



2\) Frontend (react-movie-assignment)



Create a .env file (copy from .env.example):

REACT\_APP\_API\_BASE=http://localhost:4000



Install \& start:



cd react-movie-assignment



npm install



npm start (App: http://localhost:3000

)



API Endpoints (Summary)

Auth



• POST /auth/signup — body { email, password } → returns { token }

• POST /auth/login — body { email, password } → returns { token }

• GET /auth/me — requires header Authorization: Bearer <token> → returns { email, favouritesMovies, watchlistMovies }



Header for protected routes:

Authorization: Bearer <token>



User Lists (Movies)



• GET /users/me/favourites/movies

• POST /users/me/favourites/movies — body { "tmdbId": 238 }

• DELETE /users/me/favourites/movies/:tmdbId

• GET /users/me/watchlist/movies

• POST /users/me/watchlist/movies — body { "tmdbId": 603 }

• DELETE /users/me/watchlist/movies/:tmdbId



(Stores TMDB numeric IDs on the user document.)



Local Movies (Mongo collection)



• GET /api/movies

• POST /api/movies — example body: { "title": "Inception", "overview": "...", "releaseDate": "2010-07-16" }



TMDB Passthrough (uses TMDB\_KEY)



• GET /tmdb/movies/top\_rated

• GET /tmdb/tv/popular

• GET /tmdb/tv/:id



Frontend Integration (Pages)



• Top Rated Movies page → calls backend GET /tmdb/movies/top\_rated

• Popular TV Shows page → calls backend GET /tmdb/tv/popular



The React app uses axios with REACT\_APP\_API\_BASE to hit the backend.



Quick Test (Postman)



POST /auth/signup → copy token



GET /auth/me with Authorization: Bearer <token> → returns your user



POST /users/me/favourites/movies { "tmdbId": 238 } → returns \[238]



GET /tmdb/movies/top\_rated → returns TMDB JSON from backend



POST /api/movies (create “Inception”), then GET /api/movies → shows it



Notes



• Do not commit real .env files (examples provided).

• MongoDB Atlas free M0 cluster used.

• CORS is enabled so the React app (port 3000) can call the API (port 4000).

