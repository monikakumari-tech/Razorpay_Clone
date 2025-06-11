import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className="bg-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
