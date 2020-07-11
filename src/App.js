import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by_rating")
    this.setState({ movies, isLoding: false })
    console.log(movies)
  }
  componentDidMount() {
    this.getMovies();
    setTimeout(() => {
      this.setState({ isLoding: false })
    }, 3000)
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding ? (
          <div className="loader">
            <span className="loader_text">Loding...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
