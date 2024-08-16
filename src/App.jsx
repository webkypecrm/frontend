
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

import Loader from './components/Loader/Loader.jsx';
import Feature from './pages/Feature.jsx';
import AuthFeature from './pages/AuthFeature.jsx'
import { authRoutes, publicRoutes } from './pages/Router/router.link.jsx';


function App() {


  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}

        </Route>
        <Route path={"/"} element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
