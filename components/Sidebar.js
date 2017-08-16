export default () => {
  return (
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
  );
};
