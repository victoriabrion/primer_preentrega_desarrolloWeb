import { StyleSheet, Text, View, Switch} from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({item, onHandlerModal, screenWidth, updateTaskCompleted}) => {

  return (
            <View style={[styles.taskCard, {width:screenWidth -60}]}>
                <Text style={styles.text}>Creation: {item.createAt}</Text>
                <Text style={styles.text}>Update: {item.updateAt}</Text>
                <Text style={styles.text}>Title: {item.title}</Text>
                <Text style={styles.text}>Description: {item.description}</Text>
                <View style={styles.completedContanier}>
                    <Switch
                        value={item.completed}
                        onValueChange={() => updateTaskCompleted(item.id)}/>
                    <Text style={styles.textCompleted}>{item.completed ? "Completed" : "Pending" }</Text>
                </View>
                <ButtonPrimary title='x' onPress={() => onHandlerModal(item)} />
            </View>
  )
}

export default CartTaskList

const styles = StyleSheet.create({

    taskCard:{
        backgroundColor:"#872FF5",
        padding:20,
        marginHorizontal:10,
        marginVertical:10,
        alignItems:"flex-start",
        borderRadius:5,
        gap:25
      },
      text:{
        width:"100%",
        color:"white",
        fontSize:18
      },
      completedContanier:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:15
    },
    textCompleted:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    }
})