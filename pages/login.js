import Layout from '../components/layout';
import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';
import pageWithIntl from '../components/PageWithIntl';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

const messages = defineMessages({
  about: {
    id: 'about',
    defaultMessage: 'An example app integrating React Intl with Next.js'
  }
});

export default pageWithIntl(({ intl }) =>
  <Layout>
    <div id="login">
      <div className="login-wrapper ">
        {/* START Login Background Pic Wrapper*/}
        <div className="bg-pic">
          {/* START Background Pic*/}
          <img
            src="/static/assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg"
            data-src="/static/assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg"
            data-src-retina="/static/assets/img/demo/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg"
            alt
            className="lazy"
          />
          {/* END Background Pic*/}
          {/* START Background Caption*/}
          <div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
            <h2 className="semi-bold text-white">Pages make it easy to enjoy what matters the most in the life</h2>
            <p className="small">
              images Displayed are solely for representation purposes only, All work copyright of respective owner,
              otherwise © 2013-2014 REVOX.
            </p>
          </div>
          {/* END Background Caption*/}
        </div>
        {/* END Login Background Pic Wrapper*/}
        {/* START Login Right Container*/}
        <div className="login-container bg-white">
          <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
            <img
              src="/static/assets/img/logo.png"
              alt="logo"
              data-src="/static/assets/img/logo.png"
              data-src-retina="/static/assets/img/logo_2x.png"
              width={78}
              height={22}
            />
            <p className="p-t-35">Sign into your pages account</p>
            {/* START Login Form */}
            <form id="form-login" className="p-t-15" role="form" action="index.html">
              {/* START Form Control*/}
              <div className="form-group form-group-default">
                <label>Login</label>
                <div className="controls">
                  <input type="text" name="username" placeholder="User Name" className="form-control" required />
                </div>
              </div>
              {/* END Form Control*/}
              {/* START Form Control*/}
              <div className="form-group form-group-default">
                <label>Password</label>
                <div className="controls">
                  <input type="password" className="form-control" name="password" placeholder="Credentials" required />
                </div>
              </div>
              {/* START Form Control*/}
              <div className="row">
                <div className="col-md-6 no-padding sm-p-l-10">
                  <div className="checkbox ">
                    <input type="checkbox" defaultValue={1} id="checkbox1" />
                    <label htmlFor="checkbox1">Keep Me Signed in</label>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                  <a href="#" className="text-info small">
                    Help? Contact Support
                  </a>
                </div>
              </div>
              {/* END Form Control*/}
              <button
                onClick={e => {
                  e.preventDefault();
                  Router.push('/admin');
                }}
                className="btn btn-primary btn-cons m-t-10"
                type="submit"
              >
                Sign in
              </button>
            </form>
            {/*END Login Form*/}
            <div className="pull-bottom sm-pull-bottom">
              <div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                <div className="col-sm-3 col-md-2 no-padding">
                  <img
                    alt
                    className="m-t-5"
                    data-src="/static/assets/img/demo/pages_icon.png"
                    data-src-retina="/static/assets/img/demo/pages_icon_2x.png"
                    height={60}
                    src="/static/assets/img/demo/pages_icon.png"
                    width={60}
                  />
                </div>
                <div className="col-sm-9 no-padding m-t-10">
                  <p>
                    <small>
                      Create a pages account. If you have a facebook account, log into it for this process. Sign in with{' '}
                      <a href="#" className="text-info">
                        Facebook
                      </a>{' '}
                      or{' '}
                      <a href="#" className="text-info">
                        Google
                      </a>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Login Right Container*/}
      </div>

      <style jsx>{`
        #login {
          height: 100%;
        }
      `}</style>
    </div>
  </Layout>
);
