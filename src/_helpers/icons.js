import React from 'react';
import sunnyIcom from '../weatherIcons/wi-day-sunny.svg'
/* import { ReactComponent as asnightClear } from '../../public/weatherIcons/wi-night-clear.svg'
import { ReactComponent as asdaySunnyOvercatsIcom } from '../../public/weatherIcons/wi-day-sunny-overcast.svg'
import { ReactComponent as asnightCloudyIcom } from '../../public/weatherIcons/wi-night-alt-cloudy.svg'
import { ReactComponent as ascloudyIcon } from '../../public/weatherIcons/wi-cloudy.svg' */
import { EuiIcon } from '@elastic/eui'



export const getWeatherIcon = (id) => {
    switch (id) {

        case "17":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "17n":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "16":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "13":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "13n":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "11":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "11n":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "64":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "46":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "43":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "43n":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "74":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "81":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "81n":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />
        case "wind":
            return <EuiIcon type={sunnyIcom} size="xl" title="Custom SVG icon" />








    }
}

