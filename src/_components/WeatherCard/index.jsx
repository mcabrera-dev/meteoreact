import { EuiButtonIcon, EuiCard, EuiColorPalettePicker, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiSpacer, EuiStat } from '@elastic/eui';
import React, { useState } from 'react';
import {
    Chart,
    Settings,
    Axis,
    BarSeries,
    DataGenerator,
} from '@elastic/charts';

import { getWeatherIcon } from '../../_helpers/icons'
import {
    euiPaletteCool,
} from '@elastic/eui/lib/services';
import { euiPalettePositive } from '@elastic/eui/lib/services/color';
import { EUI_CHARTS_THEME_LIGHT } from '@elastic/eui/dist/eui_charts_theme';

const euiTheme = EUI_CHARTS_THEME_LIGHT.theme;

export const WeatherCard = ({ weatherCondition }) => {
    const [barPalette, setBarPalette] = useState('euiPaletteColorBlind');
    const dg = new DataGenerator();
    const data2 = dg.generateGroupedSeries(20, 5);
    const customColors = {
        colors: {
            vizColors: euiPalettePositive(5),
        },
    };
    console.log('data2', data2)
    return (
        <EuiFlexItem key={weatherCondition.municipio.CODIGOINE} style={{ minWidth: 350, maxWidth: 350 }}>
            <EuiCard
                icon={getWeatherIcon(weatherCondition.stateSky.id)}
                title={weatherCondition.municipio.NOMBRE}
                isDisabled={false}
                onClick={() => { }}
                footer={<EuiFlexItem grow={false}>
                    <EuiButtonIcon
                        color={'danger'}
                        onClick={() => { }}
                        iconType="trash"
                        aria-label="Next"
                    />
                </EuiFlexItem>}
            >

                <Chart size={{ height: 200 }}>
                    <Settings theme={euiTheme} showLegend={false} />
                    <BarSeries
                        id="status"
                        name="Status"
                        data={[[0, 1], [1, 2]]}
                        xScaleType="time"
                        xAccessor={0}
                        yAccessors={[1]}
                    />
                    <Axis id="bottom-axis" position="bottom" showGridLines />
                    <Axis id="left-axis" position="left" showGridLines />
                </Chart>

                <EuiSpacer size="xxl" />

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
                            title={`${weatherCondition.lluvia}%`}
                            description="Probabilidad de lluvia"
                            titleColor="primary"
                        />
                    </EuiFlexItem>

                </EuiFlexGroup>
            </EuiCard>
        </EuiFlexItem>
    )
}
