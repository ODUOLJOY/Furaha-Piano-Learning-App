import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

interface Props{
  title:string;
  description:string;
}

export default function LessonCard({
  title,
  description
}:Props){

  return(
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text>
        {description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:12,
    marginBottom:10
  },

  title:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5
  }
});