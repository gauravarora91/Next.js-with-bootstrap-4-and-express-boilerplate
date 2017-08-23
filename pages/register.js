import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import Layout from '../components/Layout';
import { initStore } from '../store';
import { registerUser } from '../actions/UserActions';
import AddNewUserForm from '../components/AddNewUserForm';

//import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';
//import pageWithIntl from '../components/PageWithIntl';

// const messages = defineMessages({
//   about: {
//     id: 'about',
//     defaultMessage: 'An example app integrating React Intl with Next.js'
//   }
// });

class Register extends Component {
  render() {
    return (
      <Layout noFooter="true" title="Register">
        <AddNewUserForm />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch)
  };
};

const mapStateToProps = state => state;
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Register);
