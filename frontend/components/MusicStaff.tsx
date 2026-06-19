import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MusicStaff() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎼 Music Staff</Text>

      <View style={styles.staff}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />

        <View style={styles.note}>
          <Text style={styles.noteText}>♪</Text>
        </View>
      </View>

      <Text style={styles.lesson}>
        This note is Middle C
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:12,
    marginVertical:10
  },

  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:15
  },

  staff:{
    height:120,
    justifyContent:"space-evenly"
  },

  line:{
    height:2,
    backgroundColor:"#000"
  },

  note:{
    position:"absolute",
    left:"45%",
    top:40
  },

  noteText:{
    fontSize:36
  },

  lesson:{
    marginTop:15
  }
});