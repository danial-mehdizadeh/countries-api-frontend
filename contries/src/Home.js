import SearchSector from "./SearchSector";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
  const { contries, setContries } = props;
  return (
    <div>
      {console.log(contries)}
      <SearchSector contries={contries} setContries={setContries} />
      <Container>
        <Row>
          {contries?.map((element, key) => {
            return (
              <Col md={3} sm={12}>
                <Link to={`/contries/${element.cca2.toLowerCase()}`}>
                  <article style={{ cursor: "pointer" }}>
                    <h3 key={key + "1"}>{element.name.common}</h3>
                    <img
                      alt={element.name.common + " flag"}
                      className={["img-fluid"]}
                      src={element.flags?.png}
                      key={"2" + key}
                    />
                    <ul>
                      <li>Population: {element.population}</li>
                      <li>Region: {element.region}</li>
                      <li>
                        Capital:{" "}
                        {element.capital?.map((element, key) => {
                          return element;
                        })}
                      </li>
                    </ul>
                  </article>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
