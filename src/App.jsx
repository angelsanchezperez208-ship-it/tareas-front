import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import Header from './components/Header'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App