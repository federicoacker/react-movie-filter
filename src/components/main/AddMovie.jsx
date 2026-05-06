import { useState } from "react"

function AddMovie({ movieArray, setMovieArray }) {
    const [newMovie, setNewMovie] = useState(
        {
            title: null,
            genre: null,
            img: null
        }
    )
    
    return (
        <form className="form-control d-flex flex-column">
            <label htmlFor="add-title">Titolo del film da aggiungere</label>
            <input type="text" name="title" id="add-title" />
            <label htmlFor="add-genre">Genere del film</label>
            <select name="genre" id="add-genre">
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <label htmlFor="add-image">Poster del film</label>
            <input type="file" name="image" id="add-image"></input>
        </form>
    )
}

export default AddMovie