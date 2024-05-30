import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Outlet />
        <div className="navbar">
          <Link to={`/`}>Home</Link>
          <Link to={`/routines`}>Routines</Link>
          <Link to={`/stats`}>Stats</Link>
        </div>
      </div>
    </>
  )
}

export default App
