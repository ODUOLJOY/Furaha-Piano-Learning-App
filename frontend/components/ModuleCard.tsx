import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ModuleCard({ title, description, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E88E5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    color: "#E3F2FD",
    marginTop: 5,
  },
});