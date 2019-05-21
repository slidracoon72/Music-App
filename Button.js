import React from'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({onPress,children}) => {

    const {buttonStyle,textStyle} = Styles;

    return (
        <TouchableOpacity 
        onPress={onPress}
        style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>

    );
};

const Styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF'

    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#007AFF',
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '600'
    }
};

export default Button;
