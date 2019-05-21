//import a library to help create a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './header';
import AlbumList from './AlbumList';


//create a component
const App = () => {
    return(
        <View style={{flex:1}}>
            <Header headerText= {'Albums'} />
            <AlbumList />
            
        </View>    

        
    );
};

//Render it to a device
AppRegistry.registerComponent('albums', () => App);

 