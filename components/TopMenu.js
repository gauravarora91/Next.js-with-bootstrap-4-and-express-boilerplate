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
        <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-menu" data-toggle="sidebar" />
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
        </div>
        <div className="d-flex align-items-center">
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
        </div>
      </div>
    </div>
  </div>;

const mapStateToProps = state => state;
export default connect(mapStateToProps)(TopMenu);
