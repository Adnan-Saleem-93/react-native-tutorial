import {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const COLORS = [
  'red',
  'green',
  'blue',
  'yellow',
  'white',
  'pink',
  'turquoise',
  'orange',
  'purple',
  'black'
]
export default function App() {
  const [bgColor, setBgColor] = useState(COLORS[0])
  const toggleBackground = () => {
    const number = Math.floor(Math.random() * 10)
    setBgColor(COLORS[number - 1])
  }
  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: bgColor
      }}
    >
      <TouchableOpacity onPress={toggleBackground} style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: 2
  },
  buttonText: {
    color: 'gray',
    fontSize: 20
  }
})
