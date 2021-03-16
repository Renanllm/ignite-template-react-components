import { IGenre } from "../models/genre.interface";
import { IMovie } from "../models/movie.interface";
import { Header } from "./Header";

import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface IContentProps {
  movies: IMovie[];
  selectedGenre: IGenre;
}

export function Content({ movies, selectedGenre }: IContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}