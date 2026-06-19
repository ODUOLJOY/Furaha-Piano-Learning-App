import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

import PianoKeyboard from "./components/PianoKeyboard";
import ProgressCard from "./components/ProgressCard";
import QuizCard from "./components/QuizCard";
import BadgeCard from "./components/BadgeCard";
import CertificateView from "./components/CertificateView";
import VideoLesson from "./components/VideoLesson";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.header}>
          🎹 Furaha Piano Learning
        </Text>

        <ProgressCard />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Continue Learning
          </Text>

          <Text>Module 1 - Note Reading</Text>
          <Text>75% Complete</Text>

          <Text>Module 2 - Rhythm</Text>
          <Text>60% Complete</Text>

          <Text>Module 3 - Scales</Text>
          <Text>20% Complete</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Interactive Piano
          </Text>

          <PianoKeyboard />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Daily Quiz
          </Text>

          <QuizCard />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Achievements
          </Text>

          <BadgeCard />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Certificate
          </Text>

          <CertificateView />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Video Lessons
          </Text>

          <VideoLesson />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F6F8"
  },

  header:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:20
  },

  section:{
    backgroundColor:"#fff",
    margin:10,
    padding:15,
    borderRadius:15,
    elevation:3
  },

  sectionTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  }
});