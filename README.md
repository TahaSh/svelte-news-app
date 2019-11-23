# Svelte News App — Frontend

A fullstack application built with Svelte/Sapper on the frontend and Node/Express on the backend.

### [Demo](https://svelte-news-app.herokuapp.com/)&nbsp;&nbsp;&nbsp;&nbsp;[Backend](https://github.com/TahaSh/svelte-news-app-backend)

This repo demonstrates almost everything you need to know to build a complete fullstack application using Svelte/Sapper and Node/Express. This demo covers things like:
- Authentication/Authorization with JWT
- Maintaining logged-in user data with sessions and cookies
- Routing
- Communicating with a backend API
- Handling errors
- Pagination
- Loading states
- Preloading data
- Prefetching data
- Rendering nested components recursively
- More stuff

# Running the demo

1. Install and run [the backend project](https://github.com/TahaSh/svelte-news-app-backend)
2. Download this repo
3. Create `.env` in the root directory
4. Add `API_BASE_URL=http://localhost:5000` (assuming that the backend will run on `localhost:5000`)
5. Run `npm install`
6. Run `npm run dev`

To build it and run it in production mode:
1. Run `npm run build`
2. Run `npm run start`

# I explain how to build this demo from scratch on [my blog](https://tahazsh.com/fullstack-app-with-svelte-and-node-part-1) (it's updated weekly).
