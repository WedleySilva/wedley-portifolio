import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import HeaderComp from "./components/HeaderComp";
import MainComp from "./components/MainComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <Router>
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </Router>
  );
}

export default App;
