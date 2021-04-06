import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Page from "./components/Page";


function App() {
  return (
    <Router>
      <Navigation/>
      <Page/>
      <Footer/>
    </Router>
  );
}

export default App;
