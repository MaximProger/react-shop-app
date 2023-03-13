import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
