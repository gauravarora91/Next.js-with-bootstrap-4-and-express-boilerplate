import Link from 'next/link';
import { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="page-sidebar" data-pages="sidebar">
        <div className="sidebar-header">
          <Link href="/admin">
            <a>
              <img
                src="/static/assets/img/logo.png"
                alt="logo"
                className="brand"
                data-src="/static/assets/img/logo.png"
                data-src-retina="/static/assets/img/logo_2x.png"
                width={78}
                height={22}
              />
            </a>
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul className="menu-items">
            <li>
              <Link href="/companies">
                <a className="detailed">
                  <span className="title">Companies</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <a className="detailed">
                  <span className="title">Users</span>
                </a>
              </Link>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Sidebar);
