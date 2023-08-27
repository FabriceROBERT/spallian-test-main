import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/PokemonList";
import "./css/styles.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
