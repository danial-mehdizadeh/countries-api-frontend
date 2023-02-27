import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";

export default function SinglePage(props) {
  const { fetchAll } = props;
  const { code } = useParams();
  const { contries, setContries } = useState([]);

  const { url, setUrl } = useState(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  useEffect(() => {
    // console.log('hey')
    fetchAll(url);

    // localStorage.getItem("contries") ? setIsLocal(true) : alert("something wierd happend")
    // localStorage.getItem("contries") && setContries(localStorage.getItem("contries"))
  }, [url]);

  {
    {
      setContries(JSON.stringify(localStorage.getItem("contries")));
      console.log(contries);
    }
    contries
      .find((element) => element.cca2.toLowerCase() === code)
      .map((element, key) => {
        return (
          <Col sm={12}>
            <article>
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
          </Col>
        );
      });
  }
}
