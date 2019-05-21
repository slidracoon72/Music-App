import React from 'react';
import {View} from 'react-native';


const Card = (props) => {
    return(
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyle : {
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 0.2,
        shadowOffset: {width:0, height: 2},
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        elevation: 2
    }
};

export default Card;