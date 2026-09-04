import './App.css'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Home from './pages/home.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './navbar.jsx'
import User from './pages/user.jsx'
import Dashboard from './dashboard.jsx'
import ProfilePage from './profile.jsx'
import Settings from './settings.jsx'
import ContextApiApp from './ContextApi/app.jsx'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/Dashboard/:name/*" element={<Dashboard />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/context-api" element={<ContextApiApp />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
    
  )
}

export default App
