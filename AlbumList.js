//we need to make a class here, as we need to make it dynamic
//to get data from an online source

import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component{

    //'state' is available only for class based components
    state = { albums : [] };

   //componentwillmount is a lifecycle method
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetails key={album.title} data={album}/>
        );
    }

    render(){
       
        console.log(this.state);
   
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}
//classes do not require semi-colon

export default AlbumList;

