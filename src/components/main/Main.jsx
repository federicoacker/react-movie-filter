import Container from "react-bootstrap/Container";
import MovieList from "./MovieList.jsx";
import Row from "react-bootstrap/Row";

function Main() {
  return (
    <Container>
        <Row>
            <MovieList/>
        </Row>
    </Container>
  )
}

export default Main