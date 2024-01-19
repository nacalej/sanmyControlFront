import NavBar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import WifiRentals from "./components/rentalWifi/WifiRentals";
import Users from "./components/users/Users.jsx";
import Earnings from "./components/earnings/Earnings.jsx";
import EarningsPerMonth from "./components/earningsPerMonth/EarningsPerMonth.jsx";


const App = () => {

  return (
    <BrowserRouter>
      <div  className="" style={{backgroundColor: "#748DA6"}}>
        <NavBar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={ < Users />} > </Route>
          <Route path="/earnings" element={ <Earnings/>} > </Route>
          <Route path="/earningsPerMonth" element={ <EarningsPerMonth/>} > </Route>
          <Route path="/rentalWifi" element={ < WifiRentals />} > </Route>

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;