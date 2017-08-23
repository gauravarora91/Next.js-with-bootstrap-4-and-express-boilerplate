import Link from 'next/link';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const TopMenu = ({ AuthReducer }) =>
  <div className="header">
    <div className="container">
      <div className="header-inner">
        {/* START MOBILE SIDEBAR TOGGLE */}
        <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-menu" data-toggle="sidebar" />
        {/* END MOBILE SIDEBAR TOGGLE */}
        <div className>
          <div className="brand inline">
            <img
              src="/static/assets/img/logo.png"
              alt="logo"
              data-src="/static/assets/img/logo.png"
              data-src-retina="/static/assets/img/logo_2x.png"
              width={78}
              height={22}
            />
          </div>
          {/* END MOBILE SIDEBAR TOGGLE
          <a href="#" className="search-link hidden-md-down" data-toggle="search">
            <i className="pg-search" />
            Type anywhere to <span className="bold">search</span>
          </a>
           */}
        </div>
        <div className="d-flex align-items-center">
          {/* START User Info*/}
          <div className="pull-left p-r-10 fs-14 font-heading hidden-md-down m-l-20">
            <span className="semi-bold">
              {AuthReducer.user.name}
            </span>
          </div>
          <div className="dropdown pull-right hidden-md-down">
            <button
              className="profile-dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="thumbnail-wrapper d32 circular inline">
                <img
                  src={AuthReducer.user.picture}
                  alt
                  data-src={AuthReducer.user.picture}
                  data-src-retina={AuthReducer.user.picture}
                  width={32}
                  height={32}
                />
              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
              <a href="#" className="dropdown-item">
                <i className="pg-settings_small" /> Settings
              </a>
              <a href="#" className="dropdown-item">
                <i className="pg-outdent" /> Feedback
              </a>
              <a href="#" className="dropdown-item">
                <i className="pg-signals" /> Help
              </a>
              <a href="#" className="clearfix bg-master-lighter dropdown-item">
                <span className="pull-left">Logout</span>
                <span className="pull-right">
                  <i className="pg-power" />
                </span>
              </a>
            </div>
          </div>
          {/* END User Info*/}
          <a
            href="#"
            className="header-icon pg pg-alt_menu btn-link m-l-10 sm-no-margin d-inline-block"
            data-toggle="quickview"
            data-toggle-element="#quickview"
          />
        </div>
      </div>
    </div>
  </div>;

const mapStateToProps = state => state;
export default connect(mapStateToProps)(TopMenu);
