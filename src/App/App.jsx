import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import * as alertActionCreators from '../actionCreators/alert'
import { PrivateRoute } from '../_components';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage';
import {
    EuiPage,
    EuiPageBody,
    EuiPageHeader,
    EuiPageContent,
    EuiPageHeaderSection,
    EuiTitle,
    EuiCallOut,
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,

} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import { bindActionCreators } from 'redux';
import { Flyout } from '../_components/Flyout'


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
                <EuiPageBody component="div">
                    <EuiPageHeader>
                        <EuiPageHeaderSection>
                            <EuiTitle size="l">
                                <h1>Meteoreact</h1>
                            </EuiTitle>
                        </EuiPageHeaderSection>
                        <EuiPageHeaderSection>
                            {localStorage.getItem('user') && 
                            <EuiFlexGroup justifyContent="spaceAround" responsive={false} alignItems="center">
                                <EuiFlexItem grow={false}>
                                <Flyout />
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                <EuiButton color="danger" href="/login">Cerrar Sesión</EuiButton>
                                </EuiFlexItem>
                            </EuiFlexGroup>}
                        </EuiPageHeaderSection>
                    </EuiPageHeader>
                    <EuiPageContent grow={true}>
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