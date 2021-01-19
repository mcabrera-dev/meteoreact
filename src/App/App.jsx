import React from 'react';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import * as alertActionCreators from '../actionCreators/alert'
import { PrivateRoute } from '../_components';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage';
import {
    EuiPage,
    EuiPageSideBar,
    EuiPageBody,
    EuiPageHeader,
    EuiPageContent,
    EuiPageHeaderSection,
    EuiTitle,
    EuiCallOut,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_amsterdam_dark.css';
import { bindActionCreators } from 'redux';


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.alertActions.clear();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <EuiPage>
                <EuiPageSideBar>
                 
                </EuiPageSideBar>
                <EuiPageBody component="div">
                    <EuiPageHeader>
                        <EuiPageHeaderSection>
                            <EuiTitle size="l">
                                <h1>Meteoreact</h1>
                            </EuiTitle>
                        </EuiPageHeaderSection>
                        <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
                    </EuiPageHeader>
                    <EuiPageContent>
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />

                            </Switch>
                        </Router>
                    </EuiPageContent>
                    {alert.message && <EuiCallOut title={alert.title} color={alert.type} iconType="user">
                        <p>
                            {alert.message}
                        </p>
                    </EuiCallOut>}
                </EuiPageBody>
            </EuiPage>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}


function mapDispatchToProps(dispatch) {
    return {
        alertActions: bindActionCreators(alertActionCreators, dispatch),
    }
  }


const connectedApp = connect(mapState, mapDispatchToProps)(App);
export { connectedApp as App };