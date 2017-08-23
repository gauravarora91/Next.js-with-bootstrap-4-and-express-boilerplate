import Link from 'next/link';
import { Component } from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import Head from './Head';
import Breadcrumb from './Breadcrumb';
import Footer from './FooterAdmin';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isAdmin } = this.props;
    let children = null;
    if (isAdmin) {
      children = (
        <div className="container">
          <Sidebar />
          <div className="page-container">
            <TopMenu />
            <div className="page-content-wrapper">
              <div className="content">
                <Breadcrumb page={this.props.page} />
                <div className="container-fluid">
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      );
    } else children = this.props.children;

    return (
      <div id="layout">
        <Head title={this.props.title} />

        {children}

        {!this.props.noFooter &&
          <footer>
            <div className="container">
              {'Footer'}
            </div>
          </footer>}

        <style jsx>{`
          #layout {
            height: 100%;
          }
          #dashboard-container {
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
