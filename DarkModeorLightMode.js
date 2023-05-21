import React from 'react';
import { Text, View ,StyleSheet, Image, useColorScheme} from 'react-native';

//Hello world program to show case the mode changes .
function HelloWorld () {
  const isDarkMode = useColorScheme() === "dark"

  return (
    <View
      style={styles.containerView}>
     <Text style = {isDarkMode ? styles.whiteText : styles.darkText}>Hello world!</Text>   
    </View>
  )
}



const styles = StyleSheet.create({
  containerView : {
    flex: 1,
    justifyContent: "center",
    alignItems:  "center",
   
  },
  whiteText : {
    color : "white"
  },
  darkText : {
    color : "black"
  }

  
})


export default HelloWorld;
