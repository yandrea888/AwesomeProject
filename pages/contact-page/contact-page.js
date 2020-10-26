import React from 'react';
import { View, Text, Button } from 'react-native';

function ContactPage({route, navigation}){
    console.log(route.params);
    return(
        <View>
            <Text>Soy la Contac Page </Text>
            <Button title= "Ir a About" onPress={()=>navigation.navigate('About')} ></Button>
        </View>
    );
}
export default ContactPage;