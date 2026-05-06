import Container from "react-bootstrap/Container";
import MovieList from "./MovieList.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inputs from "./Inputs.jsx";

function Main() {
  return (
    <Container>
        <Row className="g-4 my-4">
            <Col>
                <Inputs/>
            </Col>
        </Row>
        <Row className="g-4">
            <MovieList/>
        </Row>
    </Container>
  )
}

export default Main