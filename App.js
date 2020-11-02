import React from 'react';
import { View, Text, } from 'react-native';

  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import HomePage from './pages/home-page/home-page';
  import ContactPage from './pages/contact-page/contact-page';
  import AboutPage from './pages/about-page/about-page';
import NewsDetail from './pages/news-detail/news-detail';

  const Stack = createStackNavigator();

  function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Contact" component={ContactPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;


/*const App = () => {
  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');
  const validateUserFields = () =>{
    // if(name == "" || identification == "" || city == "" || telephone == ""){
    //   Alert.alert("Todos los campos deben estar llenos");
    // }
    if(name == ""){
      Alert.alert("Debe ingresar el nombre");
    }
    else if(identification == "" || isNaN(identification) || identification.length < 5){
      Alert.alert("Debe ingresar el documento, debe ser numérico y debe contener más de 5 carácteres");
    }
    else if(isNaN(identification)){
      Alert.alert("El documento debe ser numérico");
    }
    else if(identification.length < 5){
      Alert.alert("El documento debe contener mínumo 5 carácteres");
    }
    else if(city == ""){
      Alert.alert("Debe ingresar la ciudad");
    }
    else if(telephone == ""){
      Alert.alert("Debe ingresar el telefono");
    }

  }
  return(
    <View style={styles.container}>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <TextInput style={styles.inputName} placeholder="Enter name" onChangeText={text => setName(text)}></TextInput>
      <TextInput style={styles.inputIdentification} placeholder="Enter identification" onChangeText={text => setIdentification(text)}></TextInput>
      <TextInput style={styles.inputCity} placeholder="Enter city" onChangeText={text => setCity(text)}></TextInput>
      <TextInput style={styles.inputTelephone} placeholder="Enter telephone" onChangeText={text => setTelephone(text)}></TextInput>
      <TouchableHighlight style={styles.signUpButton} onPress={validateUserFields}>
        <Text style={styles.signUpTextButton}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  );
}
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box1}>
//         <View style={styles.box2}>
//           <Text style={styles.text}>Card 1</Text>
//         </View>
//         <View style={styles.box3}>
//           <Button title="Press me" onPress={pressMe}></Button>
//         </View>
//       </View>
//       <View style={styles.box4}>
//         <View style={styles.box5}>
//           <TouchableHighlight style={styles.touchButton} onPress={pressMe}>
//             <Text>Click Me</Text>
//           </TouchableHighlight>
//         </View>
//         <View style={styles.box6}></View>
//       </View>
//       <View style={styles.box7}>
//         <View style={styles.box8}></View>
//         <View style={styles.box9}></View>
//       </View>
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <View style ={styles.container}>
//       <View style={styles.box10}>
//         <Image source={require('./assets/registrarse.png')} style={{width: 200}}></Image>
//         <Text style={{fontSize:25, color: "white", fontWeight: "bold"}}>Sign Up</Text>
//       </View>
//       <View style={styles.box11}>
        
//       </View>
//       <View style={styles.box12}>
//       </View>
//     </View>
//   );
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  // box1: {
  //   flex: 1,
  //   flexDirection: "row"
  // },
  // box2: {
  //   flex: 1,
  //   backgroundColor: "brown",
  //   margin: 20,
  //   borderRadius: 15,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // box3: {
  //   flex: 1,
  //   backgroundColor: "yellow",
  //   margin: 20,
  //   borderRadius: 15,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // box4: {
  //   flex: 1, 
  //   flexDirection: "row"
  // },
  // box5: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   margin: 20,
  //   borderRadius: 15,
  //   borderWidth: 2,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // box6: {
  //   flex: 1,
  //   backgroundColor: "purple",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // box7: {
  //   flex: 1, 
  //   flexDirection: "row"
  // },
  // box8: {
  //   flex: 1,
  //   backgroundColor: "purple",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // box9: {
  //   flex: 1,
  //   backgroundColor: "purple",
  //   margin: 20,
  //   borderRadius: 15
  // },
  // text: {
  //   color: "white",
  //   fontSize: 20
  // },
  // buttonStyle: {
  //   color: "#26a69a"
  // },
  // touchButton: {
  //   padding: 20,
  //   backgroundColor: "#3f51b5",
  //   flexDirection: "row",
  //   borderRadius: 10
  // },
  // box10: {
  //   flex: 1,
  //   backgroundColor: "#03a9f4",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // box11: {
  //   flex: 1,
  //   backgroundColor: "white"
  // },
  // box12: {
  //   width: Dimensions.get("screen").width*0.9,
  //   height: Dimensions.get("screen").height*0.4,
  //   backgroundColor: "white",
  //   position: "absolute",
  //   left: Dimensions.get("screen").width*0.05, //800px
  //   right: Dimensions.get("screen").width*0.05,
  //   top: Dimensions.get("screen").height*0.4,
  //   borderRadius: 10,
  // },
  inputName: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get("screen").width*0.9,
    // paddingLeft: Dimensions.get("screen").width*0.35,
    // paddingRight: Dimensions.get("screen").width*0.35,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5
  },
  inputIdentification: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get("screen").width*0.9,
    // paddingLeft: Dimensions.get("screen").width*0.35,
    // paddingRight: Dimensions.get("screen").width*0.35,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  inputCity: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    width: Dimensions.get("screen").width*0.9,
    // paddingLeft: Dimensions.get("screen").width*0.35,
    // paddingRight: Dimensions.get("screen").width*0.35,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  inputTelephone: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    width: Dimensions.get("screen").width*0.9,
    // paddingLeft: Dimensions.get("screen").width*0.35,
    // paddingRight: Dimensions.get("screen").width*0.35,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: "#673ab7",
    padding: 10,
    borderRadius: 5,
    width: Dimensions.get("screen").width*0.2,
    alignItems: "center"
  },
  signUpTextButton: {
    color: "white"
  }
});

export default App;*/