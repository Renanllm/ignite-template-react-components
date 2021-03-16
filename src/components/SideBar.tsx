import { IGenre } from "../models/genre.interface";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface ISideBarProps {
  genres: IGenre[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}