import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

interface Props{
  studentName:string;
}

export default function CertificateView({
  studentName
}:Props){

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        🎓 Certificate of Completion
      </Text>

      <Text style={styles.text}>
        Awarded To
      </Text>

      <Text style={styles.name}>
        {studentName}
      </Text>

      <Text style={styles.text}>
        Furaha Piano Learning App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:25,
    borderWidth:2,
    borderRadius:15,
    marginVertical:20
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center"
  },

  name:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:20
  },

  text:{
    textAlign:"center"
  }
});