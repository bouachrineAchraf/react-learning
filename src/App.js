import './App.css';
import { User } from "./user"
import { Planet } from './planet'
import { useEffect, useState, createContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Menu } from "./pages/Menu"
import { Navbar } from './pages/Navbar';
import { Profile } from './pages/profile';
import { SetProfile } from './pages/SetProfile';

export const AppContect = createContext()

function App() {
  const [profile, setProfile] = useState("achraf");
  return (
    <div >
      <AppContect.Provider value={{profile, setProfile}}>
      {profile}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
      </AppContect.Provider>
    </div>
  )

}



export default App;
