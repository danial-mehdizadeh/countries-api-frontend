// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./FetchApi.js";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`App ${theme}`}>
      {/* <BrowserRouter> */}
      <Header theme={theme} setTheme={setTheme} />
      <Body />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
