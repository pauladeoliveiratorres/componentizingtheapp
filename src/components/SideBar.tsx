import { useMovies } from "../MoviesContext"
import { Button } from "./Button";

export function SideBar() {
  const {genres, handleClickButton, SelectedGenreId} = useMovies();

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={SelectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}