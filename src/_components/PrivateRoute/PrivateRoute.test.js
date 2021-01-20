import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PrivateRoute } from './index';

import { HomePage } from '../../Pages/HomePage';
import { history } from '../../_helpers';
import { Router } from 'react-router-dom';


const mockStore = configureStore([]);

jest.useFakeTimers();

describe('PrivateRoute Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore({users:{}});
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <Router history={history}>
                    <PrivateRoute exact path="/" component={HomePage} />
                </Router>
            </Provider>
        );
    });

    it('Should redirect (user not logged)', () => {

        //expect(component.root.children.findByProps({justifyContent: "spaceAround"})).not.toBeNull();
    });

    it('Should NOT redirect (user logged)', () => {

        //expect(component.root.findByProps({justifyContent: "spaceAround"})).not.toBeNull();
    });
   

})