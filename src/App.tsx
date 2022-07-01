import MunroMapContainer from './munros/Map/MunroMapContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './account/login/LoginPage'
import AuthProvider from './auth/AuthProvider'

function App () {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
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
