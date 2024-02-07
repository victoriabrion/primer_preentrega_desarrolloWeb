import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import CartTaskList from './CartTaskList'

const ListTasks = ({tasks, onHandlerModal, screenWidth, updateTaskCompleted}) => {

  return (
    <View style= {styles.tasksContainer}>
        <FlatList data={tasks} keyExtractor={item => item.id} renderItem={({item}) => 
          (<CartTaskList item={item} onHandlerModal={onHandlerModal} screenWidth={screenWidth} updateTaskCompleted={updateTaskCompleted}/>)}
          horizontal={true}
          pagingEnabled={true}/>

    </View> 
  )
}

export default ListTasks

const styles = StyleSheet.create({
    tasksContainer:{
        padding:10
      },
      taskCard:{
        flexDirection:'row',
        backgroundColor:'#C97FDB',
        margin:10,
        marginVertical:10,
        padding:10,
        alignItems:'center',
        borderRadius:5
      },
      text:{
        width:'70%',
        fontSize:15,
        color:'white',
      }
})