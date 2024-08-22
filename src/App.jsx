import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";


function App() {
  return (
    <Router>
      <HeaderComp />
      <FooterComp />
    </Router>
  );
}

export default App;
