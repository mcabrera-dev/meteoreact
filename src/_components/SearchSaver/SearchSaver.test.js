import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SearchSaver } from './index';
import { fakeReduxForTest } from '../../_helpers/fakeReduxStateForTest';
import { EuiButton } from '@elastic/eui';

import { saveSearch } from '../../actionCreators/user';
import { mocekdWeatherCondition } from '../../_helpers/mockedQueryForTests';

const mockStore = configureStore([]);

jest.useFakeTimers();

describe('SearchSaver Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore(fakeReduxForTest);
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <SearchSaver weatherConditionsList={[mocekdWeatherCondition]} />
            </Provider>
        );
    });

    it('Has save search Button', () => {
        expect(component.root.findByType(EuiButton)).not.toBeNull();
    });
    it('Should not save if empty name', () => {
        renderer.act(() => {
            component.root.findByType(EuiButton).props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
    it('Should save if not empty name', () => {
        
        renderer.act(() => {
            component.root.findByProps({ placeholder: "Nombre de búsqueda..." }).props.onChange({ target: { value: 'NameSearch' } });
        });

        renderer.act(() => {
            component.root.findByType(EuiButton).props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

 


})