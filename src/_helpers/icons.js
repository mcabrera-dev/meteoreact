import React from 'react';
import icon11 from '../assets/weatherIcons/11.svg'
import icon11n from '../assets/weatherIcons/11n.svg'
import icon13 from '../assets/weatherIcons/13.svg'
import icon13n from '../assets/weatherIcons/13n.svg'
import icon16 from '../assets/weatherIcons/16.svg'
import icon17 from '../assets/weatherIcons/17.svg'
import icon17n from '../assets/weatherIcons/17n.svg'
import icon64 from '../assets/weatherIcons/64.svg'
import icon46 from '../assets/weatherIcons/46.svg'
import icon43 from '../assets/weatherIcons/43.svg'
import icon43n from '../assets/weatherIcons/43n.svg'
import icon74 from '../assets/weatherIcons/74.svg'
import icon81 from '../assets/weatherIcons/81.svg'
import icon81n from '../assets/weatherIcons/81n.svg'
import iconWind from '../assets/weatherIcons/wind.svg'


import { EuiIcon } from '@elastic/eui'

export const getWeatherIcon = (id) => {
    switch (id) {

        case "17":
            return <EuiIcon type={icon17} size="xl" title="Custom SVG icon" />
        case "17n":
            return <EuiIcon type={icon17n} size="xl" title="Custom SVG icon" />
        case "14":
        case "15":
        case "16":
        case "14n":
        case "15n":
        case "16n":
            return <EuiIcon type={icon16} size="xl" title="Custom SVG icon" />
        case "12":
        case "13":
            return <EuiIcon type={icon13} size="xl" title="Custom SVG icon" />
        case "12n":
        case "13n":
            return <EuiIcon type={icon13n} size="xl" title="Custom SVG icon" />
        case "11":
            return <EuiIcon type={icon11} size="xl" title="Custom SVG icon" />
        case "11n":
            return <EuiIcon type={icon11n} size="xl" title="Custom SVG icon" />
        case "64":
        case "63":
        case "62":
        case "61":
        case "54":
        case "53":
        case "52":
        case "51":
            return <EuiIcon type={icon64} size="xl" title="Custom SVG icon" />
        case "46":
        case "45":
        case "44":
        case "26":
        case "25":
        case "24":
        case "23":
        case "46n":
        case "45n":
        case "44n":
        case "26n":
        case "25n":
        case "24n":
        case "23n":
            return <EuiIcon type={icon46} size="xl" title="Custom SVG icon" />
        case "43":
            return <EuiIcon type={icon43} size="xl" title="Custom SVG icon" />
        case "43n":
            return <EuiIcon type={icon43n} size="xl" title="Custom SVG icon" />
        case "74":
        case "73":
        case "72":
        case "71":
        case "36":
        case "35":
        case "34":
        case "33":
            return <EuiIcon type={icon74} size="xl" title="Custom SVG icon" />
        case "81":
        case "82":
            return <EuiIcon type={icon81} size="xl" title="Custom SVG icon" />
        case "81n":
        case "82n":
            return <EuiIcon type={icon81n} size="xl" title="Custom SVG icon" />
        case "wind":
            return <EuiIcon type={iconWind} size="xl" title="Custom SVG icon" />
        default:
            return <EuiIcon type={icon11} size="xl" title="Custom SVG icon" />








    }
}

