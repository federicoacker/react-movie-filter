import { useState } from "react"

function AddMovie({ movieArray, setMovieArray }) {
    const [newMovie, setNewMovie] = useState(
        {
            id: null,
            title: "",
            genre: "Fantascienza",
            image: null
        }
    )

    const changeHandler = (event) => {
        const target = event.target;
        let value = target.value;
        if(target.name === "image"){
            value = URL.createObjectURL(target.files[0]);
        }
        setNewMovie(
            {
                ...newMovie,
                id: crypto.randomUUID,
                [target.name]:value
            }
        )
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setMovieArray(
            [
                ...movieArray,
                newMovie
            ]
        );
        setNewMovie(
            {
                id: null,
                title: "",
                genre: "",
                image: null
            }
        )
    }

    return (
        <form className="form-control d-flex flex-column my-4" data-bs-theme="dark" onSubmit={submitHandler}>
            <label className="form-label" htmlFor="add-title">Titolo del film da aggiungere</label>
            <input className="form-control my-2" type="text" name="title" id="add-title" value={newMovie.title} onChange={changeHandler}/>
            <label className="form-label" htmlFor="add-genre">Genere del film</label>
            <select className="form-control my-2" name="genre" id="add-genre" value={newMovie.genre} onChange={changeHandler}>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <label className="form-label" htmlFor="add-image">Poster del film</label>
            <input className="form-control my-2" type="file" name="image" id="add-image" onChange={changeHandler}></input>
            <button className="btn btn-primary">Aggiungi film</button>
            <img src={newMovie.image} alt={newMovie.title}/>
        </form>
    )
}

export default AddMovie