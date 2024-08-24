import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MenuButton from "./components/MenuButton";
import HeaderComp from "./components/HeaderComp";
import MainComp from "./components/MainComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <Router>
      <MenuButton />
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </Router>
  );
}

export default App;
