import { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Layout from '../components/Layout';
import cookies from 'next-cookies';
//import pageWithIntl from '../components/PageWithIntl';
//import { defineMessages, injectIntl } from 'react-intl';

class Admin extends Component {
  constructor(props) {
    super(props);
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
