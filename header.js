import React from 'react';
import {Text,View} from 'react-native';
//import { Container, Header, Content, Button, Text } from 'native-base';

//props written in brackets to make Header reusable
const Header = (props) => {
    const {textStyle,viewStyle} = Styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const Styles = {
    viewStyle:{
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 20,
        elevation: 2,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 50
    }
};

export default Header;

