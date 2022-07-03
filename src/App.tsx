import MunroMapContainer from './munros/Map/MunroMapContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './account/login/LoginPage'
import AuthProvider from './auth/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<MunroMapContainer />} />
            <Route path='/sign-in' element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
