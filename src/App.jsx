
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Creation from './pages/Creation'
import Consultation from './pages/Consultation'
import Dossier from './pages/Dossier'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Creation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/dossier" element={<Dossier />} />
        </Routes>
    </Router>
  )
}

export default App