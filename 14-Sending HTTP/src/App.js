import React, { useEffect, useState, useCallback } from "react";
import AddMovie from "./components/AddMovie"
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchMoviesHandler= useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const filmsFetch = await fetch("https://react-course-http-1f81c-default-rtdb.firebaseio.com/movies.json");
        if(!filmsFetch.ok){
          throw new Error('Something went wrong!');
        }
      const filmsData = await filmsFetch.json();
        console.log(filmsData)
        const loadedMovies = []

        for(const key in filmsData){
            loadedMovies.push({
                id:key,
                title: filmsData[key].title,
                openingText: filmsData[key].openingText,
                releaseDate: filmsData[key].releaseDate
            })
        }

    //   const transformedMoviesData = loadedMovies.map((movieData) => {
    //     return {
    //       id: movieData.episode_id,
    //       title: movieData.title,
    //       releaseDate: movieData.release_date,
    //       openingText: movieData.opening_crawl,
    //     };
    //   });
      setMovies(loadedMovies);
    } catch (error) {
        console.log(error);
        setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie){
    try {
        const response = await fetch("https://react-course-http-1f81c-default-rtdb.firebaseio.com/movies.json", {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error)
    }
  }

  let content = <p>Found no movies</p>;
  if(movies.length > 0 ){
    content = <MoviesList movies={movies} />
  }
  if(error){
    content = <p>{error}</p>
  }
  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
        <section>
            <AddMovie onAddMovie={addMovieHandler}/>
        </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
