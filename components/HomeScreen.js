import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Task from "./Task";
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
// Old solid style from heroicons v1
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";

const HomeScreen = () => {
  const [text, onChangeText] = React.useState("write a task");

  return (
    <View className="p-5 relative h-full w-full">
      <View>
        <Text className="text-xl font-bold ">Today's Task</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          {this.state.names.map((item, index) => (
            <View key={item.id} >
              <Task Text={text} />
            </View>
          ))}
          
        </ScrollView>
      </View>
      <View className=" absolute bottom-[37] ">
        <View className="bg-white  h-[45] w-[260] rounded-3xl  ml-5 shadow-lg shadow-indigo-500/40">
          <TextInput
            className="text-center text-[#C0C0C0] pt-2"
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>

      <View className="absolute right-[29] bottom-7">
        <TouchableOpacity className="bg-white h-16 w-16 relative rounded-full ">
          <Text className="text-[50px] h-full w-full  absolute left-4 bottom-[4] text-[#C0C0C0] ">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
