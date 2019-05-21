import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={Style.containerStyle}>
        {props.children}
        </View>
    );
};

const Style = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
};

export default CardSection;