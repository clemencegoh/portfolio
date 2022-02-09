import { css } from "@emotion/css";
import AboutPage from "pages/AboutPage";
import LandingPage from "pages/LandingPage";
import PortfolioPage from "pages/PortfolioPage";
import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Placeholder from "./components/common/placeholder/Placeholder";
import Header from "./components/header/Header";

// const StyledButton = styled(Button)`
//   background-color: var(--palette-1);
// `;

function Wrapper() {
  const location = useLocation();
  const [theme, setTheme] = React.useState<"theme-light" | "theme-dark">(
    "theme-light"
  );
  const toggleTheme = () => {
    if (theme === "theme-light") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  };

  return (
    <div className={`${wrapperStyle} ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Outlet />

      <Placeholder />
      <Placeholder />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Wrapper />}>
        <Route index element={<LandingPage />} />
        <Route path="projects" element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

const wrapperStyle = css``;

export default App;
