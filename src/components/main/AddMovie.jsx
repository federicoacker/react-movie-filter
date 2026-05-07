import { useState } from "react";
import { sanifyMovie } from "../../utils/functions.js";

const templateMovie = {
    id: null,
    title: "",
    genre: "Fantascienza",
    image: null
};

function AddMovie({ movieArray, setMovieArray }) {
    const [newMovie, setNewMovie] = useState( templateMovie );
    const [fileKey, setFileKey] = useState(0);

    const inputChangeHandler = (event) => {
        const target = event.target;
        let value = target.value;
        if (target.name === "image") {
            value = URL.createObjectURL(target.files[0]);
        }
        setNewMovie(
            {
                ...newMovie,
                id: crypto.randomUUID(),
                [target.name]: value
            }
        )
    }

    const addMovieHandler = (event) => {
        event.preventDefault();
        const [movieSuccess, movie] = sanifyMovie(newMovie);
        setFileKey(crypto.randomUUID());

        if (movieSuccess) {

            setMovieArray(
                [
                    ...movieArray,
                    movie
                ]
            );
            setNewMovie(templateMovie)
        }
        else {
            alert("Il titolo del film non è valido");
            setNewMovie(templateMovie)
        }

    }

    return (
        <form className="form-control d-flex flex-column my-4" data-bs-theme="dark" onSubmit={addMovieHandler}>
            <label className="form-label" htmlFor="add-title">Titolo del film da aggiungere</label>
            <input required className="form-control mb-2" type="text" name="title" id="add-title" value={newMovie.title} onChange={inputChangeHandler} />
            <label className="form-label" htmlFor="add-genre">Genere del film</label>
            <select required className="form-control mb-2" name="genre" id="add-genre" value={newMovie.genre} onChange={inputChangeHandler}>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <label className="form-label" htmlFor="add-image">Poster del film</label>
            <input required key={fileKey} className="form-control mb-2" type="file" name="image" id="add-image" onChange={inputChangeHandler}></input>
            <button className="btn btn-primary">Aggiungi film</button>
            <img src={newMovie.image} />
        </form>
    )
}

export default AddMovie