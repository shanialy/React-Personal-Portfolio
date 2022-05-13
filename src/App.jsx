import { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductList from './components/productLIst/productList'
import Contact from './components/contact/Contact';
import Toogle from "./components/toogle/Toogle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toogle />
       <Home/>
       <About/>
       <ProductList/>
       <Contact/>
      </div>
  );
}

export default App;
