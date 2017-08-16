import Layout from '../components/layout';
import pageWithIntl from '../components/PageWithIntl';

export default pageWithIntl(({ intl }) =>
  <Layout>
    <div>
      {/* BEGIN SIDEBPANEL*/}
      <nav className="page-sidebar" data-pages="sidebar">
        {/* BEGIN SIDEBAR MENU TOP TRAY CONTENT*/}
        {/* END SIDEBAR MENU TOP TRAY CONTENT*/}
        {/* BEGIN SIDEBAR MENU HEADER*/}
        <div className="sidebar-header">
          <img
            src="/static/assets/img/logo.png"
            alt="logo"
            className="brand"
            data-src="/static/assets/img/logo.png"
            data-src-retina="/static/assets/img/logo_2x.png"
            width={78}
            height={22}
          />
        </div>
        {/* END SIDEBAR MENU HEADER*/}
        {/* START SIDEBAR MENU */}
        <div className="sidebar-menu">
          {/* BEGIN SIDEBAR MENU ITEMS*/}
          <ul className="menu-items">
            <li className="m-t-30 ">
              <a href="index.html" className="detailed">
                <span className="title">Dashboard</span>
                <span className="details">12 New Updates</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="shield" />
              </span>
            </li>
            <li className>
              <a href="email.html" className="detailed">
                <span className="title">Email</span>
                <span className="details">234 New Emails</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="mail" />
              </span>
            </li>
            <li className>
              <a href="social.html">
                <span className="title">Social</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="users" />
              </span>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Calendar</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="calendar" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="calendar.html">Basic</a>
                  <span className="icon-thumbnail">c</span>
                </li>
                <li className>
                  <a href="calendar_lang.html">Languages</a>
                  <span className="icon-thumbnail">L</span>
                </li>
                <li className>
                  <a href="calendar_month.html">Month</a>
                  <span className="icon-thumbnail">M</span>
                </li>
                <li className>
                  <a href="calendar_lazy.html">Lazy load</a>
                  <span className="icon-thumbnail">La</span>
                </li>
                <li className>
                  <a href="http://pages.revox.io/dashboard/2.1.0/doc/#calendar" target="_blank">
                    Documentation
                  </a>
                  <span className="icon-thumbnail">D</span>
                </li>
              </ul>
            </li>
            <li className>
              <a href="builder.html">
                <span className="title">Builder</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="cpu" />
              </span>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Layouts</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="layout" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="default_layout.html">Default</a>
                  <span className="icon-thumbnail">dl</span>
                </li>
                <li className>
                  <a href="secondary_layout.html">Secondary</a>
                  <span className="icon-thumbnail">sl</span>
                </li>
                <li className>
                  <a href="boxed_layout.html">Boxed</a>
                  <span className="icon-thumbnail">bl</span>
                </li>
                <li className>
                  <a href="rtl_layout.html">RTL</a>
                  <span className="icon-thumbnail">rl</span>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">UI Elements</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="triangle" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="color.html">Color</a>
                  <span className="icon-thumbnail">c</span>
                </li>
                <li className>
                  <a href="typography.html">Typography</a>
                  <span className="icon-thumbnail">t</span>
                </li>
                <li className>
                  <a href="icons.html">Icons</a>
                  <span className="icon-thumbnail">i</span>
                </li>
                <li className>
                  <a href="buttons.html">Buttons</a>
                  <span className="icon-thumbnail">b</span>
                </li>
                <li className>
                  <a href="notifications.html">Notifications</a>
                  <span className="icon-thumbnail">n</span>
                </li>
                <li className>
                  <a href="modals.html">Modals</a>
                  <span className="icon-thumbnail">m</span>
                </li>
                <li className>
                  <a href="progress.html">Progress &amp; Activity</a>
                  <span className="icon-thumbnail">pa</span>
                </li>
                <li className>
                  <a href="tabs_accordian.html">Tabs &amp; Accordions</a>
                  <span className="icon-thumbnail">ta</span>
                </li>
                <li className>
                  <a href="sliders.html">Sliders</a>
                  <span className="icon-thumbnail">s</span>
                </li>
                <li className>
                  <a href="tree_view.html">Tree View</a>
                  <span className="icon-thumbnail">tv</span>
                </li>
                <li className>
                  <a href="nestables.html">Nestable</a>
                  <span className="icon-thumbnail">ns</span>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Forms</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="list" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="form_elements.html">Form Elements</a>
                  <span className="icon-thumbnail">fe</span>
                </li>
                <li className>
                  <a href="form_layouts.html">Form Layouts</a>
                  <span className="icon-thumbnail">fl</span>
                </li>
                <li className>
                  <a href="form_wizard.html">Form Wizard</a>
                  <span className="icon-thumbnail">fw</span>
                </li>
              </ul>
            </li>
            <li className>
              <a href="cards.html">
                <span className="title">Cards</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="grid" />
              </span>
            </li>
            <li className>
              <a href="views.html">
                <span className="title">Views</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="airplay" />
              </span>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Tables</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="square" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="tables.html">Basic Tables</a>
                  <span className="icon-thumbnail">bt</span>
                </li>
                <li className>
                  <a href="datatables.html">Data Tables</a>
                  <span className="icon-thumbnail">dt</span>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Maps</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="map-pin" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="google_map.html">Google Maps</a>
                  <span className="icon-thumbnail">gm</span>
                </li>
                <li className>
                  <a href="vector_map.html">Vector Maps</a>
                  <span className="icon-thumbnail">vm</span>
                </li>
              </ul>
            </li>
            <li className>
              <a href="charts.html">
                <span className="title">Charts</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="bar-chart" />
              </span>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Extra</span>
                <span className=" arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="box" />
              </span>
              <ul className="sub-menu">
                <li className>
                  <a href="invoice.html">Invoice</a>
                  <span className="icon-thumbnail">in</span>
                </li>
                <li className>
                  <a href="404.html">404 Page</a>
                  <span className="icon-thumbnail">pg</span>
                </li>
                <li className>
                  <a href="500.html">500 Page</a>
                  <span className="icon-thumbnail">pg</span>
                </li>
                <li className>
                  <a href="blank_template.html">Blank Page</a>
                  <span className="icon-thumbnail">bp</span>
                </li>
                <li className>
                  <a href="login.html">Login</a>
                  <span className="icon-thumbnail">l</span>
                </li>
                <li className>
                  <a href="register.html">Register</a>
                  <span className="icon-thumbnail">re</span>
                </li>
                <li className>
                  <a href="lock_screen.html">Lockscreen</a>
                  <span className="icon-thumbnail">ls</span>
                </li>
                <li className>
                  <a href="gallery.html">Gallery</a>
                  <span className="icon-thumbnail">gl</span>
                </li>
                <li className>
                  <a href="timeline.html">Timeline</a>
                  <span className="icon-thumbnail">t</span>
                </li>
              </ul>
            </li>
            <li className>
              <a href="javascript:;">
                <span className="title">Menu Levels</span>
                <span className="arrow" />
              </a>
              <span className="icon-thumbnail">
                <i data-feather="menu" />
              </span>
              <ul className="sub-menu">
                <li>
                  <a href="javascript:;">Level 1</a>
                  <span className="icon-thumbnail">L1</span>
                </li>
                <li>
                  <a href="javascript:;">
                    <span className="title">Level 2</span>
                    <span className="arrow" />
                  </a>
                  <span className="icon-thumbnail">L2</span>
                  <ul className="sub-menu">
                    <li>
                      <a href="javascript:;">Sub Menu</a>
                      <span className="icon-thumbnail">Sm</span>
                    </li>
                    <li>
                      <a href="ujavascript:;">Sub Menu</a>
                      <span className="icon-thumbnail">Sm</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className>
              <a href="http://pages.revox.io/dashboard/2.2.0/docs/" target="_blank">
                <span className="title">Docs</span>
              </a>
              <span className="icon-thumbnail">
                <i data-feather="life-buoy" />
              </span>
            </li>
            <li className>
              <a href="http://changelog.pages.revox.io/" target="_blank">
                <span className="title">Changelog</span>
              </a>
              <span className="icon-thumbnail">CG</span>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
        {/* END SIDEBAR MENU */}
      </nav>
      {/* END SIDEBAR */}
      {/* END SIDEBPANEL*/}
      {/* START PAGE-CONTAINER */}
      <div className="page-container ">
        {/* START HEADER */}
        <div className="header ">
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
            <a href="#" className="btn btn-link text-primary m-l-20 hidden-md-down">
              Add New Item
            </a>
            <a href="#" className="search-link hidden-md-down" data-toggle="search">
              <i className="pg-search" />
              Type anywhere to <span className="bold">search</span>
            </a>
          </div>
          <div className="d-flex align-items-center">
            {/* START NOTIFICATION LIST */}
            <ul className="hidden-md-down notification-list no-margin hidden-sm-down b-grey b-r no-style p-l-30 p-r-20">
              <li className="p-r-10 inline">
                <div className="dropdown">
                  <a
                    href="javascript:;"
                    id="notification-center"
                    className="header-icon pg pg-world"
                    data-toggle="dropdown"
                  >
                    <span className="bubble" />
                  </a>
                  {/* START Notification Dropdown */}
                  <div className="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                    {/* START Notification */}
                    <div className="notification-panel">
                      {/* START Notification Body*/}
                      <div className="notification-body scrollable">
                        {/* START Notification Item*/}
                        <div className="notification-item unread clearfix">
                          {/* START Notification Item*/}
                          <div className="heading open">
                            <a href="#" className="text-primary pull-left">
                              <i className="pg-map fs-16 m-r-10" />
                              <span className="bold">Carrot Design</span>
                              <span className="fs-12 m-l-10">David Nester</span>
                            </a>
                            <div className="pull-right">
                              <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                                <div>
                                  <i className="fa fa-angle-left" />
                                </div>
                              </div>
                              <span className=" time">few sec ago</span>
                            </div>
                            <div className="more-details">
                              <div className="more-details-inner">
                                <h5 className="semi-bold fs-16">
                                  “Apple’s Motivation - Innovation <br />
                                  distinguishes between <br />
                                  A leader and a follower.”
                                </h5>
                                <p className="small hint-text">
                                  Commented on john Smiths wall.
                                  <br /> via pages framework.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* END Notification Item*/}
                          {/* START Notification Item Right Side*/}
                          <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                            <a href="#" className="mark" />
                          </div>
                          {/* END Notification Item Right Side*/}
                        </div>
                        {/* START Notification Body*/}
                        {/* START Notification Item*/}
                        <div className="notification-item  clearfix">
                          <div className="heading">
                            <a href="#" className="text-danger pull-left">
                              <i className="fa fa-exclamation-triangle m-r-10" />
                              <span className="bold">98% Server Load</span>
                              <span className="fs-12 m-l-10">Take Action</span>
                            </a>
                            <span className="pull-right time">2 mins ago</span>
                          </div>
                          {/* START Notification Item Right Side*/}
                          <div className="option">
                            <a href="#" className="mark" />
                          </div>
                          {/* END Notification Item Right Side*/}
                        </div>
                        {/* END Notification Item*/}
                        {/* START Notification Item*/}
                        <div className="notification-item  clearfix">
                          <div className="heading">
                            <a href="#" className="text-warning-dark pull-left">
                              <i className="fa fa-exclamation-triangle m-r-10" />
                              <span className="bold">Warning Notification</span>
                              <span className="fs-12 m-l-10">Buy Now</span>
                            </a>
                            <span className="pull-right time">yesterday</span>
                          </div>
                          {/* START Notification Item Right Side*/}
                          <div className="option">
                            <a href="#" className="mark" />
                          </div>
                          {/* END Notification Item Right Side*/}
                        </div>
                        {/* END Notification Item*/}
                        {/* START Notification Item*/}
                        <div className="notification-item unread clearfix">
                          <div className="heading">
                            <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                              <img
                                width={30}
                                height={30}
                                data-src-retina="/static/assets/img/profiles/1x.jpg"
                                data-src="/static/assets/img/profiles/1.jpg"
                                alt
                                src="/static/assets/img/profiles/1.jpg"
                              />
                            </div>
                            <a href="#" className="text-primary pull-left">
                              <span className="bold">Revox Design Labs</span>
                              <span className="fs-12 m-l-10">Owners</span>
                            </a>
                            <span className="pull-right time">11:00pm</span>
                          </div>
                          {/* START Notification Item Right Side*/}
                          <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                            <a href="#" className="mark" />
                          </div>
                          {/* END Notification Item Right Side*/}
                        </div>
                        {/* END Notification Item*/}
                      </div>
                      {/* END Notification Body*/}
                      {/* START Notification Footer*/}
                      <div className="notification-footer text-center">
                        <a href="#" className>
                          Read all notifications
                        </a>
                        <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                          <i className="pg-refresh_new" />
                        </a>
                      </div>
                      {/* START Notification Footer*/}
                    </div>
                    {/* END Notification */}
                  </div>
                  {/* END Notification Dropdown */}
                </div>
              </li>
              <li className="p-r-10 inline">
                <a href="#" className="header-icon pg pg-link" />
              </li>
              <li className="p-r-10 inline">
                <a href="#" className="header-icon pg pg-thumbs" />
              </li>
            </ul>
            {/* END NOTIFICATIONS LIST */}
            {/* START User Info*/}
            <div className="pull-left p-r-10 fs-14 font-heading hidden-md-down m-l-20">
              <span className="semi-bold">David</span>
              <span className="text-master">Nest</span>
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
                    src="/static/assets/img/profiles/avatar.jpg"
                    alt
                    data-src="/static/assets/img/profiles/avatar.jpg"
                    data-src-retina="/static/assets/img/profiles/avatar_small2x.jpg"
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
        {/* END HEADER */}
        {/* START PAGE CONTENT WRAPPER */}
        <div className="page-content-wrapper ">
          {/* START PAGE CONTENT */}
          <div className="content ">
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Cards</li>
              </ol>
              {/* END BREADCRUMB */}
              {/* START card */}
              <div className="card card-transparent">
                <div className="card-header  ">
                  <div className="card-title">Pages Cards</div>
                </div>
                <div className="m-0 row card-block">
                  <div className="col-lg-4 no-padding">
                    <div className="p-r-30">
                      <h3>Effortless Customization</h3>
                      <br />
                      <p>
                        Cards are pluggable UI components that are managed and displayed in a web portal. Cards in Pages
                        are created by reusing the <a href="http://getbootstrap.com/components/#cards">cards</a>{' '}
                        introduced in Bootstrap to enable effortless customization.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 sm-no-padding">
                    <div className="card card-transparent">
                      <div className="card-block no-padding">
                        <div id="card-advance" className="card card-default">
                          <div className="card-header  ">
                            <div className="card-title">Portlet Title</div>
                            <div className="card-controls">
                              <ul>
                                <li>
                                  <div className="dropdown">
                                    <a
                                      id="card-settings"
                                      data-target="#"
                                      href="#"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      role="button"
                                      aria-expanded="false"
                                    >
                                      <i className="card-icon card-icon-settings " />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      role="menu"
                                      aria-labelledby="card-settings"
                                    >
                                      <a href="#" className="dropdown-item">
                                        API
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Preferences
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        About
                                      </a>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="#" className="card-collapse" data-toggle="collapse">
                                    <i className="card-icon card-icon-collapse" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="card-refresh" data-toggle="refresh">
                                    <i className="card-icon card-icon-refresh" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="card-maximize" data-toggle="maximize">
                                    <i className="card-icon card-icon-maximize" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="card-close" data-toggle="close">
                                    <i className="card-icon card-icon-close" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-block">
                            <h3>
                              <span className="semi-bold">Advance</span> Tools
                            </h3>
                            <p>
                              We have crafted Pages Cards to suit any use case. Add a maximize button{' '}
                              <i className="pg-fullscreen" /> into your Cards controls bar to make the Cards go
                              full-screen. This will come handy if you want to show lot of content inside a Cards and
                              want to give the content some room to breath
                            </p>
                            <br />
                            <div>
                              <div className="profile-img-wrapper m-t-5 inline">
                                <img
                                  width={35}
                                  height={35}
                                  data-src-retina="/static/assets/img/profiles/avatar_small2x.jpg"
                                  data-src="/static/assets/img/profiles/avatar_small.jpg"
                                  alt
                                  src="/static/assets/img/profiles/avatar_small2x.jpg"
                                />
                                <div className="chat-status available" />
                              </div>
                              <div className="inline m-l-10">
                                <p className="small hint-text m-t-5">
                                  VIA senior product manage
                                  <br />for UI/UX at REVOX
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END card */}
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Portlet Tools</div>
                    </div>
                    <div className="card-block">
                      <div className="row">
                        <div className="col-lg-4">
                          <div data-pages="card" className="card card-default" id="card-basic">
                            <div className="card-header  ">
                              <div className="card-title">Portlet Title</div>
                              <div className="card-controls">
                                <ul>
                                  <li>
                                    <a data-toggle="collapse" className="card-collapse" href="#">
                                      <i className="card-icon card-icon-collapse" />
                                    </a>
                                  </li>
                                  <li>
                                    <a data-toggle="refresh" className="card-refresh" href="#">
                                      <i className="card-icon card-icon-refresh" />
                                    </a>
                                  </li>
                                  <li>
                                    <a data-toggle="close" className="card-close" href="#">
                                      <i className="card-icon card-icon-close" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-block">
                              <h3>
                                <span className="semi-bold">Basic</span> Tools
                              </h3>
                              <p>
                                Basic Portlet tools include a slide toggle button{' '}
                                <i className="card-icon card-icon-collapse" />, refresh button{' '}
                                <i className="card-icon card-icon-refresh" /> and a close button{' '}
                                <i className="card-icon card-icon-close" /> All these are fully customizable and come
                                with callback functions to integrate with your code. Clicking on the refresh button will
                                simulate an AJAX call.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="card card-default">
                            <div className="card-header ">
                              <div className="card-title">Portlet One</div>
                              <div className="card-controls">
                                <ul>
                                  <li>
                                    <a data-toggle="close" className="card-close" href="#">
                                      <i className="card-icon card-icon-close" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-block">
                              <h3>
                                <span className="semi-bold">Without</span> Scroll
                              </h3>
                              <p>
                                When it comes to digital design, the lines between functionality, aesthetics, and
                                psychology are inseparably blurred. Without the constraints of the physical world,
                                there’s no natural form to fall back on, and every bit of constraint and affordance
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="card card-default">
                            <div className="card-header ">
                              <div className="card-title">Portlet Two</div>
                              <div className="card-controls">
                                <ul>
                                  <li>
                                    <a data-toggle="close" className="card-close" href="#">
                                      <i className="card-icon card-icon-close" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-block">
                              <div className="scrollable">
                                <div className="demo-card-scrollable">
                                  <h3>
                                    <span className="semi-bold">With</span> Scroll
                                  </h3>
                                  <p>
                                    When it comes to digital design, the lines between functionality, aesthetics, and
                                    psychology are inseparably blurred. Without the constraints of the physical world,
                                    there’s no natural form to fall back on, and every bit of constraint and affordance
                                    must be introduced intentionally. Good design makes a product useful. A product is
                                    bought to be used. It has to satisfy certain criteria, not only functional, but also
                                    psychological and aesthetic. Good design emphasizes the usefulness of a product
                                    whilst disregarding anything that could possibly detract from it. It’s always
                                    obvious when design is an afterthought. The hallmarks of the engineering-first
                                    approach are everywhere: inscrutable interfaces, convoluted workflows, user guides
                                    the size of The Iliad. This was the dominant approach for the first several decades
                                    of personal computing, and it’s left its mark in the form of software designed with
                                    its creators in mind, rather than its users.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Style Options</div>
                </div>
                <div className="card-block">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card card-default">
                        <div className="card-header  separator">
                          <div className="card-title">Portlet Three</div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">With</span> Separator
                          </h3>
                          <p>
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-transparent">
                        <div className="card-header ">
                          <div className="card-title">Portlet Four</div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">Transparent</span>
                          </h3>
                          <p>
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-default bg-success">
                        <div className="card-header  separator">
                          <div className="card-title">Portlet Three</div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">With</span> Separator
                          </h3>
                          <p className="text-black hint-text">
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              {/* START card */}
              <div className="card card-transparent">
                <div className="card-block">
                  <div className="row">
                    <div className="col-lg-4 no-padding">
                      <div className="p-r-30">
                        <h3>SVG animated progress indicators</h3>
                        <br />
                        <p>
                          Pages comes with two types of inderminate progress indicators: linear and circular. These have
                          been created using animated SVGs to support various screen sizes and retina displays. We have
                          integrated them into Cards too.
                        </p>
                        <div className="inline">
                          <p className="small hint-text">
                            <br />
                            <a href="progress.html">More about progress &amp; activity indicators</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 sm-no-padding">
                      <div className="card card-transparent">
                        <div className="card-block no-padding">
                          <div id="card-circular-minimal" className="card card-default">
                            <div className="card-header  ">
                              <div className="card-title">Portlet Title</div>
                              <div className="card-controls">
                                <ul>
                                  <li>
                                    <a href="#" className="card-refresh" data-toggle="refresh">
                                      <i className="card-icon card-icon-refresh-lg-master" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-block">
                              <h3>
                                <span className="semi-bold">Minimal</span> Portlet
                              </h3>
                              <p>
                                Click on the refresh icon to simulate an AJAX call and to see an animated circular
                                progress indicatorabove the portlet. This is the Pages default progress indicator for
                                Cards. Don't like this style? Simply change the style by setting portlet options.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END card */}
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Portlet Progress indicators</div>
                </div>
                <div className="card-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <div id="card-linear" className="card card-default">
                        <div className="card-header  ">
                          <div className="card-title">Portlet Title</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">Linear</span> Progress
                          </h3>
                          <p>
                            Click on the refresh icon to simulate an AJAX call and to see an animated progress bar
                            indicator above the portlet. These progress bars come in seven different colors that are
                            available in the Pages contextual color scheme.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div id="card-circular" className="card card-default">
                        <div className="card-header  ">
                          <div className="card-title">Portlet Title</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">Circular</span> Progress
                          </h3>
                          <p>
                            Click on the refresh icon to simulate an AJAX call and to see an animated circular progress
                            indicatorabove the portlet. This is the Pages default progress indicator for Cards. Don't
                            like this style? Simply change the style by setting portlet options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Portlet Progress Indicator colors</div>
                </div>
                <div className="card-block">
                  <div className="row">
                    <div className="col-lg-4">
                      <div id="card-linear-color" className="card card-default">
                        <div className="card-header  ">
                          <div className="card-title">Portlet Title</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">Linear</span> Progress
                          </h3>
                          <p>
                            Click on the refresh icon to simulate an AJAX call and to see an animated progress bar
                            indicator above the portlet. These progress bars come in seven different colors that are
                            available in the Pages contextual color scheme.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div id="card-circular-color" className="card card-default">
                        <div className="card-header  ">
                          <div className="card-title">Portlet Title</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>
                            <span className="semi-bold">Circular</span> Progress
                          </h3>
                          <p>
                            Click on the refresh icon to simulate an AJAX call and to see an animated circular progress
                            indicatorabove the portlet. This is the Pages default progress indicator for Cards. Don't
                            like this style? Simply change the style by setting portlet options.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div id="card-error" className="card card-default">
                        <div className="card-header ">
                          <div className="card-title">Portlet Title</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>
                            Portlet with <span className="semi-bold">Errors</span>
                          </h3>
                          <p>
                            Anything that can go wrong will go wrong. Click on the refresh icon in the portlet controls
                            to the top right to see how an error message can be displayed inside a portlet. Recommended
                            to use with failed AJAX callbacks that are triggered from a portlet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTAINER FLUID */}
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Draggable Cards</div>
                </div>
                <div className="card-block sortable">
                  <div className="row">
                    <div className="col-lg-6 sortable-column">
                      <div className="card card-default bg-danger" data-pages="card">
                        <div className="card-header ">
                          <div className="card-title">Draggable Portlet</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3 className="text-white">
                            <span className="semi-bold">Drag</span> me!
                          </h3>
                          <p className="text-white">
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used. It has to
                            satisfy certain criteria, not only functional, but also psychological and aesthetic.{' '}
                          </p>
                        </div>
                      </div>
                      <div className="card card-default bg-complete" data-pages="card">
                        <div className="card-header ">
                          <div className="card-title">Draggable Portlet</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3 className="text-white">
                            <span className="semi-bold">Drag</span> me!
                          </h3>
                          <p className="text-white">
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used. It has to
                            satisfy certain criteria, not only functional, but also psychological and aesthetic.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 sortable-column">
                      <div className="card card-default bg-primary" data-pages="card">
                        <div className="card-header ">
                          <div className="card-title">Draggable Portlet</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse text-white" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh text-white" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close text-white" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3 className="text-white">
                            <span className="semi-bold">Drag</span> me!
                          </h3>
                          <p className="text-white">
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. Good design makes a product useful. A product is bought to be used. It has to
                            satisfy certain criteria, not only functional, but also psychological and aesthetic.{' '}
                          </p>
                        </div>
                      </div>
                      <div className="card card-default bg-success" data-pages="card">
                        <div className="card-header ">
                          <div className="card-title">Draggable Portlet</div>
                          <div className="card-controls">
                            <ul>
                              <li>
                                <a href="#" className="card-collapse" data-toggle="collapse">
                                  <i className="card-icon card-icon-collapse" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-refresh" data-toggle="refresh">
                                  <i className="card-icon card-icon-refresh" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="card-close" data-toggle="close">
                                  <i className="card-icon card-icon-close" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3 className="text-white">
                            <span className="semi-bold">Drag</span> me!
                          </h3>
                          <p className="text-white">
                            When it comes to digital design, the lines between functionality, aesthetics, and psychology
                            are inseparably blurred. Without the constraints of the physical world, there’s no natural
                            form to fall back on, and every bit of constraint and affordance must be introduced
                            intentionally. A product is bought to be used. It has to satisfy certain criteria, not only
                            functional, but also psychological and aesthetic.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTAINER FLUID */}
          </div>
          {/* END PAGE CONTENT */}
          {/* START COPYRIGHT */}
          {/* START CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid  container-fixed-lg footer">
            <div className="copyright sm-text-center">
              <p className="small no-margin pull-left sm-pull-reset">
                <span className="hint-text">Copyright © 2017 </span>
                <span className="font-montserrat">REVOX</span>
                .
                <span className="hint-text">All rights reserved. </span>
                <span className="sm-block">
                  <a href="#" className="m-l-10 m-r-10">
                    Terms of use
                  </a>
                  <span className="muted">|</span>
                  <a href="#" className="m-l-10">
                    Privacy Policy
                  </a>
                </span>
              </p>
              <p className="small no-margin pull-right sm-pull-reset">
                Hand-crafted <span className="hint-text">&amp; made with Love</span>
              </p>
              <div className="clearfix" />
            </div>
          </div>
          {/* END COPYRIGHT */}
        </div>
        {/* END PAGE CONTENT WRAPPER */}
      </div>
      {/* END PAGE CONTAINER */}
      {/*START QUICKVIEW */}
      <div id="quickview" className="quickview-wrapper" data-pages="quickview">
        {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className data-target="#quickview-notes" data-toggle="tab">
            <a href="#">Notes</a>
          </li>
          <li data-target="#quickview-alerts" data-toggle="tab">
            <a href="#">Alerts</a>
          </li>
          <li className="active" data-target="#quickview-chat" data-toggle="tab">
            <a href="#">Chat</a>
          </li>
        </ul>
        <a className="btn-link quickview-toggle" data-toggle-element="#quickview" data-toggle="quickview">
          <i className="pg-close" />
        </a>
        {/* Tab panes */}
        <div className="tab-content">
          {/* BEGIN Notes !*/}
          <div className="tab-pane no-padding" id="quickview-notes">
            <div className="view-port clearfix quickview-notes" id="note-views">
              {/* BEGIN Note List !*/}
              <div className="view list" id="quick-note-list">
                <div className="toolbar clearfix">
                  <ul className="pull-right ">
                    <li>
                      <a href="#" className="delete-note-link">
                        <i className="fa fa-trash-o" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="new-note-link"
                        data-navigate="view"
                        data-view-port="#note-views"
                        data-view-animation="push"
                      >
                        <i className="fa fa-plus" />
                      </a>
                    </li>
                  </ul>
                  <button className="btn-remove-notes btn btn-xs btn-block hide">
                    <i className="fa fa-times" /> Delete
                  </button>
                </div>
                <ul>
                  {/* BEGIN Note Item !*/}
                  <li data-noteid={1}>
                    <div className="left">
                      {/* BEGIN Note Action !*/}
                      <div className="checkbox check-warning no-margin">
                        <input id="qncheckbox1" type="checkbox" defaultValue={1} />
                        <label htmlFor="qncheckbox1" />
                      </div>
                      {/* END Note Action !*/}
                      {/* BEGIN Note Preview Text !*/}
                      <p className="note-preview">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      {/* BEGIN Note Preview Text !*/}
                    </div>
                    {/* BEGIN Note Details !*/}
                    <div className="right pull-right">
                      {/* BEGIN Note Date !*/}
                      <span className="date">12/12/14</span>
                      <a href="#" data-navigate="view" data-view-port="#note-views" data-view-animation="push">
                        <i className="fa fa-chevron-right" />
                      </a>
                      {/* END Note Date !*/}
                    </div>
                    {/* END Note Details !*/}
                  </li>
                  {/* END Note List !*/}
                  {/* BEGIN Note Item !*/}
                  <li data-noteid={2}>
                    <div className="left">
                      {/* BEGIN Note Action !*/}
                      <div className="checkbox check-warning no-margin">
                        <input id="qncheckbox2" type="checkbox" defaultValue={1} />
                        <label htmlFor="qncheckbox2" />
                      </div>
                      {/* END Note Action !*/}
                      {/* BEGIN Note Preview Text !*/}
                      <p className="note-preview">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      {/* BEGIN Note Preview Text !*/}
                    </div>
                    {/* BEGIN Note Details !*/}
                    <div className="right pull-right">
                      {/* BEGIN Note Date !*/}
                      <span className="date">12/12/14</span>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                      {/* END Note Date !*/}
                    </div>
                    {/* END Note Details !*/}
                  </li>
                  {/* END Note List !*/}
                  {/* BEGIN Note Item !*/}
                  <li data-noteid={2}>
                    <div className="left">
                      {/* BEGIN Note Action !*/}
                      <div className="checkbox check-warning no-margin">
                        <input id="qncheckbox3" type="checkbox" defaultValue={1} />
                        <label htmlFor="qncheckbox3" />
                      </div>
                      {/* END Note Action !*/}
                      {/* BEGIN Note Preview Text !*/}
                      <p className="note-preview">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      {/* BEGIN Note Preview Text !*/}
                    </div>
                    {/* BEGIN Note Details !*/}
                    <div className="right pull-right">
                      {/* BEGIN Note Date !*/}
                      <span className="date">12/12/14</span>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                      {/* END Note Date !*/}
                    </div>
                    {/* END Note Details !*/}
                  </li>
                  {/* END Note List !*/}
                  {/* BEGIN Note Item !*/}
                  <li data-noteid={3}>
                    <div className="left">
                      {/* BEGIN Note Action !*/}
                      <div className="checkbox check-warning no-margin">
                        <input id="qncheckbox4" type="checkbox" defaultValue={1} />
                        <label htmlFor="qncheckbox4" />
                      </div>
                      {/* END Note Action !*/}
                      {/* BEGIN Note Preview Text !*/}
                      <p className="note-preview">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      {/* BEGIN Note Preview Text !*/}
                    </div>
                    {/* BEGIN Note Details !*/}
                    <div className="right pull-right">
                      {/* BEGIN Note Date !*/}
                      <span className="date">12/12/14</span>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                      {/* END Note Date !*/}
                    </div>
                    {/* END Note Details !*/}
                  </li>
                  {/* END Note List !*/}
                  {/* BEGIN Note Item !*/}
                  <li data-noteid={4}>
                    <div className="left">
                      {/* BEGIN Note Action !*/}
                      <div className="checkbox check-warning no-margin">
                        <input id="qncheckbox5" type="checkbox" defaultValue={1} />
                        <label htmlFor="qncheckbox5" />
                      </div>
                      {/* END Note Action !*/}
                      {/* BEGIN Note Preview Text !*/}
                      <p className="note-preview">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      {/* BEGIN Note Preview Text !*/}
                    </div>
                    {/* BEGIN Note Details !*/}
                    <div className="right pull-right">
                      {/* BEGIN Note Date !*/}
                      <span className="date">12/12/14</span>
                      <a href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                      {/* END Note Date !*/}
                    </div>
                    {/* END Note Details !*/}
                  </li>
                  {/* END Note List !*/}
                </ul>
              </div>
              {/* END Note List !*/}
              <div className="view note" id="quick-note">
                <div>
                  <ul className="toolbar">
                    <li>
                      <a href="#" className="close-note-link">
                        <i className="pg-arrow_left" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-action="Bold" className="fs-12">
                        <i className="fa fa-bold" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-action="Italic" className="fs-12">
                        <i className="fa fa-italic" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fs-12">
                        <i className="fa fa-link" />
                      </a>
                    </li>
                  </ul>
                  <div className="body">
                    <div>
                      <div className="top">
                        <span>21st april 2014 2:13am</span>
                      </div>
                      <div className="content">
                        <div className="quick-note-editor full-width full-height js-input" contenteditable="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END Notes !*/}
          {/* BEGIN Alerts !*/}
          <div className="tab-pane no-padding" id="quickview-alerts">
            <div className="view-port clearfix" id="alerts">
              {/* BEGIN Alerts View !*/}
              <div className="view bg-white">
                {/* BEGIN View Header !*/}
                <div className="navbar navbar-default navbar-sm">
                  <div className="navbar-inner">
                    {/* BEGIN Header Controler !*/}
                    <a
                      href="javascript:;"
                      className="inline action p-l-10 link text-master"
                      data-navigate="view"
                      data-view-port="#chat"
                      data-view-animation="push-parrallax"
                    >
                      <i className="pg-more" />
                    </a>
                    {/* END Header Controler !*/}
                    <div className="view-heading">Notications</div>
                    {/* BEGIN Header Controler !*/}
                    <a href="#" className="inline action p-r-10 pull-right link text-master">
                      <i className="pg-search" />
                    </a>
                    {/* END Header Controler !*/}
                  </div>
                </div>
                {/* END View Header !*/}
                {/* BEGIN Alert List !*/}
                <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                  {/* BEGIN List Group !*/}
                  <div className="list-view-group-container">
                    {/* BEGIN List Group Header!*/}
                    <div className="list-view-group-header text-uppercase">Calendar</div>
                    {/* END List Group Header!*/}
                    <ul>
                      {/* BEGIN List Group Item!*/}
                      <li className="alert-list">
                        {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                        <a
                          href="javascript:;"
                          className="align-items-center"
                          data-navigate="view"
                          data-view-port="#chat"
                          data-view-animation="push-parrallax"
                        >
                          <p className>
                            <span className="text-warning fs-10">
                              <i className="fa fa-circle" />
                            </span>
                          </p>
                          <p className="p-l-10 overflow-ellipsis fs-12">
                            <span className="text-master">David Nester Birthday</span>
                          </p>
                          <p className="p-r-10 ml-auto fs-12 text-right">
                            <span className="text-warning">
                              Today <br />
                            </span>
                            <span className="text-master">All Day</span>
                          </p>
                        </a>
                        {/* END Alert Item!*/}
                        {/* BEGIN List Group Item!*/}
                      </li>
                      {/* END List Group Item!*/}
                      {/* BEGIN List Group Item!*/}
                      <li className="alert-list">
                        {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                        <a
                          href="#"
                          className="align-items-center"
                          data-navigate="view"
                          data-view-port="#chat"
                          data-view-animation="push-parrallax"
                        >
                          <p className>
                            <span className="text-warning fs-10">
                              <i className="fa fa-circle" />
                            </span>
                          </p>
                          <p className="p-l-10 overflow-ellipsis fs-12">
                            <span className="text-master">Meeting at 2:30</span>
                          </p>
                          <p className="p-r-10 ml-auto fs-12 text-right">
                            <span className="text-warning">Today</span>
                          </p>
                        </a>
                        {/* END Alert Item!*/}
                      </li>
                      {/* END List Group Item!*/}
                    </ul>
                  </div>
                  {/* END List Group !*/}
                  <div className="list-view-group-container">
                    {/* BEGIN List Group Header!*/}
                    <div className="list-view-group-header text-uppercase">Social</div>
                    {/* END List Group Header!*/}
                    <ul>
                      {/* BEGIN List Group Item!*/}
                      <li className="alert-list">
                        {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                        <a
                          href="javascript:;"
                          className="p-t-10 p-b-10 align-items-center"
                          data-navigate="view"
                          data-view-port="#chat"
                          data-view-animation="push-parrallax"
                        >
                          <p className>
                            <span className="text-complete fs-10">
                              <i className="fa fa-circle" />
                            </span>
                          </p>
                          <p className="col overflow-ellipsis fs-12 p-l-10">
                            <span className="text-master link">
                              Jame Smith commented on your status
                              <br />
                            </span>
                            <span className="text-master">“Perfection Simplified - Company Revox"</span>
                          </p>
                        </a>
                        {/* END Alert Item!*/}
                      </li>
                      {/* END List Group Item!*/}
                      {/* BEGIN List Group Item!*/}
                      <li className="alert-list">
                        {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                        <a
                          href="javascript:;"
                          className="p-t-10 p-b-10 align-items-center"
                          data-navigate="view"
                          data-view-port="#chat"
                          data-view-animation="push-parrallax"
                        >
                          <p className>
                            <span className="text-complete fs-10">
                              <i className="fa fa-circle" />
                            </span>
                          </p>
                          <p className="col overflow-ellipsis fs-12 p-l-10">
                            <span className="text-master link">
                              Jame Smith commented on your status
                              <br />
                            </span>
                            <span className="text-master">“Perfection Simplified - Company Revox"</span>
                          </p>
                        </a>
                        {/* END Alert Item!*/}
                      </li>
                      {/* END List Group Item!*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    {/* BEGIN List Group Header!*/}
                    <div className="list-view-group-header text-uppercase">Sever Status</div>
                    {/* END List Group Header!*/}
                    <ul>
                      {/* BEGIN List Group Item!*/}
                      <li className="alert-list">
                        {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                        <a
                          href="#"
                          className="p-t-10 p-b-10 align-items-center"
                          data-navigate="view"
                          data-view-port="#chat"
                          data-view-animation="push-parrallax"
                        >
                          <p className>
                            <span className="text-danger fs-10">
                              <i className="fa fa-circle" />
                            </span>
                          </p>
                          <p className="col overflow-ellipsis fs-12 p-l-10">
                            <span className="text-master link">
                              12:13AM GTM, 10230, ID:WR174s
                              <br />
                            </span>
                            <span className="text-master">Server Load Exceeted. Take action</span>
                          </p>
                        </a>
                        {/* END Alert Item!*/}
                      </li>
                      {/* END List Group Item!*/}
                    </ul>
                  </div>
                </div>
                {/* END Alert List !*/}
              </div>
              {/* EEND Alerts View !*/}
            </div>
          </div>
          {/* END Alerts !*/}
          <div className="tab-pane active no-padding" id="quickview-chat">
            <div className="view-port clearfix" id="chat">
              <div className="view bg-white">
                {/* BEGIN View Header !*/}
                <div className="navbar navbar-default">
                  <div className="navbar-inner">
                    {/* BEGIN Header Controler !*/}
                    <a
                      href="javascript:;"
                      className="inline action p-l-10 link text-master"
                      data-navigate="view"
                      data-view-port="#chat"
                      data-view-animation="push-parrallax"
                    >
                      <i className="pg-plus" />
                    </a>
                    {/* END Header Controler !*/}
                    <div className="view-heading">
                      Chat List
                      <div className="fs-11">Show All</div>
                    </div>
                    {/* BEGIN Header Controler !*/}
                    <a href="#" className="inline action p-r-10 pull-right link text-master">
                      <i className="pg-more" />
                    </a>
                    {/* END Header Controler !*/}
                  </div>
                </div>
                {/* END View Header !*/}
                <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">a</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/1x.jpg"
                              data-src="/static/assets/img/profiles/1.jpg"
                              src="/static/assets/img/profiles/1x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">ava flores</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">b</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/2x.jpg"
                              data-src="/static/assets/img/profiles/2.jpg"
                              src="/static/assets/img/profiles/2x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">bella mccoy</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/3x.jpg"
                              data-src="/static/assets/img/profiles/3.jpg"
                              src="/static/assets/img/profiles/3x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">bob stephens</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">c</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/4x.jpg"
                              data-src="/static/assets/img/profiles/4.jpg"
                              src="/static/assets/img/profiles/4x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">carole roberts</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/5x.jpg"
                              data-src="/static/assets/img/profiles/5.jpg"
                              src="/static/assets/img/profiles/5x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">christopher perez</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">d</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/6x.jpg"
                              data-src="/static/assets/img/profiles/6.jpg"
                              src="/static/assets/img/profiles/6x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">danielle fletcher</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/7x.jpg"
                              data-src="/static/assets/img/profiles/7.jpg"
                              src="/static/assets/img/profiles/7x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">david sutton</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">e</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/8x.jpg"
                              data-src="/static/assets/img/profiles/8.jpg"
                              src="/static/assets/img/profiles/8x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">earl hamilton</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/9x.jpg"
                              data-src="/static/assets/img/profiles/9.jpg"
                              src="/static/assets/img/profiles/9x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">elaine lawrence</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/1x.jpg"
                              data-src="/static/assets/img/profiles/1.jpg"
                              src="/static/assets/img/profiles/1x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">ellen grant</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/2x.jpg"
                              data-src="/static/assets/img/profiles/2.jpg"
                              src="/static/assets/img/profiles/2x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">erik taylor</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/3x.jpg"
                              data-src="/static/assets/img/profiles/3.jpg"
                              src="/static/assets/img/profiles/3x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">everett wagner</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">f</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/4x.jpg"
                              data-src="/static/assets/img/profiles/4.jpg"
                              src="/static/assets/img/profiles/4x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">freddie gomez</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">g</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/5x.jpg"
                              data-src="/static/assets/img/profiles/5.jpg"
                              src="/static/assets/img/profiles/5x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">glen jensen</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/6x.jpg"
                              data-src="/static/assets/img/profiles/6.jpg"
                              src="/static/assets/img/profiles/6x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">gwendolyn walker</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">j</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/7x.jpg"
                              data-src="/static/assets/img/profiles/7.jpg"
                              src="/static/assets/img/profiles/7x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">janet romero</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">k</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/8x.jpg"
                              data-src="/static/assets/img/profiles/8.jpg"
                              src="/static/assets/img/profiles/8x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">kim martinez</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">l</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/9x.jpg"
                              data-src="/static/assets/img/profiles/9.jpg"
                              src="/static/assets/img/profiles/9x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">lawrence white</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/1x.jpg"
                              data-src="/static/assets/img/profiles/1.jpg"
                              src="/static/assets/img/profiles/1x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">leroy bell</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/2x.jpg"
                              data-src="/static/assets/img/profiles/2.jpg"
                              src="/static/assets/img/profiles/2x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">letitia carr</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/3x.jpg"
                              data-src="/static/assets/img/profiles/3.jpg"
                              src="/static/assets/img/profiles/3x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">lucy castro</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">m</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/4x.jpg"
                              data-src="/static/assets/img/profiles/4.jpg"
                              src="/static/assets/img/profiles/4x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">mae hayes</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/5x.jpg"
                              data-src="/static/assets/img/profiles/5.jpg"
                              src="/static/assets/img/profiles/5x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">marilyn owens</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/6x.jpg"
                              data-src="/static/assets/img/profiles/6.jpg"
                              src="/static/assets/img/profiles/6x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">marlene cole</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/7x.jpg"
                              data-src="/static/assets/img/profiles/7.jpg"
                              src="/static/assets/img/profiles/7x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">marsha warren</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/8x.jpg"
                              data-src="/static/assets/img/profiles/8.jpg"
                              src="/static/assets/img/profiles/8x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">marsha dean</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/9x.jpg"
                              data-src="/static/assets/img/profiles/9.jpg"
                              src="/static/assets/img/profiles/9x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">mia diaz</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">n</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/1x.jpg"
                              data-src="/static/assets/img/profiles/1.jpg"
                              src="/static/assets/img/profiles/1x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">noah elliott</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">p</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/2x.jpg"
                              data-src="/static/assets/img/profiles/2.jpg"
                              src="/static/assets/img/profiles/2x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">phyllis hamilton</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">r</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/3x.jpg"
                              data-src="/static/assets/img/profiles/3.jpg"
                              src="/static/assets/img/profiles/3x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">raul rodriquez</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/4x.jpg"
                              data-src="/static/assets/img/profiles/4.jpg"
                              src="/static/assets/img/profiles/4x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">rhonda barnett</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/5x.jpg"
                              data-src="/static/assets/img/profiles/5.jpg"
                              src="/static/assets/img/profiles/5x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">roberta king</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">s</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/6x.jpg"
                              data-src="/static/assets/img/profiles/6.jpg"
                              src="/static/assets/img/profiles/6x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">scott armstrong</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/7x.jpg"
                              data-src="/static/assets/img/profiles/7.jpg"
                              src="/static/assets/img/profiles/7x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">sebastian austin</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/8x.jpg"
                              data-src="/static/assets/img/profiles/8.jpg"
                              src="/static/assets/img/profiles/8x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">sofia davis</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">t</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/9x.jpg"
                              data-src="/static/assets/img/profiles/9.jpg"
                              src="/static/assets/img/profiles/9x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">terrance young</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/1x.jpg"
                              data-src="/static/assets/img/profiles/1.jpg"
                              src="/static/assets/img/profiles/1x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">theodore woods</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/2x.jpg"
                              data-src="/static/assets/img/profiles/2.jpg"
                              src="/static/assets/img/profiles/2x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">todd wood</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/3x.jpg"
                              data-src="/static/assets/img/profiles/3.jpg"
                              src="/static/assets/img/profiles/3x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">tommy jenkins</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                  <div className="list-view-group-container">
                    <div className="list-view-group-header text-uppercase">w</div>
                    <ul>
                      {/* BEGIN Chat User List Item  !*/}
                      <li className="chat-user-list clearfix">
                        <a
                          data-view-animation="push-parrallax"
                          data-view-port="#chat"
                          data-navigate="view"
                          className
                          href="#"
                        >
                          <span className="thumbnail-wrapper d32 circular bg-success">
                            <img
                              width={34}
                              height={34}
                              alt
                              data-src-retina="/static/assets/img/profiles/4x.jpg"
                              data-src="/static/assets/img/profiles/4.jpg"
                              src="/static/assets/img/profiles/4x.jpg"
                              className="col-top"
                            />
                          </span>
                          <p className="p-l-10 ">
                            <span className="text-master">wilma hicks</span>
                            <span className="block text-master hint-text fs-12">Hello there</span>
                          </p>
                        </a>
                      </li>
                      {/* END Chat User List Item  !*/}
                    </ul>
                  </div>
                </div>
              </div>
              {/* BEGIN Conversation View  !*/}
              <div className="view chat-view bg-white clearfix">
                {/* BEGIN Header  !*/}
                <div className="navbar navbar-default">
                  <div className="navbar-inner">
                    <a
                      href="javascript:;"
                      className="link text-master inline action p-l-10 p-r-10"
                      data-navigate="view"
                      data-view-port="#chat"
                      data-view-animation="push-parrallax"
                    >
                      <i className="pg-arrow_left" />
                    </a>
                    <div className="view-heading">
                      John Smith
                      <div className="fs-11 hint-text">Online</div>
                    </div>
                    <a href="#" className="link text-master inline action p-r-10 pull-right ">
                      <i className="pg-more" />
                    </a>
                  </div>
                </div>
                {/* END Header  !*/}
                {/* BEGIN Conversation  !*/}
                <div className="chat-inner" id="my-conversation">
                  {/* BEGIN From Me Message  !*/}
                  <div className="message clearfix">
                    <div className="chat-bubble from-me">Hello there</div>
                  </div>
                  {/* END From Me Message  !*/}
                  {/* BEGIN From Them Message  !*/}
                  <div className="message clearfix">
                    <div className="profile-img-wrapper m-t-5 inline">
                      <img
                        className="col-top"
                        width={30}
                        height={30}
                        src="/static/assets/img/profiles/avatar_small.jpg"
                        alt
                        data-src="/static/assets/img/profiles/avatar_small.jpg"
                        data-src-retina="/static/assets/img/profiles/avatar_small2x.jpg"
                      />
                    </div>
                    <div className="chat-bubble from-them">Hey</div>
                  </div>
                  {/* END From Them Message  !*/}
                  {/* BEGIN From Me Message  !*/}
                  <div className="message clearfix">
                    <div className="chat-bubble from-me">Did you check out Pages framework ?</div>
                  </div>
                  {/* END From Me Message  !*/}
                  {/* BEGIN From Me Message  !*/}
                  <div className="message clearfix">
                    <div className="chat-bubble from-me">Its an awesome chat</div>
                  </div>
                  {/* END From Me Message  !*/}
                  {/* BEGIN From Them Message  !*/}
                  <div className="message clearfix">
                    <div className="profile-img-wrapper m-t-5 inline">
                      <img
                        className="col-top"
                        width={30}
                        height={30}
                        src="/static/assets/img/profiles/avatar_small.jpg"
                        alt
                        data-src="/static/assets/img/profiles/avatar_small.jpg"
                        data-src-retina="/static/assets/img/profiles/avatar_small2x.jpg"
                      />
                    </div>
                    <div className="chat-bubble from-them">Yea</div>
                  </div>
                  {/* END From Them Message  !*/}
                </div>
                {/* BEGIN Conversation  !*/}
                {/* BEGIN Chat Input  !*/}
                <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
                  <div className="row">
                    <div className="col-1 p-t-15">
                      <a href="#" className="link text-master">
                        <i className="fa fa-plus-circle" />
                      </a>
                    </div>
                    <div className="col-8 no-padding">
                      <input
                        type="text"
                        className="form-control chat-input"
                        data-chat-input
                        data-chat-conversation="#my-conversation"
                        placeholder="Say something"
                      />
                    </div>
                    <div className="col-2 link text-master m-l-10 m-t-15 p-l-10 b-l b-grey col-top">
                      <a href="#" className="link text-master">
                        <i className="pg-camera" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* END Chat Input  !*/}
              </div>
              {/* END Conversation View  !*/}
            </div>
          </div>
        </div>
      </div>
      {/* END QUICKVIEW*/}
      {/* START OVERLAY */}
      <div className="overlay hide" data-pages="search">
        {/* BEGIN Overlay Content !*/}
        <div className="overlay-content has-results m-t-20">
          {/* BEGIN Overlay Header !*/}
          <div className="container-fluid">
            {/* BEGIN Overlay Logo !*/}
            <img
              className="overlay-brand"
              src="/static/assets/img/logo.png"
              alt="logo"
              data-src="/static/assets/img/logo.png"
              data-src-retina="/static/assets/img/logo_2x.png"
              width={78}
              height={22}
            />
            {/* END Overlay Logo !*/}
            {/* BEGIN Overlay Close !*/}
            <a href="#" className="close-icon-light overlay-close text-black fs-16">
              <i className="pg-close" />
            </a>
            {/* END Overlay Close !*/}
          </div>
          {/* END Overlay Header !*/}
          <div className="container-fluid">
            {/* BEGIN Overlay Controls !*/}
            <input
              id="overlay-search"
              className="no-border overlay-search bg-transparent"
              placeholder="Search..."
              autocomplete="off"
              spellcheck="false"
            />
            <br />
            <div className="inline-block">
              <div className="checkbox right">
                <input id="checkboxn" type="checkbox" defaultValue={1} defaultChecked="checked" />
                <label htmlFor="checkboxn">
                  <i className="fa fa-search" /> Search within page
                </label>
              </div>
            </div>
            <div className="inline-block m-l-10">
              <p className="fs-13">Press enter to search</p>
            </div>
            {/* END Overlay Controls !*/}
          </div>
          {/* BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like !*/}
          <div className="container-fluid">
            <span>
              <strong>suggestions :</strong>
            </span>
            <span id="overlay-suggestions" />
            <br />
            <div className="search-results m-t-40">
              <p className="bold">Pages Search Results</p>
              <div className="row">
                <div className="col-md-6">
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>
                        <img
                          width={50}
                          height={50}
                          src="/static/assets/img/profiles/avatar.jpg"
                          data-src="/static/assets/img/profiles/avatar.jpg"
                          data-src-retina="/static/assets/img/profiles/avatar2x.jpg"
                          alt
                        />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold result-name">ice cream</span> on pages
                      </h5>
                      <p className="hint-text">via john smith</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>T</div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold result-name">ice cream</span> related topics
                      </h5>
                      <p className="hint-text">via pages</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                      <div>
                        <i className="fa fa-headphones large-text " />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold result-name">ice cream</span> music
                      </h5>
                      <p className="hint-text">via pagesmix</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                </div>
                <div className="col-md-6">
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular bg-info text-white inline m-t-10">
                      <div>
                        <i className="fa fa-facebook large-text " />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        <span className="semi-bold result-name">ice cream</span> on facebook
                      </h5>
                      <p className="hint-text">via facebook</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular bg-complete text-white inline m-t-10">
                      <div>
                        <i className="fa fa-twitter large-text " />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        Tweats on
                        <span className="semi-bold result-name"> ice cream</span>
                      </h5>
                      <p className="hint-text">via twitter</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                  {/* BEGIN Search Result Item !*/}
                  <div className>
                    {/* BEGIN Search Result Item Thumbnail !*/}
                    <div className="thumbnail-wrapper d48 circular text-white bg-danger inline m-t-10">
                      <div>
                        <i className="fa fa-google-plus large-text " />
                      </div>
                    </div>
                    {/* END Search Result Item Thumbnail !*/}
                    <div className="p-l-10 inline p-t-5">
                      <h5 className="m-b-5">
                        Circles on
                        <span className="semi-bold result-name"> ice cream</span>
                      </h5>
                      <p className="hint-text">via google plus</p>
                    </div>
                  </div>
                  {/* END Search Result Item !*/}
                </div>
              </div>
            </div>
          </div>
          {/* END Overlay Search Results !*/}
        </div>
        {/* END Overlay Content !*/}
      </div>
      {/* END OVERLAY */}
    </div>

    <style jsx>{`
      #dashboard-container {
        height: 100%;
      }
    `}</style>
  </Layout>
);
