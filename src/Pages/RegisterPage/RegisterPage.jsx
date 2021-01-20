import React from 'react';
import { connect } from 'react-redux';

import * as userActionCreators from '../../actionCreators/user'
import { bindActionCreators } from 'redux';
import { EuiFieldPassword, EuiButton, EuiFieldText, EuiForm, EuiFormRow, EuiPageContentBody, EuiPageContentHeader, EuiPageContentHeaderSection, EuiTitle, EuiFlexItem, EuiFlexGroup, EuiLoadingSpinner, EuiSpacer } from '@elastic/eui';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            errors: {},
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.userActions.register(user);
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.registering &&this.props.registered ){
            this.props.history.push("/", { from: this.props.location });
        }
    }

    render() {
        const { registering } = this.props;
        const { errors } = this.state;
        const { user } = this.state;
        return (
            <>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>Nuevo usuario</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                    <EuiForm component="form" onSubmit={this.handleSubmit}>
                        <EuiFormRow label="Nombre" isInvalid={errors['firstName']} error={errors['firstName']} >
                            <EuiFieldText
                                name="firstName"
                                placeholder="Introduzca nombre"
                                value={user.firstName}
                                onChange={this.handleChange}
                                isInvalid={errors['firstName']} />
                        </EuiFormRow>
                        <EuiFormRow label="Apellidos" isInvalid={errors['lastName']} error={errors['lastName']} >
                            <EuiFieldText
                                name="lastName"
                                placeholder="Introduzca nombre de usuario"
                                value={user.lastName}
                                onChange={this.handleChange}
                                isInvalid={errors['lastName']} />
                        </EuiFormRow>

                        <EuiFormRow label="Nombre de Usuario" isInvalid={errors['username']} error={errors['username']} >
                            <EuiFieldText
                                name="username"
                                placeholder="Introduzca nombre de usuario"
                                value={user.username}
                                onChange={this.handleChange}
                                isInvalid={errors['username']} />
                        </EuiFormRow>
                        <EuiFormRow label="Contraseña" isInvalid={errors['password']} error={errors['password']} >
                            <EuiFieldPassword
                                name="password"
                                placeholder="Introduzca contraseña"
                                type={'dual'}
                                value={user.password}
                                onChange={this.handleChange}
                                isInvalid={errors['password']}
                            />
                        </EuiFormRow>
                        <EuiSpacer size="m" />



                        <EuiFlexGroup justifyContent="spaceAround" responsive={false} alignItems="center">
                            <EuiFlexItem grow={false}>
                                <EuiButton color="secondary" href="/login">Cancelar</EuiButton>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiButton onClick={this.handleSubmit}>Resgistro</EuiButton>
                            </EuiFlexItem>
                            {registering && <EuiLoadingSpinner size="m" />}
                        </EuiFlexGroup>
                    </EuiForm>
                </EuiPageContentBody>
            </>
        );
    }
}

function mapState(state) {
    const { registering, registered } = state.users;
    return { registering, registered };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActionCreators, dispatch),
    }
}

const connectedRegisterPage = connect(mapState, mapDispatchToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };