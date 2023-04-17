import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("pages/HomePage"));
const TweetsPage = lazy(() => import("pages/TweetsPage"));

const App = () => {
  return (
    <div style={{ margin: "0 auto", padding: "0 20px" }}>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
       </Suspense>
    </div>
  );
};

export default App;
