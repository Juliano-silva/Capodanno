import React,{useState} from "react"
import { View,Text,Image } from "react-native"
import {TextoG,TextoP} from './Style'
import AppIntroSlider from 'react-native-app-intro-slider'
const slides = [
    {
        key:'1',
        title:"Capodanno Part 1",
        text:"Nosso site (Que também é um aplicativo para android e computador) é feito para ajudar em vendas e criar uma nova forma de compra e venda e também porque tava faltado 1 para completar 50.",
        image: require('../assets/1.jpeg')
    },
    {
        key:'2',
        title:"Capodanno Part 2",
        text:"Nosso Criador é um amante de Miojo",
        image: require('../assets/2.jpeg')
    },
    {
        key:'3',
        title:"Capodanno Part 3",
        text:"Nosso Criador pensou na ideia por 1 ano",
        image: require('../assets/3.jpeg')
    },
    {
        key:'4',
        title:"Capodanno Part 4",
        text:"Nós temos atualmente 100 pessoas na nossa empresa",
        image: require('../assets/4.jpeg')
    },
    {
        key:'5',
        title:"Capodanno Part 5",
        text:"Não será um sonho que se acabou",
        image: require('../assets/5.jpeg')
    }
]
export default function Home(){
    const [showHome,setShowHome] = useState(false)
    function renderSlider({item}){
    return(
        <View>
            <Image source={item.image} style={{height:'40%',width:"100%"}}/>
            <TextoG>{item.title}</TextoG>
            <TextoP>{item.text}</TextoP>
        </View>
    )
    }
    if(showHome){
        return <Text>ENTROU NA MATRIX</Text>
    } else{
        return(
            <AppIntroSlider renderItem={renderSlider} data={slides} activeDotStyle={{
                width:1
            }}/>
        )
    }

}
