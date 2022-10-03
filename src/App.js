import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/navbar/Header";
import Spinner from "./components/spinner/Spinner";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const CatOrBreeds = lazy(() => import("./components/catOrBreeds/CatOrBreeds"));
const Unsplash = lazy(() => import("./components/unsplash/Unsplash"));
const News = lazy(() => import("./components/news/News"));

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/catOrBreeds" element={<CatOrBreeds />} />
            <Route path="/photos" element={<Unsplash />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
