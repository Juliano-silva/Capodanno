import React,{useStatee} from "react"
import { View,Text,Image } from "react-native"
import AppIntroSlider from 'react-native-app-intro-slider'
const slides = [
    {
        key:'1',
        title:"Primeira Image",
        text:"Aprenda a desenvolver no PC da xuxa",
        image: require('../assets/1.jpeg')
    },
    {
        key:'2',
        title:"Segunda Image",
        text:"Aprenda a diferença entre Batata frita e Batata normal",
        image: require('../assets/2.jpeg')
    },
    {
        key:'3',
        title:"Terceira Image",
        text:"Aprenda a Remover o fundo",
        image: require('../assets/3.jpeg')
    },
    {
        key:'4',
        title:"Quarta Image",
        text:"Aprenda a flutuar por 5 minutos e isso realmente funciona",
        image: require('../assets/4.jpeg')
    },
    {
        key:'5',
        title:"Quinta Image",
        text:"Aprenda por que o Twitter é a melhor e a pior rede social ",
        image: require('../assets/5.jpeg')
    }
]
export default function Home({item}){
    const [showHome,setShowHome] = useState(false)
    return(
        <View>
            <Image source={item.image} style={{resizeMode:'cover',height:'85%',width:"100%"}}/>
            <Text>Home</Text>
        </View>
    )
}
