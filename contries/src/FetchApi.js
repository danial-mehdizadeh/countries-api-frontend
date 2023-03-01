import React, { useEffect } from "react";
import { useState } from "react";
// import Image from "react-bootstrap/Image";
import "./customize.css";
import Contact from "./Contact";
import SinglePage from "./SinglePage";
import Home from "./Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
      <Routes>
        <Route
          path={"/"}
          element={<Home contries={contries} setContries={setContries} />}
        ></Route>
        <Route
          path={"/contries/:code"}
          element={<SinglePage contries={contries} />}
        ></Route>

        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Body;
