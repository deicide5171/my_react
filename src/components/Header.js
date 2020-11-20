import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="App-header navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">Deicide5171's React Project</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li className="nav-item active nav-link">
              Dashboard <span className="sr-only">(current)</span>
            </li>
          </Link>
          <Link to="/myMap">
            <li className="nav-item nav-link">
              Map
            </li>
          </Link>
          <Link to="/board">
            <li className="nav-item nav-link">
              Board
            </li>
          </Link>
          <Link to="/blog">
            <li className="nav-item nav-link">
              Blog
            </li>
          </Link>
          <Link to="/sns">
            <li className="nav-item nav-link">
              SNS
            </li>
          </Link>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li> */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
        <button className="btn btn-success my-2 my-sm-0" type="submit">Login</button>
      </div>
    </nav>
  );
}

export default Header;