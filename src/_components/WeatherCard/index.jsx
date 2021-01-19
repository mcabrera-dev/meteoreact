import { EuiCard, EuiFlexItem, EuiIcon } from '@elastic/eui';
import React from 'react';


export const WeatherCard = ({ weatherCondition }) => {



    return (
        <EuiFlexItem key={weatherCondition.municipio.CODIGOINE}>
            <EuiCard
                icon={<EuiIcon size="xxl" type={`logo${weatherCondition.municipio.NOMBRE}`} />}
                title={`Previsión meteorológica de ${weatherCondition.municipio.NOMBRE}`}
                isDisabled={false}
                description="Example of a card's description. Stick to one or two sentences."
                onClick={() => { }}
            >
                {weatherCondition.municipio.NOMBRE}
            </EuiCard>
        </EuiFlexItem>
    )
}
