import Container from "react-bootstrap/Container";
import Inputs from "../main/Inputs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header({movieArrayState, setFilteredMovieArray}) {
    return (
        <header className="bg-dark py-2 mb-5 border-bottom border-danger border-3">
            <Container>
                <h1 className="text-center">Blog di soli film d'azione, fantascienza, thriller e romantici</h1>
                <Row className="g-4 mb-4">
                    <Col>
                        <Inputs
                            movieArrayState={movieArrayState}
                            setFilteredMovieArray={setFilteredMovieArray}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header