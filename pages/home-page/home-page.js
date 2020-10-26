import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import CardComponent from '../../components/card-component';
import HomePageStyle from './home-page-style';
function HomePage({navigation}){

    const apiEndpoint = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d94dab317e4f456b95e2a939862d6b3e";
    
    const [news, setNews] = useState([]);
    const fetchNewsApi = async ()=>{
        const response = await fetch(apiEndpoint);
        const newsData = await response.json();
        setNews(newsData.articles);
    }

    useEffect(()=>{
        fetchNewsApi();
    },[]);

    return(
        <View style={HomePageStyle.container}>
            <FlatList data={news} renderItem={({item}) => <CardComponent data={item}></CardComponent>} keyExtractor={item => item.publishedAt}
            ></FlatList>
        </View>
    );
}

export default HomePage;

 /*const data = {
        name:"Andrea",
        city:"Sabaneta",
        age: 45
    };
    const data2 = {
        name:"Yuly",
        city:"Envigado",
        age: 39
    };

    <Button title= "Ir a Contact" onPress={()=>navigation.navigate("Contact")} ></Button>*/