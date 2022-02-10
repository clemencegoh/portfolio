import { css } from "@emotion/css";
import Footer from "components/footer/Footer";
import AboutPage from "pages/about/AboutPage";
import LandingPage from "pages/landing/LandingPage";
import ProjectsPage from "pages/projects/ProjectsPage";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./stars.css";

import Header from "./components/header/Header";
import ProjectDetailsPage from "pages/projects/details/ProjectDetailsPage";

// const StyledButton = styled(Button)`
//   background-color: var(--palette-1);
// `;

function Wrapper() {
  const [theme, setTheme] = React.useState<"theme-light" | "theme-dark">(
    "theme-dark"
  );
  const toggleTheme = () => {
    if (theme === "theme-light") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  };

  return (
    <div className={`${wrapperStyle} ${theme} App`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Outlet />

      <div
        id="stars"
        className={restrict}
        hidden={theme === "theme-light"}
      ></div>
      <div
        id="stars2"
        className={restrict}
        hidden={theme === "theme-light"}
      ></div>
      <div
        id="stars3"
        className={restrict}
        hidden={theme === "theme-light"}
      ></div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Wrapper />}>
        <Route index element={<LandingPage />} />
        <Route path="projects" element={<ProjectsPage />}>
          <Route path=":name" element={<ProjectDetailsPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

const wrapperStyle = css``;
const restrict = css`
  overflow: hidden;
`;

export default App;
