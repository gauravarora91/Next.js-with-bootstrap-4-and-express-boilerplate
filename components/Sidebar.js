import Link from 'next/link';
import { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company } = this.props.AuthReducer;
    return (
      <nav className="page-sidebar" data-pages="sidebar">
        <div className="sidebar-header">
          <Link href="/admin">
            <a>
              <h3>
                {company.name}
              </h3>
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
