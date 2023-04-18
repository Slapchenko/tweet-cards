import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import { Wrapper } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;
