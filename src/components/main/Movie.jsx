import Col from "react-bootstrap/Col";

function Movie({title, image, genre}) {
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
        <div className="border border-danger rounded-bottom">
            <img className="img-fluid border-bottom border-danger" src={image} alt={title}/>
            <h2 className="my-3 p-2">{title}</h2>
            <hr/>
            <h4 className="p-2">Genere: {genre}</h4>
        </div>
    </Col>
  )
}

export default Movie