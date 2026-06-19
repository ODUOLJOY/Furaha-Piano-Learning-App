import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

interface Props {
  question?: string;
  options?: string[];
  answer?: string;
}

export default function QuizCard({
  question = "What note is on the first line of the treble clef?",
  options = ["E", "F", "G", "A"],
  answer = "E"
}: Props) {

  const [result, setResult] = useState("");

  return (
    <View style={styles.card}>
      <Text style={styles.question}>
        {question}
      </Text>

      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.button}
          onPress={() => {
            if (option === answer) {
              setResult("✅ Correct");
            } else {
              setResult("❌ Try Again");
            }
          }}
        >
          <Text style={styles.buttonText}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.result}>
        {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15
  },

  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15
  },

  button: {
    backgroundColor: "#1976D2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },

  result: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold"
  }
});