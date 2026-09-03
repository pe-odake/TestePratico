import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx';

function AppRouters() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Home />} />
      </Routes>
  )
}

export default AppRouters