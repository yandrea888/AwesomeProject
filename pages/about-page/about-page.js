import React from 'react';
import { View, Text, Button } from 'react-native';
import CardComponent from '../../components/card-component';
import AboutPageStyles from './about-page-style';

function AboutPage({navigation}){
    return(
        <View style={AboutPageStyles.container}>
            <CardComponent></CardComponent> 
            <CardComponent></CardComponent>             
        </View>
    );
}
export default AboutPage;