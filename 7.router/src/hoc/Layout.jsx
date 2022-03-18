import {NavLink, Outlet} from "react-router-dom";
import './Layout.scss'

const Layout = () => {
  return (
      <>
      <nav className="nav">
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink
                  to="/about"
              >About</NavLink></li>
              <li><NavLink
                  to={{pathname: "/cars",}}
              >Cars</NavLink></li>
          </ul>
      </nav>
        <hr/>
      <Outlet />
      </>
  )
}

export default Layout;
