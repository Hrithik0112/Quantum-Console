import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "../src/components/Layout/Layout";
import Calender from "./pages/Calender/Calender";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
