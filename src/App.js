import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Deals from './components/Deals'
import PhoneDevices from './components/Phone&Devices'
import Internet from './components/Internet'
import Account from "./components/Account"
import { createContext, useState } from "react";

export const UsernameContext = createContext()

function App() {
  const [username, setUsername] = useState('')
  return (
    <div className="App">
      <UsernameContext.Provider value={{ username, setUsername }} >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/phone&devices" element={<PhoneDevices />} />
            <Route path='/internet' element={<Internet />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </UsernameContext.Provider>
    </div>
  );
}

export default App;
