import Link from 'next/link';

export default () =>
  <div className="container">
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">
        Triporate
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">Login</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link">Admin</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <h3>Welcome to triporate</h3>
    </div>
    <style jsx>{`
      .container {
        padding: 15px !important;
      }
    `}</style>
  </div>;
