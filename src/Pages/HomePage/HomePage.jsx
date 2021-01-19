import React from 'react';
import { connect } from 'react-redux';
import { Finder, WeatherCard } from '../../_components';



class HomePage extends React.Component {
    componentDidMount() {

    }

    handleMunicipes = () =>{
        console.log('handleMunicipes',this.props)
    }


    render() {
        const { weatherConditionList } = this.props;
        console.log('weatherConditionList',weatherConditionList)
        return (
            <>
                <Finder />
              {weatherConditionList.map((wc) => {return <WeatherCard weatherCondition={wc}/>})}
            </>
        );
    }
}

function mapState(state) {
    const { weatherConditions } = state;
    const { weatherConditionList } = weatherConditions;
    return { weatherConditionList };
}



const connectedHomePage = connect(mapState, {})(HomePage);
export { connectedHomePage as HomePage };