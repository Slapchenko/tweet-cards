import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div style={{ margin: "0 auto", padding: "100px 20px" }}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
