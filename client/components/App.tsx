import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Outlet />
        <div className="navbar">
          <Link className="navButton" to={`/`}>
            Home
          </Link>
          <Link className="navButton" to={`/routines`}>
            Routines
          </Link>
          <Link className="navButton" to={`/stats`}>
            Stats
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
