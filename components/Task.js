import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View className="bg-[#FFFFFF] drop-shadow rounded-lg p-[15] justify-between flex-row mb-4  align-middle shadow-lg shadow-indigo-500/40">
      <View className="flex-row flex-wrap space-x-4 ">
        <TouchableOpacity className="bg-[#55BCF6] h-6 w-6 opacity-40 rounded-sm"></TouchableOpacity>
        <Text>{props.Text}</Text>
      </View>
      <View className="mt-1 align-middle">
        <TouchableOpacity className="bg-white h-3 w-3 opacity-40 rounded-full border-4 border-[#55BCF6]  "></TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
