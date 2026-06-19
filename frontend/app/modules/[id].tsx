import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { modules } from "../../data/modules";
import Metronome from "../../components/Metronome";

export default function ModuleScreen() {
  const { id } = useLocalSearchParams();
  const module = modules.find((m) => m.id.toString() === id);

  if (!module) {
    return (
      <View>
        <Text>Module not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {module.title}
      </Text>

      <Text style={{ marginVertical: 10 }}>{module.description}</Text>

      {/* SPECIAL FEATURE FOR RHYTHM */}
      {module.id === 2 && <Metronome />}
    </View>
  );
}