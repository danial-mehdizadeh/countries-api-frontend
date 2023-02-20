import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Body() {
  const [contries, setContries] = useState(null);
  async function fetchAll() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    setContries(await res.json());
  }
  useEffect(() => {
    if (!localStorage.getItem("allContries")) {
      fetchAll();
      localStorage.setItem("allContries", contries);
      setContries(localStorage.getItem("allContries"));
      console.log(contries);
    }
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {contries?.slice(0, 10).map((element, key) => {
            return (
              <Col md={3} sm={12}>
                <article>
                  <h3 key={key + "1"}>{element.name.common}</h3>
                  <img
                    className={["img-fluid"]}
                    src={element.flags?.png}
                    key={"2" + key}
                  />
                  <ul>
                    <li>Population: {element.population}</li>
                    <li>Region: {element.region}</li>
                    <li>
                      Capital:{" "}
                      {element.capital.map((element, key) => {
                        return element;
                      })}
                    </li>
                  </ul>
                </article>
              </Col>
            );
          })}
        </Row>
        <article>
          <h1>Hi!</h1>
        </article>
      </Container>
    </div>
  );
}
