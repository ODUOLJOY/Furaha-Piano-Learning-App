import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props{
  badge:string;
}

export default function BadgeCard({
  badge
}:Props){

  return(
    <View style={styles.card}>
      <Text style={styles.text}>
        🏆 {badge}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#FFD54F",
    padding:15,
    borderRadius:10,
    marginBottom:10
  },

  text:{
    fontWeight:"bold"
  }
});