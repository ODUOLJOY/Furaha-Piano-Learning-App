import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  xp:number;
  level:number;
}

export default function ProgressCard({
  xp,
  level,
}:Props) {

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Progress Dashboard
      </Text>

      <Text>XP: {xp}</Text>

      <Text>Level: {level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    padding:20,
    backgroundColor:"#fff",
    borderRadius:12,
    marginVertical:10
  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    marginBottom:10
  }
});