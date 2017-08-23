import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import withRedux from 'next-redux-wrapper';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { initStore } from '../store';
import { getCompanies } from '../actions/CompanyActions';

class Companies extends Component {
  static async getInitialProps({ req, store, isServer, pathname, query }) {
    let token = null;
    if (isServer) token = req.cookies['x-access-token'];
    const res = await store.dispatch(getCompanies(token));
    return { token: token };
  }

  componentDidMount() {
    const { token } = this.props;
  }

  render() {
    const { companies } = this.props.CompanyReducer;
    const { isFetching } = this.props.CompanyReducer;
    return (
      <Layout isAdmin="true" title="Companies" page="Companies">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Companies</div>
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
                          <th style={{ width: '1%' }} className="sorting">
                            id
                          </th>
                          <th style={{ width: '4%' }} className="sorting">
                            name
                          </th>
                          <th style={{ width: '6%' }} className="sorting" aria-controls="condensedTable">
                            Created At
                          </th>
                          <th style={{ width: '10%' }} className="sorting" aria-controls="condensedTable" />
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((company, key) =>
                          <tr key={key} role="row" className="odd">
                            <td className="v-align-middle semi-bold">
                              {key + 1}
                            </td>
                            <td className="v-align-middle">
                              {company.name}
                            </td>
                            <td className="v-align-middle semi-bold">
                              {company.createdAt}
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
    getCompanies: bindActionCreators(getCompanies, dispatch)
  };
};

const mapStateToProps = state => state;
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Companies);
