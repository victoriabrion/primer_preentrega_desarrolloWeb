import { Pressable, StyleSheet, Text} from 'react-native'

const ButtonPrimary = ({title, onPress}) => {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#DBDB7F",
        width:"50%",
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:"center",
        borderRadius:20
    },
    text:{
        fontSize:16
    }
})