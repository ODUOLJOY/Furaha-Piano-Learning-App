import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const notes = [
  "C","D","E","F","G","A","B"
];

export default function PianoKeyboard() {
  const [selected, setSelected] = useState("");

  return (
    <View>
      <Text style={styles.title}>
        Interactive Piano Keyboard
      </Text>

      <Text style={styles.note}>
        Selected Note: {selected}
      </Text>

      <View style={styles.row}>
        {notes.map((note) => (
          <TouchableOpacity
            key={note}
            style={styles.key}
            onPress={() => setSelected(note)}
          >
            <Text>{note}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:10
  },

  note:{
    fontSize:18,
    marginBottom:10
  },

  row:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10
  },

  key:{
    width:50,
    height:120,
    backgroundColor:"white",
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center"
  }
});