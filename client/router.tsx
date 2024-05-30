/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './pages/Home'
import Routines from './pages/Routines'
import Stats from './pages/Stats'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/stats" element={<Stats />} />
    </Route>,
  ]),
)

export default router
