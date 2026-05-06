import { useState } from "react"

function Inputs() {
    const [search, setSearch] = useState("");
    return (
        <form className="form-control d-flex justify-content-around" data-bs-theme="dark">
            <div>
                <label className="form-control" htmlFor="search">Cerca un film per nome</label>
                <input className="form-control" name="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div>
                <label htmlFor="genre-search">Cerca per Genere</label>
                <select className="form-control" name="genre-search">
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>
            </div>
            <button className="btn btn-primary w-25" type="Submit"> Cerca </button>
        </form>
    )
}

export default Inputs