import React from 'react';
import { connect } from 'react-redux';

import * as userActionCreators from '../../actionCreators/user'
import { bindActionCreators } from 'redux';
import { EuiFieldPassword, EuiButton, EuiFieldText, EuiForm, EuiFormRow, EuiPageContent, EuiPageContentBody, EuiPageContentHeader, EuiPageContentHeaderSection, EuiPageHeader, EuiPageHeaderSection, EuiTitle, EuiFlexItem, EuiFlexGroup, EuiLoadingSpinner, EuiSpacer } from '@elastic/eui';

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
        const { user, submitted } = this.state;
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

            // <div className="col-md-6 col-md-offset-3">
            //     <h2>Register</h2>
            //     <form name="form" onSubmit={this.handleSubmit}>
            //         <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
            //             <label htmlFor="firstName">First Name</label>
            //             <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
            //             {submitted && !user.firstName &&
            //                 <div className="help-block">First Name is required</div>
            //             }
            //         </div>
            //         <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
            //             <label htmlFor="lastName">Last Name</label>
            //             <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
            //             {submitted && !user.lastName &&
            //                 <div className="help-block">Last Name is required</div>
            //             }
            //         </div>
            //         <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            //             <label htmlFor="username">Username</label>
            //             <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
            //             {submitted && !user.username &&
            //                 <div className="help-block">Username is required</div>
            //             }
            //         </div>
            //         <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            //             <label htmlFor="password">Password</label>
            //             <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
            //             {submitted && !user.password &&
            //                 <div className="help-block">Password is required</div>
            //             }
            //         </div>
            //         <div className="form-group">
            //             <button className="btn btn-primary">Register</button>
            //             {registering && 
            //                 <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            //             }
            //             <Link to="/login" className="btn btn-link">Cancel</Link>
            //         </div>
            //     </form>
            // </div>
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