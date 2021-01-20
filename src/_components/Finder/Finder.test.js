import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Finder } from './index';
import { fakeReduxForTest } from '../../_helpers/fakeReduxStateForTest';
import { EuiButton } from '@elastic/eui';
import { getMunicipalities } from "../../actionCreators/province";

const mockStore = configureStore([]);

jest.useFakeTimers();

describe('Finder Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore(fakeReduxForTest);
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <Finder />
            </Provider>
        );
    });

    it('Has search Button', () => {
        expect(component.root.find(EuiButton)).not.toBeNull();
    });
    it('Has search Provice selector', () => {
        expect(component.root.findByProps({ placeholder: "Seleccione provincia" })).not.toBeNull();
    });
    it('Has search Municipality selector', () => {
        expect(component.root.findByProps({ placeholder: "Seleccione municipios" })).not.toBeNull();
    });

    it('should dispatch an action on province change click', () => {
        renderer.act(() => {
            component.root.findByProps({ placeholder: "Seleccione provincia" }).props.onChange([{ key: "08", label: "Barcelona" }]);
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            getMunicipalities('08')
        );
    });

    it('should not dispatch an action on search button click (No selectedMunicipalities)', () => {
        renderer.act(() => {
            component.root.findByProps({ color: "primary" }).props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });

    it('should dispatch 2 action on search button click (With selectedMunicipalities)', () => {
        renderer.act(() => {
            component.root.findByProps({ placeholder: "Seleccione provincia" }).props.onChange([{ key: "08", label: "Barcelona" }]);
        });
        renderer.act(() => {
            component.root.findByProps({ placeholder: "Seleccione municipios" }).props.onChange([{
                ALTITUD: 106,
                CODIGOINE: "08001000000",
                CODIGOINE_CAPITAL: "08001001401",
                CODPROV: "08",
                COD_GEO: "08003",
                DISCREPANTE_INE: 0,
                HOJA_MTN25: "0392-3",
                ID_REL: "1080018",
                LATITUD_ETRS89_REGCAN95: 41.51794352,
                LONGITUD_ETRS89_REGCAN95: 1.90221018,
                NOMBRE: "Abrera",
                NOMBRE_CAPITAL: "Abrera",
                NOMBRE_PROVINCIA: "Barcelona",
                ORIGEN_ALTITUD: "MDT5",
                ORIGEN_COORD: "Mapa",
                PERIMETRO: 23973,
                POBLACION_CAPITAL: "8985",
                POBLACION_MUNI: 12125,
                SUPERFICIE: 1998.4019,
                label: "Abrera"
            }]);
        });
        renderer.act(() => {
            component.root.findByProps({ color: "primary" }).props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(
            getMunicipalities('08')
        );
    });
})