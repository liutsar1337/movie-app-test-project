import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/FilmPage";
import TvPage from "./pages/TvPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movie/:id" element={<MoviePage/>}/>
          <Route path="/tv/:id" element={<TvPage/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
