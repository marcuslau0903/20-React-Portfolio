import { HashRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavgationBar";
import Routes from "./Routes";

const App = () => {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
