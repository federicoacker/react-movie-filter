import Container from "react-bootstrap/Container";
import MovieList from "./MovieList.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddMovie from "./AddMovie.jsx";

function Main({movieArrayState, filteredMovieArray, setMovieArrayState}) {
    return (
        <main>
            <Container>
                
                <Row className="g-4 justify-content-center">
                    <MovieList movieArray={filteredMovieArray} />
                </Row>
                <Row >
                    <Col>
                        <AddMovie movieArray={movieArrayState} setMovieArray={setMovieArrayState} />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main