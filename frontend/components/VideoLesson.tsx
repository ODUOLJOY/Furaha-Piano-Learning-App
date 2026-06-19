import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function VideoLesson(){

  return(
    <View style={styles.card}>

      <Text style={styles.title}>
        🎥 Video Lesson
      </Text>

      <Text>
        Video integration ready.
      </Text>

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
  }
});