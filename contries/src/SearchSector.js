// import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
// import ColorSwitcher from "./ColorSwitcher";

export default function SearchSector(props) {
  const { contries, setContries } = props;
  const [search, setSearch] = useState("");
  console.log(setContries);
  console.log("we are in search sector and this is contries");
  JSON.parse(localStorage.getItem("contries"));
  function searchIt(query, type) {
    if (query !== "selectYourRegion") {
      document.getElementById("selectYourRegion").classList = "d-none";
    }
    if (query === "all") {
      setContries(JSON.parse(localStorage.getItem("contries")));
    } else {
      setContries(
        JSON.parse(localStorage.getItem("contries")).filter((element) => {
          if (element?.continents?.includes(query)) {
            console.log(element);
            return element;
          }
          return false;
        })
      );
    }
  }
  function searchIt2(query) {
    if (query === "") {
      setContries(JSON.parse(localStorage.getItem("contries")));
    } else {
      setContries(
        JSON.parse(localStorage.getItem("contries")).filter((element) => {
          const regex = new RegExp(`${search.toLowerCase()}`);
          if (element?.name?.common?.toLowerCase().match(regex)) {
            console.log(element);
            return element;
          }
          return false;
        })
      );
    }
  }
  const [selectedRegion, setSelectedRegion] = useState("All"); // Declare a state variable...
  // const [searchMe, setSearchMe] = useState("All"); // Declare a state variable...
  useEffect(() => {
    searchIt(selectedRegion);
  }, [selectedRegion]);
  useEffect(() => {
    searchIt2(search);
  }, [search]);

  return (
    <>
      <Container>
        <Row className={["d-flex justify-content-between "]}>
          <Col md={4} sm={12}>
            <article className="xxxi">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  value={search} // ...force the select's value to match the state variable...
                  onChange={(e) => setSearch(e.target.value)} // ... and update the state variable on any change!
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </article>
          </Col>
          <Col md={4} sm={12}>
            <article className="xxxi">
              <Form.Select
                value={selectedRegion} // ...force the select's value to match the state variable...
                onChange={(e) => setSelectedRegion(e.target.value)} // ... and update the state variable on any change!
              >
                <option value={"selectYourRegion"} id={"selectYourRegion"}>
                  Select Your preferred region
                </option>

                <option value={"all"}>All contries</option>
                <option value={"Africa"}>Africa</option>
                <option value={"North America"}>North America</option>
                <option value={"South America"}>South America</option>
                <option value={"Asia"}>Asia</option>
                <option value={"Europe"}>Europe</option>
                <option value={"Oceania"}>Oceania</option>
              </Form.Select>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
}
