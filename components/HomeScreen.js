import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";
import Task from "./Task";

const HomeScreen = () => {
  const [task, setTask] = React.useState();
  const [TasksItems, setTasksItems] = React.useState([]);

  const handleAddTask = () => {
    console.log(TasksItems);
    Keyboard.dismiss();
    setTasksItems([...TasksItems, task]);
    setTask(null);
  };
  const deleteTask = (index) => {
    console.log(TasksItems);
    let copyitems = [...TasksItems];
    copyitems.splice(index, 1);
    setTasksItems(copyitems);
  };
  return (
    <View className="p-5 relative h-full w-full">
      <View>
        <Text className="text-xl font-hfhbold ">Today's Task</Text>
      </View>
      <View className="mt-6">
        <ScrollView>
          {Array.isArray(TasksItems)
            ? TasksItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={(index) => deleteTask(index)}
                  >
                    <Task text={item}></Task>
                  </TouchableOpacity>
                );
              })
            : console.log("not a tast")}
        </ScrollView>
      </View>
      <View className=" absolute bottom-[37] ">
        <View className="bg-white  h-[45] w-[260] rounded-3xl  ml-5 shadow-lg shadow-indigo-500/40">
          <TextInput
            autoFocus={true}
            placeholder="Enter Task here"
            className="text-center text-[#C0C0C0] pt-2"
            onChangeText={(Text) => setTask(Text)}
            value={task}
          />
        </View>
      </View>

      <View className="absolute right-[29] bottom-7">
        <TouchableOpacity
          onPress={() => handleAddTask()}
          className="bg-white h-16 w-16 relative rounded-full "
        >
          <Text className="text-[50px] h-full w-full  absolute left-4 bottom-[4] text-[#C0C0C0] ">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
