//only giving a presentation, so it can be a functional component
//no need to make it a class component

import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({data}) => {


//to avoid writing props.data.title multiple times, we can make
//a reference for this in one place and then use just the name.
    const {title, artist, thumbnail_image, image, url} = data;

    const {textStyle,thumbnailContainerStyle,thumbnailStyle,
        headerStyle,imageStyle} = Styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image}}/>
                </View>
                <View style={textStyle}>
                    <Text style={headerStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                
                    <Image
                        source={{ uri: image}}
                        style={imageStyle}
                    />
                
            </CardSection>

            <CardSection>
                <Button onPress = {()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>

        </Card>

    );
     
};

const Styles = {
    textStyle : {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 325,
        width: null,
        flex: 1

    }
   
};

export default AlbumDetails;
