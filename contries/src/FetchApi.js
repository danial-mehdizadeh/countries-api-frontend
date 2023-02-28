import React, { useEffect } from "react";
import { useState } from "react";
// import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./customize.css";
import SearchSector from "./SearchSector";
import Contact from "./Contact";
import SinglePage from "./SinglePage";

import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
function Body() {
  const [contries, setContries] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  // localStorage.getItem("contries") &&
  //   setMakeLocal(false) &&
  //   setContries(localStorage.getItem("contries"));

  const fetchAll = async (query) => {
    const res = await fetch(query);
    const json = await res.json();

    localStorage.setItem("contries", JSON.stringify(json));
    setContries(JSON.parse(localStorage.getItem("contries")));
    // const myPromise = new Promise((resolve, reject) => {

    //   const res = fetch("https://restcountries.com/v3.1/all")
    //   res ? resolve(res.json()) : reject("No")
    // });
    // myPromise.then((data) => {
    //   localStorage.setItem("allContries", data)
    //   setContries(localStorage.getItem("allContries"))
    // }

    // ).catch((err) => {
    //   alert('Your connection is unstable')
    // })
  };
  useEffect(() => {
    // console.log('hey')
    fetchAll("https://restcountries.com/v3.1/all");

    // localStorage.getItem("contries") ? setIsLocal(true) : alert("something wierd happend")
    // localStorage.getItem("contries") && setContries(localStorage.getItem("contries"))
  }, [url]);

  // useEffect(() => {
  //   const res = fetch("https://restcountries.com/v3.1/all").then(
  //     response => response.json()
  //   ).then((json) => {setContries(json)
  //         localStorage.setItem("allContries", contries);

  //   })
  // localStorage.setItem("allContries", contries);
  // setContries(localStorage.getItem("allContries"));
  // console.log(contries);
  // },[contriesLocal])
  // console.log()
  // useEffect(() => {
  //     fetchAll();
  //     // localStorage.setItem("allContries", contries);
  //     // setContries(localStorage.getItem("allContries"));
  //     // console.log(contries);
  //   }else{
  //     console.log(contries)
  //     console.log(localStorage.getItem("allContries"), "hey")

  //     setContries(localStorage.getItem("allContries"))
  //     console.log(contries)
  //     console.log(localStorage.getItem("allContries"), "jasem for life, bye")

  //   }
  //   // console.log(localStorage.getItem("allContries"))
  // });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
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
        </Route>
        <Route path={"/contries/:code"}>
          <SinglePage
            contries={contries}
            setContries={setContries}
          ></SinglePage>
        </Route>

        <Route path={"/contact"}>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Body;
