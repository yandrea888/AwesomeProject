import React from 'react';

import { TouchableHighlight, Text, StyleSheet, Dimensions, Image, View, ImageBackground } from 'react-native';

const CardComponent = (props) => {
    // console.log(props.data);
    const notFoundImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
    return (
        <View style={cardStyles.card}>
            <View>
                <Image style={cardStyles.imageStyle} source={{ uri: props.data.urlToImage != null ? props.data.urlToImage : notFoundImage }}></Image>
                <Text style={cardStyles.titleStyle}>{props.data.title}</Text>
            </View>
        </View>
    );
}
const cardStyles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('screen').width * 0.9,
        height: 200,
        // backgroundColor: "#80cbc4",
        marginTop: 10
    },
    imageStyle: {
        // resizeMode: "cover",
        justifyContent: "center",
        width: Dimensions.get('screen').width * 0.9,
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    titleStyle: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        textAlign: "center",
        height: 50,
        borderColor: "lightgray"
    }
});

export default CardComponent;

