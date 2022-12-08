import React from "react"
import { View,Text } from "react-native"
import {Portfol,Criad,TextaoPor,Redes} from './Style'
export default function Portfolio(){
    return(
        <Portfol>
            <Criad>Criador:Juliano Silva De Almeida</Criad>
            <TextaoPor>Estudante de tecnologia com foco em desenvolvimento de software, busco me inserir no mercado e desenvolver as habilidades necessárias pra me tornar melhor</TextaoPor>
            <Criad>Nossas Redes Sociais:</Criad>
            <Redes>Twitter:https://twitter.com/home</Redes>
            <Redes>Github:https://github.com/Juliano-silva</Redes>
            <Redes>Instagram:https://www.instagram.com/ju.liano1841/</Redes>
            <Redes>Linkedin:https://www.linkedin.com/feed/</Redes>
        </Portfol>
    )
}
