import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { WeatherCard } from './index';
import { fakeReduxForTest } from '../../_helpers/fakeReduxStateForTest';
import { EuiButtonIcon, EuiCard } from '@elastic/eui';
import { mocekdWeatherCondition } from '../../_helpers/mockedQueryForTests';
import { BarSeries } from '@elastic/charts';

const mockStore = configureStore([]);

jest.useFakeTimers();

describe('WeatherCard Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore(fakeReduxForTest);
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <WeatherCard weatherCondition={mocekdWeatherCondition} />
            </Provider>
        );
    });

    it('Has EuiCard component', () => {
        expect(component.root.findByType(EuiCard)).not.toBeNull();
    });
    it('Has Button for delete', () => {
        expect(component.root.findByType(EuiButtonIcon)).not.toBeNull();
    });
    it('Has Chart component', () => {
        expect(component.root.findByType(BarSeries)).not.toBeNull();
    });

    it('Has temperature indicator', () => {
        expect(component.root.findByProps({titleColor:"secondary"})).not.toBeNull();
    });
    it('Has rain probability', () => {
        expect(component.root.findByProps({titleColor:"primary"})).not.toBeNull();
    });

    it('Should remove Weather conditions from list', () => {
        
        renderer.act(() => {
            component.root.findByType(EuiButtonIcon).props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

  
 


})