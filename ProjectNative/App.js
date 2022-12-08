import React from "react";
import { View,ImageBackground,ScrollView } from "react-native";
import Home from './Components/Home'
import Api from './Components/Api'
import Portfolio from './Components/Portfolio'
import Header from "./Components/Principal/Header";
import Footer from "./Components/Principal/Footer";
import {ViewApp} from './Components/Style'
export default function App(){
  return(
    <View>
      <ImageBackground source={{uri:"https://images.pexels.com/photos/2775580/pexels-photo-2775580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} style={{height:'100%'}}>
      <Header/>
      <ViewApp>
      <Home/>
      <Api/>
      <Portfolio/>
      </ViewApp>
      <Footer/>
      </ImageBackground>
    </View>
  )
}
