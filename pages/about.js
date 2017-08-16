import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, startClock, addCount, serverRenderClock } from '../store';
import withRedux from 'next-redux-wrapper';
import Page from '../components/Page';
import stylesheet from '../styles/scss/themes/light/light.scss';
import Head from 'next/head';

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());

    return { isServer };
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div id="login">
        <Head>
          <meta charSet="utf-8" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>

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
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Credentials"
                      required
                    />
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
                <button className="btn btn-primary btn-cons m-t-10" type="submit">
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
                        Create a pages account. If you have a facebook account, log into it for this process. Sign in
                        with{' '}
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

        <style jsx>{`
          #login {
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(Counter);
