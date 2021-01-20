import { EuiButton, EuiFieldText, EuiFlexGroup, EuiFlexItem, EuiFormRow } from '@elastic/eui'
import React, { useState } from 'react';
import { saveSearch } from "../../actionCreators/user";
import { useDispatch } from 'react-redux';
import {default as UUID} from "uuid"; 


export const SearchSaver = ({ weatherConditionsList }) => {

    const dispatch = useDispatch();

    const [searchName, setSsearchName] = useState(undefined);
    const [error, setError] = useState(undefined);

    const handleChange = (e) => {
        const { value } = e.target;
        setSsearchName(value);
    }

    const formatSearchData = () => {
        const search = {
            name: searchName,
            municipalities: weatherConditionsList.map((wc) => {return wc.municipio}),
            id: UUID.v4()
        }
        return search
    }

    const handleSubmit = (e) => {

        if (validate()) {
            dispatch(saveSearch(formatSearchData()));
        }
    }

    const validate = () => {
        let valid = true;
        if (!searchName) {
            setError('Este campo es requerido')
            valid = false;
        }else{
            setError(undefined)
        }
        return valid

    }


    return (
        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiFormRow fullWidth isInvalid={error} error={error} >
                    <EuiFieldText
                        placeholder="Nombre de búsqueda..."
                        fullWidth
                        aria-label=""
                        value={searchName}
                        onChange={handleChange}
                        isInvalid={error}
                    />
                </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiButton
                    fill
                    color="secondary"
                    size="m"
                    iconType="save"
                    onClick={handleSubmit}>
                    Guardar búsqueda
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}