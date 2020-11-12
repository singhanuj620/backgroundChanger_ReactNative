import React, {useState} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native'

const App = () => {

  const [randomColor, setRandomColor] = useState("rgb(0,0,0)")

  const changeBG = () => {
    let c = "rgb("+ 
      Math.floor(Math.random()*256) + 
      "," +
      Math.floor(Math.random()*256) +
      "," +
      Math.floor(Math.random()*256) +
      ")";
    setRandomColor(c)
  }

  return (
    <>
    <StatusBar backgroundColor = {randomColor} />
      <View style={[styles.container,{backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap ME !!</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App ;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical:10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase"
  }
})