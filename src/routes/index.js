import { Routes, Route } from "react-router-dom";
import paths from "./paths";

const AppRoutes = () => (
  <Routes>
    {paths.map((path, index) => (
      <Route key={index} path={path.path} element={path.element} />
    ))}
  </Routes>
);

export default AppRoutes;
