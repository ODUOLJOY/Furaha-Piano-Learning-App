import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import ModuleCard from "../components/ModuleCard";
import { modules } from "../data/modules";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FA" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        🎹 Furaha Piano Learning App
      </Text>

      <Text style={{ marginBottom: 20 }}>
        Learn piano step by step (notes → rhythm → performance)
      </Text>

      <FlatList
        data={modules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ModuleCard
            title={item.title}
            description={item.description}
            onPress={() => router.push(`/modules/${item.id}`)}
          />
        )}
      />
    </View>
  );
}