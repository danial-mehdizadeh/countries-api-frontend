import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function SinglePage(props) {
  const { contries } = props;
  const { code } = useParams();

  //   const [contries, setContries] = useState([]);
  //   const { url, setUrl } = useState(
  //     `https://restcountries.com/v3.1/alpha/${code}`
  //   );

  const local = () => {};
  useEffect(() => {
    // console.log('hey')
    console.log(contries);

    // localStorage.getItem("contries") ? setIsLocal(true) : alert("something wierd happend")
    // localStorage.getItem("contries") && setContries(localStorage.getItem("contries"))
  }, [contries]);
  return (
    <div>
      {/* {console.log([
        contries.find((element) => {
          return element.cca2.toLowerCase() === code;
        }),
      ])} */}
      {[
        contries.find((element) => {
          return element.cca2.toLowerCase() === code;
        }),
      ] &&
        [
          contries.find((element) => {
            return element.cca2.toLowerCase() === code;
          }),
        ].map((element, key) => {
          return (
            <Container>
              <article>
                <Row>
                  <Col md={4} sm={12}>
                    <a href="/">
                      <Button>Back</Button>{" "}
                    </a>
                    <img
                      alt={element?.name.common + " flag"}
                      className={["img-fluid"]}
                      src={element?.flags?.png}
                      key={"2" + key}
                    />
                  </Col>
                  <Col md={8} sm={12}>
                    <Container>
                      <Row>
                        <h3>{element?.name?.common}</h3>
                      </Row>
                      <Row>
                        <Col md={6} sm={12}>
                          <ul>
                            <li>Population: {element?.population}</li>
                            <li>Region: {element?.region}</li>
                            <li>Subregion: {element?.subregion}</li>
                            <li>Region: {element?.region}</li>
                            <li>
                              Capital:{" "}
                              {element?.capital?.map((element, key) => {
                                return element;
                              })}
                            </li>
                          </ul>
                        </Col>
                        <Col md={6} sm={12}>
                          <ul>
                            <li>
                              Top level domain:{" "}
                              {element?.tld?.map((tld, key) => {
                                return <span key={key}>{tld}</span>;
                              })}
                            </li>
                            <li>
                              Currencies:{" "}
                              {element?.currencies &&
                                Object.keys(element.currencies).map(
                                  (element, key) => {
                                    return <span key={key}>{element}</span>;
                                  }
                                )}
                            </li>
                          </ul>
                        </Col>
                        <Row>
                          <Col>
                            <ul>
                              <li>
                                Borders:{" "}
                                {element?.borders?.map((element, key) => {
                                  return <span key={key}>{element + " "}</span>;
                                })}
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </article>
            </Container>
          );
        })}
    </div>
  );
}
