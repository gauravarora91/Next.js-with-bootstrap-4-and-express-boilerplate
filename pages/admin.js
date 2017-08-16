import Layout from '../components/layout';
import pageWithIntl from '../components/PageWithIntl';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

export default pageWithIntl(({ intl }) =>
  <Layout>
    <div>
      <Sidebar />

      {/* START PAGE-CONTAINER */}
      <div className="page-container ">
        <Header />
        {/* START PAGE CONTENT WRAPPER */}
        <div className="page-content-wrapper ">
          {/* START PAGE CONTENT */}
          <div className="content ">
            {/* START CONTAINER FLUID */}
            <div className=" container-fluid   container-fixed-lg">
              <Breadcrumb />
            </div>
          </div>
          {/* END PAGE CONTENT */}

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
        </div>
      </div>
      {/* END PAGE CONTAINER */}
    </div>

    <style jsx>{`
      #dashboard-container {
        height: 100%;
      }
    `}</style>
  </Layout>
);
