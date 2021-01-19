import { EuiButton, EuiComboBox, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow } from '@elastic/eui';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { provincesList } from '../../_helpers/provincesList'
import * as provincesActionCreators from '../../actionCreators/province'
import { useDispatch, useSelector } from "react-redux";
import { getMunicipalities } from "../../actionCreators/province";
import { getMunicipalityWheatherCondition } from "../../actionCreators/weatherCondition";

export const Finder = ({ }) => {

    const municipalities = useSelector(state => state.provinces.municipalities);
   
    const dispatch = useDispatch();

    const [selectedProvince, setSelectedProvince] = useState([]);
    const [selectedMunicipalities, setSelectedMunicipalities] = useState([]);
    const [isLoadingMunicipalities, setIsLoadingMunicipalities] = useState(false)

    const onChangeProvince = (selectedOptions) => {
        setSelectedProvince(selectedOptions);
        console.log('selectedOptions', selectedOptions)
        if (selectedOptions && selectedOptions[0]) {
            dispatch(getMunicipalities(selectedOptions[0].key));
            //setIsLoadingMunicipalities(true)
        }

    };

    const onChangeMunicipalities = (selectedOptions) => {
        setSelectedMunicipalities(selectedOptions);
     
        if (selectedOptions && selectedOptions.length > 0) {
            console.log('selectedOptions', selectedOptions)
            dispatch(getMunicipalityWheatherCondition(selectedOptions[0]));
        }

    };

    return (
        <EuiFlexGroup style={{ maxWidth: '80%' }}>
            <EuiFlexItem>
                <EuiFormRow label="Provincia" helpText="Seleccione provincia">
                    <EuiComboBox
                        placeholder="Seleccione provincia"
                        singleSelection={{ asPlainText: true }}
                        options={provincesList}
                        selectedOptions={selectedProvince}
                        onChange={onChangeProvince}
                        isClearable={true}
                    />
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiFormRow label="Municipios" helpText="Seleccione uno o varios municipios">
                    <EuiComboBox
                        placeholder="Seleccione municipios"
                        async
                        options={municipalities}
                        isLoading={isLoadingMunicipalities}
                        selectedOptions={selectedMunicipalities}
                        onChange={onChangeMunicipalities}
                        isClearable={true}
                    />
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiFormRow hasEmptyLabelSpace>
                    <EuiButton>Guardar búsqueda</EuiButton>
                </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}
