import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalDeleteTask = ({taskSelected, deleteTask, onHandlerModal, modalVisible}) => {

  return (
    <Modal visible={modalVisible} animationType='fade' onRequestClose={() => onHandlerModal({})}>
            <View>
              <Text>Are you sure you want to delete the task: {taskSelected.title} ?</Text>
              <Button title='Yes' onPress={() => {deleteTask()}}/>
              <Button title='No' onPress={() => onHandlerModal({})} />
            </View>
        </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create({})