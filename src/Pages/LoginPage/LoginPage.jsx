import React from 'react';
import { connect } from 'react-redux';

import { EuiFieldPassword, EuiButton, EuiFieldText, EuiForm, EuiFormRow, EuiPageContent, EuiPageContentBody, EuiPageContentHeader, EuiPageContentHeaderSection, EuiPageHeader, EuiPageHeaderSection, EuiTitle, EuiFlexItem, EuiFlexGroup, EuiLoadingSpinner, EuiSpacer } from '@elastic/eui';
import { bindActionCreators } from 'redux';

import * as userActionCreators from '../../actionCreators/user'
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.userActions.logout();
        this.state = {
            username: '',
            password: '',
            errors: {},
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validate(username, password) { 
        let valid = true;
        const errors = {};
        if(!password){
            errors.password = 'Este campo es requerido'
            valid = false;
        }
        if(!username){
            errors.username = 'Este campo es requerido'
            valid = false;
        }
        this.setState({errors})
        return valid
        
    }

    componentDidUpdate(){
        if(this.props.user){
            this.props.history.push("/", { from: this.props.location });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { username, password } = this.state;
        if (this.validate(username, password)) {
            this.props.userActions.login({username, password});
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { errors } = this.state;
        const { username, password, submitted } = this.state;
        return (
            <>

                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>Iniciar sessión</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                    <EuiForm component="form" onSubmit={this.handleSubmit}>

                        <EuiFormRow label="Nombre de Usuario" isInvalid={errors['username']} error={errors['username']} >
                            <EuiFieldText
                                name="username"
                                placeholder="Introduzca nombre de usuario"
                                value={username }
                                onChange={this.handleChange} 
                                isInvalid={errors['username']} />
                        </EuiFormRow>
                        <EuiFormRow label="Contraseña" isInvalid={errors['password']} error={errors['password']} >
                            <EuiFieldPassword
                                name="password"
                                placeholder="Introduzca contraseña"
                                type={'dual'}
                                value={password}
                                onChange={this.handleChange}
                                isInvalid={errors['password']}
                            />
                        </EuiFormRow>
                        <EuiSpacer size="m" />



                        <EuiFlexGroup justifyContent="spaceAround" responsive={false} alignItems="center">
                            <EuiFlexItem grow={false}>
                                <EuiButton color="secondary" href="/register">Resgistro</EuiButton>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                            <EuiButton onClick={this.handleSubmit}>Iniciar sesión</EuiButton>
                            </EuiFlexItem>
                            {loggingIn && <EuiLoadingSpinner size="m" />}
                        </EuiFlexGroup>
                    </EuiForm>
                </EuiPageContentBody>

            </>
        );
    }
}

function mapState(state) {
    const { loggingIn, user } = state.users;
    return { loggingIn, user };
}



function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActionCreators, dispatch),
    }
  }


const connectedLoginPage = connect(mapState, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage };