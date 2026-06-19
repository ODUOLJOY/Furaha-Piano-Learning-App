import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const modules = [
  "Module 1 - Music Notes",
  "Module 2 - Rhythm & Meter",
  "Module 3 - Scales & Keys",
  "Module 4 - Chords & Harmony",
  "Module 5 - Sight Reading",
  "Module 6 - Ear Training",
  "Module 7 - Finger Exercises",
  "Module 8 - Worship Songs",
  "Module 9 - Improvisation",
  "Module 10 - Advanced Performance",
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          🎹 Furaha Piano Learning App
        </Text>

        <Text style={styles.subtitle}>
          Learn Piano From Beginner To Advanced
        </Text>

        {modules.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
          >
            <Text style={styles.cardText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    textAlign: "center",
    marginBottom: 25,
    color: "#666",
  },

  card: {
    backgroundColor: "#1976D2",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  cardText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});