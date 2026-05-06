
import { useState } from "react";
import { useEffect } from "react";

function Inputs({ movieArrayState, setFilteredMovieArray }) {
    const [search, setSearch] = useState({ titleSearch: "", genreSearch: "" });


    useEffect(
        () => {
            if (search.genreSearch !== "") {
                setFilteredMovieArray(
                    movieArrayState.filter(
                        movie => movie.genre.includes(search.genreSearch)
                    ));
            }
            else if (search.titleSearch !== "") {
                setFilteredMovieArray(
                    movieArrayState.filter(
                        movie => movie.title.toLowerCase().startsWith(search.titleSearch.toLowerCase())
                    ));
            }
            else {
                setFilteredMovieArray(movieArrayState);
            }
        },
        [search, movieArrayState]
    );

    return (
        <div className="search-form-wrapper">
            <form className="form-control d-flex justify-content-around gap-3" data-bs-theme="dark">
                <div>
                    <label className="form-label" htmlFor="search">Cerca un film per nome</label>
                    <input className="form-control" type="text" name="search" id="search" value={search.titleSearch} onChange={
                        (event) => setSearch(
                            {
                                titleSearch: event.target.value,
                                genreSearch: ""
                            }
                        )} />
                </div>
                <div>
                    <label className="form-label" htmlFor="genre-search">Cerca per Genere</label>
                    <select className="form-control" name="genre-search" id="genre-search" value={search.genreSearch} onChange={
                        (event) => setSearch(
                            {
                                titleSearch: "",
                                genreSearch: event.target.value
                            }
                        )
                    }>
                        <option value=""> Tutti </option>
                        <option value="Fantascienza">Fantascienza</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Azione">Azione</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Inputs