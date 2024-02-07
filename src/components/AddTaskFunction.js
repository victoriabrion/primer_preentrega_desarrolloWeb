import { StyleSheet, TextInput, View } from "react-native";   
import ButtonPrimary from "./ButtonPrimary";

    const AddTaskFunction = ({taskTitle, onHandlerTitle, taskDescription, onHandlerDescription, addTask}) => {
      
    return (

      <View style={styles.container}>
        <TextInput value= {taskTitle} placeholder='Add new title' onChangeText={onHandlerTitle} style={styles.input}></TextInput>
        <TextInput value= {taskDescription} placeholder='Add new description' onChangeText={onHandlerDescription} style={styles.input}></TextInput>
        <ButtonPrimary title= 'Add task' onPress={addTask} />
      </View>
    )
}

export default AddTaskFunction

const styles = StyleSheet.create ({

  container: {
    alignItems:'center',
    justifyContent:'space-around',
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:10
  },
  input:{
    width:250,
    borderBottomWidth:2,
    borderColor:'white',
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10,
    color:'white'
  }
})