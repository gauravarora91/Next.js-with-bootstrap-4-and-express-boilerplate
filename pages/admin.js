import { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Layout from '../components/Layout';
import { initApp, initAppCompany, initAppSession } from '../actions/AuthActions';
//import pageWithIntl from '../components/PageWithIntl';
//import { defineMessages, injectIntl } from 'react-intl';

class Admin extends Component {
  static async getInitialProps({ req, store, isServer, pathname, query }) {
    let token = null;
    let slug = null;
    if (isServer) {
      token = req.cookies['x-access-token'];
      slug = req.headers.host.split('.')[0];
    } else slug = window.location.host.split('.')[0];
    const state = store.getState().AuthReducer;
    if (!state.token) await store.dispatch(initApp(token, slug));
    if (!state.isCompanyDataFetched) await store.dispatch(initAppCompany(slug));
    if (!state.isUserDataFetched) await store.dispatch(initAppSession(token));
    return {};
  }

  render() {
    return (
      <Layout title="This is admin" isAdmin="true">
        <h1>Hi</h1>
      </Layout>
    );
  }
}

const mapStateToProps = state => state;
export default withRedux(initStore, mapStateToProps)(Admin);
