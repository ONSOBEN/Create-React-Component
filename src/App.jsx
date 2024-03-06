import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import ProductList from "./components/ProductList";
import Feedback from "./components/Feedback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-between">
      <NavbarComponent />
      <main>
        <ProductList />
        <Feedback />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
