import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Team from "./pages/Team";
import ServicesPage from "./pages/ServicesPage";

function Root() {
  const location = useLocation();
  const { pathname } = location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [location]);
  return (
    <>
      <Navbar current={pathname} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
