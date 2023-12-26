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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './pages/Form';
export const AppContect = createContext()

function App() {
  const client = new QueryClient();
  return (
    <div >
      <Form />
    </div>
  )

}



export default App;
