import { StyleSheet, View, Dimensions, Keyboard } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import ModalDeleteTask from './src/components/ModalDeleteTask';
import AddTaskFunction from './src/components/AddTaskFunction';
import ListTasks from './src/components/ListTasks';

const App = () => {

  const [modalVisible, setModalVisible] = useState (false)

  const [taskSelected, setTaskSelected] = useState({})

  const [taskTitle, setTaskTitle] = useState ('')

  const [taskDescription, setTaskDescription] = useState ('')

  const [tasks, setTasks] = useState ([])

  const screenWidth = Dimensions.get('window').width

  const addTask = () => {

    const newTask = {
        id: uuid.v4(),
        createAt: new Date().toLocaleDateString(),
        updateAt:new Date().toLocaleDateString(),
        completed: false,
        title: taskTitle,
        description: taskDescription
    }

    setTasks ([...tasks, newTask])
    setTaskTitle ('')
    setTaskDescription('')
    Keyboard.dismiss()
  }

  const onHandlerTitle = (t) => {
    setTaskTitle(t)
  }

  const onHandlerDescription = (t) => {
    setTaskDescription(t)
  }

  const onHandlerModal = (task) => {
    setTaskSelected (task)
    setModalVisible (!modalVisible)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map (task => {
      if(task.id ===id) return {...task, ...{completed:!task.completed}}
      return task
    }))
  }

  return (
    <View style={styles.container}>
      <AddTaskFunction taskTitle= {taskTitle} onHandlerTitle= {onHandlerTitle} taskDescription= {taskDescription} onHandlerDescription= {onHandlerDescription} addTask={addTask}/>
      <ListTasks tasks= {tasks} onHandlerModal= {onHandlerModal} screenWidth ={screenWidth} updateTaskCompleted= {updateTaskCompleted}/>
      <ModalDeleteTask modalVisible={modalVisible} taskSelected= {taskSelected} deleteTask= {deleteTask} onHandlerModal= {onHandlerModal}/>
    </View>
  )

}

  export default App

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57425C' ,
    justifyContent: 'center',
    paddingHorizontal:30,
  },
 
})

