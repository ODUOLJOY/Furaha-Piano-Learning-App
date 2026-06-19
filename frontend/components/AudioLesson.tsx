import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";

export default function AudioLesson(){

  const playAudio = () => {
    Alert.alert(
      "Audio Lesson",
      "Audio playback will be connected next."
    );
  };

  return(
    <View style={styles.card}>

      <Text style={styles.title}>
        🎧 Ear Training Audio
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={playAudio}
      >
        <Text style={styles.buttonText}>
          Play Lesson
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:12,
    marginVertical:10
  },

  title:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },

  button:{
    backgroundColor:"#1976D2",
    padding:12,
    borderRadius:10
  },

  buttonText:{
    color:"#fff",
    textAlign:"center"
  }
});