import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import {CorpoApi,ImgApi,Card,Textao,Preco,Titulos,CorpoLa,InPUT,Touch} from './Style'
export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  async function addTask() {
    const search = task.filter(task => task === newTask);
    if (search.length !== 0) {
      Alert.alert("Atenção", "Nome da tarefa repetido!");
      return;
    }
    setTask([...task, newTask]);
    setNewTask("");
    Keyboard.dismiss();
  }
  async function removeTask(item) {
    Alert.alert(
      "Deletar Task",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    );
  }
  useEffect(() => {
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");
      if (task) {
        setTask(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);
  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);
  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        enabled={Platform.OS === "ios"}
      >
        <CorpoApi>
          <View >
            <FlatList
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CorpoLa >
                  <Card>
                  <Titulos>{item}</Titulos>
                  <ImgApi source={{uri:"https://i.pinimg.com/564x/cf/ca/d7/cfcad7aa029cd5aaae22b8ac07652718.jpg"}} />
                  <Preco>R$ 100</Preco>
                  <Textao>{item}</Textao>
                  </Card>
                  <TouchableOpacity onPress={() => removeTask(item)}>

                  </TouchableOpacity>
                </CorpoLa>
              )}
            />
          </View>
          <View>
            <InPUT
              placeholderTextColor="#999"
              autoCorrect={true}
              value={newTask}
              placeholder="Adicione uma tarefa"
              maxLength={25}
              onChangeText={text => setNewTask(text)}
            />

            <Touch onPress={() => addTask()}>
              <Ionicons name="ios-add" size={20} color="white" />
            </Touch>
          </View>
        </CorpoApi>
      </KeyboardAvoidingView>
    </>
  );
}
