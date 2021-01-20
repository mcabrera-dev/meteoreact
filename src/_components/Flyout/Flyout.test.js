import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Flyout } from './index';
import { fakeReduxForTest } from '../../_helpers/fakeReduxStateForTest';
import { EuiButton } from '@elastic/eui';
import { removeSearch } from "../../actionCreators/user";
import { getMunicipalityWheatherCondition } from '../../actionCreators/weatherCondition';

const mockStore = configureStore([]);

jest.useFakeTimers();

describe('Flyout Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore(fakeReduxForTest);
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <Flyout />
            </Provider>
        );
    });

    it('Has Open flyout Button', () => {
        expect(component.root.findByType(EuiButton)).not.toBeNull();
    });
    it('Should open flyout', () => {
        renderer.act(() => {
            component.root.findByType(EuiButton).props.onClick();
        });
        expect(component.root.findByProps({ droppableId: "DROPPABLE_AREA" })).not.toBeNull();
    });
    it('Should load an stored search', () => {
        renderer.act(() => {
            component.root.findByType(EuiButton).props.onClick();
        });
        renderer.act(() => {
            component.root.findAllByProps({ iconType: "search" })[0].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            getMunicipalityWheatherCondition(fakeReduxForTest.users.user.searches[0].municipalities)
        );
    });

    it('Should remove an stored search', () => {
        renderer.act(() => {
            component.root.findByType(EuiButton).props.onClick();
        });
        renderer.act(() => {
            component.root.findAllByProps({ iconType: "trash" })[0].props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            removeSearch(fakeReduxForTest.users.user.searches[0])
        );
    });


})