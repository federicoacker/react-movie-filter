import Container from "react-bootstrap/Container";
import MovieList from "./MovieList.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inputs from "./Inputs.jsx";
import { movieArray } from "../../utils/data.js";
import { useState } from "react";
import AddMovie from "./AddMovie.jsx";

function Main() {
    const [movieArrayState, setMovieArrayState] = useState(movieArray);
    const [filteredMovieArray, setFilteredMovieArray] = useState(movieArrayState);
    return (
        <Container>
            <Row className="g-4 my-4">
                <Col>
                    <Inputs
                        movieArrayState={movieArrayState}
                        setMovieArrayState={setMovieArrayState}
                        setFilteredMovieArray={setFilteredMovieArray}
                    />
                </Col>
            </Row>
            <Row className="g-4">
                <MovieList movieArray={filteredMovieArray} />
            </Row>
            <Row>
                <Col>
                    <AddMovie movieArray={movieArrayState} setMovieArray={setMovieArrayState}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Main