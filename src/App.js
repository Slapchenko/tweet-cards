import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "components";

const HomePage = lazy(() => import("pages/HomePage"));
const TweetsPage = lazy(() => import("pages/TweetsPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
