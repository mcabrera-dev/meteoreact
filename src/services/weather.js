export const weatherService = {
    getMunicipalities,
    getMunicipalityWeatherCondition,
  
};


function getMunicipalities(province_code = '08') {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${province_code}/municipios`, requestOptions).then(handleResponse);
}

function getMunicipalityWeatherCondition(municipality) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${municipality.CODPROV}/municipios/${municipality.CODIGOINE.slice(0, 5)}`, requestOptions).then(handleResponse);
}



function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}