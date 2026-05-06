import Container from "react-bootstrap/Container";
import MovieList from "./MovieList.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inputs from "./Inputs.jsx";
import { movieArray } from "../../utils/data.js";
import { useState } from "react";

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
        </Container>
    )
}

export default Main