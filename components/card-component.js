import React from 'react';

import {TouchableHighlight, Text, StyleSheet, Dimensions, Image} from 'react-native';

const notFoundImage = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
const CardComponent = (props) =>{
    //console.log(props.datos.city);
    return(
        <TouchableHighlight style={cardStyles.card}>
            <Image style={cardStyles.imageStyle} source={{uri: props.data.urlToImage}}></Image>
        </TouchableHighlight>
    );
}
const cardStyles = StyleSheet.create({
    card:{
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('screen').width*0.9,
        height: 317,
        backgroundColor: "#80cbc4",
        margin: 5,
        borderRadius: 5
    },
    imageStyle:{
        width: Dimensions.get('screen').width*0.9,
        height: 217,
    }
});
export default CardComponent;