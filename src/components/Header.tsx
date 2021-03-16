import { IGenre } from "../models/genre.interface";

interface IHeaderProps {
  selectedGenre: IGenre;
}

export function Header({ selectedGenre }: IHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}