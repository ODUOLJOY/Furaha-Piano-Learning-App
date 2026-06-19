import { useEffect, useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function Metronome() {
  const [bpm, setBpm] = useState(60);
  const intervalRef = useRef<any>(null);

  const playTick = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/tick.mp3")
    );
    await sound.playAsync();
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(playTick, (60 / bpm) * 1000);
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metronome</Text>

      <Text style={styles.bpm}>{bpm} BPM</Text>

      <View style={styles.row}>
        <Button title="-" onPress={() => setBpm(bpm - 5)} />
        <Button title="Start" onPress={start} />
        <Button title="Stop" onPress={stop} />
        <Button title="+" onPress={() => setBpm(bpm + 5)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  bpm: { fontSize: 28, marginBottom: 10 },
  row: { flexDirection: "row", gap: 10 },
});