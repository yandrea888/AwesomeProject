import React from 'react';

import { TouchableHighlight, Text, StyleSheet, Dimensions, Image, View, ScrollView } from 'react-native';

const NewsDetail = ({ route, navigation }) => {
    const notFoundImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
    const { author, content, description, publishedAt, title, urlToImage } = route.params;
    return (
        <View style={newsDetailStyles.container}>
            <Image style={newsDetailStyles.imageStyle} source={{ uri: urlToImage != null ? urlToImage : notFoundImage }}></Image>
            <View style={newsDetailStyles.detailStyles}>
                <Text style={newsDetailStyles.titleStyle}>{title}</Text>
                <Text >{author}</Text>
                <Text>{publishedAt}</Text>
                <Text style={newsDetailStyles.descriptionStyle}>{description}</Text>
                <ScrollView>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={newsDetailStyles.contentStyle}>{content}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const newsDetailStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        margin: 10

    },
    imageStyle: {
        // resizeMode: "cover",
        justifyContent: "center",
        width: Dimensions.get('screen').width * 0.9,
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    detailStyles: {
        flex: 1,
        width: Dimensions.get('screen').width * 0.9,
        flexDirection: "column",
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderBottomRightRadius: 5,
        borderColor: "lightgray"
    },
    titleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    descriptionStyle: {
        margin: 10
    },
    contentStyle: {
        flex: 1,
        margin: 10,

    }
});

export default NewsDetail;