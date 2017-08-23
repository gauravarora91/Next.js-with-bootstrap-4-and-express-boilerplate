import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import withRedux from 'next-redux-wrapper';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import { getUsers } from '../actions/UserActions';
import { initApp, initAppCompany, initAppSession } from '../actions/AuthActions';
import { withCookies, Cookies } from 'react-cookie';

class Users extends Component {
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
    const res = await store.dispatch(getUsers(token));
    return {};
  }

  render() {
    const { users } = this.props.UserReducer;
    const { isFetching } = this.props.UserReducer;
    return (
      <Layout isAdmin="true" title="Users" page="Users">
        <Link href="/register">
          <button className="btn btn-primary btn-cons m-b-10" type="button">
            <i className="pg-plus" /> <span className="bold">Add new user</span>
          </button>
        </Link>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Users</div>
              </div>
              <div className="card-block">
                <div className="table-responsive">
                  <div id="condensedTable_wrapper" className="dataTables_wrapper no-footer">
                    <table
                      className="table table-hover table-condensed dataTable no-footer"
                      id="condensedTable"
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th style={{ width: '4%' }} className="sorting">
                            id
                          </th>
                          <th style={{ width: 113 }} className="sorting">
                            email
                          </th>
                          <th style={{ width: 130 }} className="sorting" aria-controls="condensedTable">
                            Created At
                          </th>
                          <th style={{ width: 100 }} className="sorting" aria-controls="condensedTable" />
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, key) =>
                          <tr key={key} role="row" className="odd">
                            <td className="v-align-middle semi-bold">
                              {key + 1}
                            </td>
                            <td className="v-align-middle">
                              {user.email}
                            </td>
                            <td className="v-align-middle semi-bold">
                              {user.createdAt}
                            </td>
                            <td className="v-align-middle semi-bold">
                              <div className="btn-group">
                                <button type="button" className="btn btn-success">
                                  <i className="fa fa-pencil" />
                                </button>
                                <button type="button" className="btn btn-success">
                                  <i className="fa fa-trash-o" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    initApp: bindActionCreators(initApp, dispatch)
  };
};

const mapStateToProps = state => state;
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Users);
