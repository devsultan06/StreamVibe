import fs from "fs";

// Function to generate a random 6-digit ID for trendingMovies
const generateMovieId = () => {
  return "movie-" + Math.floor(Math.random() * 1000000); // 6-digit number
};

// Function to generate a random 6-digit ID for trendingShows
const generateShowId = () => {
  return "show-" + Math.floor(Math.random() * 1000000); // 6-digit number
};

// File path for db.json
const dbFilePath = "./db.json";

// Function to update IDs for each movie/show
const updateIds = (items, generateId) => {
  return items.map((item) => ({
    ...item,
    id: generateId(), // Assign a random unique ID based on type
  }));
};

// Read the db.json file, update IDs, and save back the updated data
const updateDbJson = () => {
  fs.readFile(dbFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${dbFilePath}:`, err);
      return;
    }

    const dbData = JSON.parse(data);

    // Update the IDs for trendingMovies and trendingShows
    const updatedMovies = updateIds(dbData.trendingMovies, generateMovieId);
    const updatedShows = updateIds(dbData.trendingShows, generateShowId);

    // Combine the updated data into dbData
    dbData.trendingMovies = updatedMovies;
    dbData.trendingShows = updatedShows;

    // Write the updated data back into db.json
    fs.writeFile(dbFilePath, JSON.stringify(dbData, null, 2), (err) => {
      if (err) {
        console.error(`Error writing ${dbFilePath}:`, err);
        return;
      }
      console.log(
        "db.json has been updated with new unique 6-digit IDs for movies and shows."
      );
    });
  });
};

updateDbJson();
