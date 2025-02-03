import fs from "fs";

const generateMovieId = () => {
  return "movie-" + Math.floor(Math.random() * 1000000);
};

const generateShowId = () => {
  return "show-" + Math.floor(Math.random() * 1000000); 
};

const dbFilePath = "./db.json";

const updateIds = (items, generateId) => {
  return items.map((item) => ({
    ...item,
    id: generateId(), 
  }));
};

const updateDbJson = () => {
  fs.readFile(dbFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${dbFilePath}:`, err);
      return;
    }

    const dbData = JSON.parse(data);

    const updatedMovies = updateIds(dbData.trendingMovies, generateMovieId);
    const updatedShows = updateIds(dbData.trendingShows, generateShowId);

    dbData.trendingMovies = updatedMovies;
    dbData.trendingShows = updatedShows;

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
