import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./components/HomeScreen";
const App = () => {
  return (
    <View className="bg-[#e0e0e0] h-full">
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
    
  );
};

export default App;
