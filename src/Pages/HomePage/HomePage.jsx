import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiPageContentBody, EuiPageContentHeader, EuiPageContentHeaderSection, EuiPanel, EuiSpacer, EuiTitle } from '@elastic/eui';
import React from 'react';
import { connect } from 'react-redux';
import { Finder, WeatherCard, SearchSaver } from '../../_components';



class HomePage extends React.Component {
    componentDidMount() {

    }


    render() {
        const { weatherConditionList, loading } = this.props;
        console.log('weatherConditionList', weatherConditionList)
        return (
            <>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h3>El tiempo en tu ciudad</h3>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                    <EuiPanel hasShadow={true}>
                        <Finder />
                    </EuiPanel>
                    <EuiSpacer size="xl" />

                    {weatherConditionList.length === 0 && !loading &&
                        <EuiPanel color="subdued" borderRadius="none" hasShadow={false}>
                            <p>Realize una búsqueda para ver datos...</p>
                        </EuiPanel>}

                    {loading &&
                        <EuiFlexGroup justifyContent="spaceAround" responsive={false} alignItems="center">
                            <EuiFlexItem grow={false}>
                                <EuiLoadingSpinner size="xl" />
                            </EuiFlexItem>
                        </EuiFlexGroup>}
                    {!loading && weatherConditionList.length > 0 &&
                        <SearchSaver weatherConditionsList={weatherConditionList}/>}
                    <EuiFlexGroup wrap >
                        {!loading && weatherConditionList.map((wc, idx) => { return <WeatherCard weatherCondition={wc} index={idx} /> })}
                    </EuiFlexGroup>

                    <EuiSpacer size="xl" />
                </EuiPageContentBody>
            </>
        );
    }
}

function mapState(state) {
    const { weatherConditions } = state;
    const { weatherConditionList, loading } = weatherConditions;
    return { weatherConditionList, loading };
}



const connectedHomePage = connect(mapState, {})(HomePage);
export { connectedHomePage as HomePage };