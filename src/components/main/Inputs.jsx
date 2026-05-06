
import { useState } from "react";
import { useEffect } from "react";

function Inputs({movieArray, setMovieArray}) {
    const [search, setSearch] = useState("");
    const [genreSearch, setGenreSearch] = useState("");

    useEffect(
        () => {
            
            return () => {
                setSearch("");
                setGenreSearch("");
            }
        },
        [search, genreSearch]
    );

    return (
        <form className="form-control d-flex justify-content-around" data-bs-theme="dark">
            <div>
                <label className="form-control" htmlFor="search">Cerca un film per nome</label>
                <input className="form-control" name="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div>
                <label htmlFor="genre-search">Cerca per Genere</label>
                <select className="form-control" name="genre-search" value={genreSearch} onChange={(event)=> setGenreSearch(event.target.value)}>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </div>
        </form>
    )
}

export default Inputs