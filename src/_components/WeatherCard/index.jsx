import React, { useState } from 'react';
import { EuiButtonIcon, EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiStat } from '@elastic/eui';
import {
    Chart,
    Axis,
    BarSeries,
    Position,
    ScaleType,
} from '@elastic/charts';


import { getWeatherIcon } from '../../_helpers/icons'
import '@elastic/charts/dist/theme_only_light.css';
import { useDispatch } from 'react-redux';
import { removeWeatherCondition } from "../../actionCreators/weatherCondition";

const getRainPrediction = (weatherCondition) => {
    const predictions = weatherCondition.proximos_dias
    const rainPredictions = [];

    predictions.forEach((p) => {
        rainPredictions.push({ x: p['@attributes'].fecha, y: Array.isArray(p.prob_precipitacion) ? p.prob_precipitacion[0] : p.prob_precipitacion })
    });

    return rainPredictions
}

export const WeatherCard = ({ weatherCondition }) => {
    const dispatch = useDispatch();

    const onRemove = (weatherCondition) => {
        dispatch(removeWeatherCondition(weatherCondition));

    };

    return (
        <EuiFlexItem key={weatherCondition.municipio.CODIGOINE} style={{ minWidth: 350, maxWidth: 350 }}>
            <EuiCard
                icon={getWeatherIcon(weatherCondition.stateSky.id)}
                title={weatherCondition.municipio.NOMBRE}
                isDisabled={false}
                description={false}
                footer={<EuiFlexItem grow={false}>
                    <EuiButtonIcon
                        color={'danger'}
                        onClick={() => onRemove(weatherCondition)}
                        iconType="trash"
                        aria-label="Next"
                    />
                </EuiFlexItem>}
            >

                <EuiFlexGroup wrap>
                    <EuiFlexItem>
                        <EuiStat
                            title={`${weatherCondition.temperatura_actual}º`}
                            description="Temperatura actual"
                            titleColor="secondary"
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiStat
                            title={`${weatherCondition.pronostico.hoy.prob_precipitacion[3]}%`}
                            description="Probabilidad de lluvia"
                            titleColor="primary"
                        />
                    </EuiFlexItem>

                </EuiFlexGroup>

                <EuiSpacer size="l" />
                <h4>Previsión de lluvia para los próximos días</h4>

                <div> <Chart size={[340, 200]}>
                    <Axis id="rainProb" title="Probabilidad de lluvia" position={Position.Left} />
                    <Axis id="x" position={Position.Bottom} />
                    <BarSeries
                        id="bars"
                        name="amount"
                        xScaleType={ScaleType.Ordinal}
                        xAccessor="x"
                        yAccessors={["y"]}
                        data={getRainPrediction(weatherCondition)}
                    />
                </Chart></div>
            </EuiCard>
        </EuiFlexItem>
    )
}
