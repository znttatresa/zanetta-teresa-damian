import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
