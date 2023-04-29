import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    
    <View className="bg-gray-100 flex-1">
      <View className="bg-gray-100 pt-10 pb-4 px-6 flex-row items-center justify-between fixed z-10 top-0">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-2 text-xl text-orange-500">
            My Space
          </Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4">
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    <ScrollView
    
    >
      <View className="bg-[#F4EBD0] border m-3 border-gray-200 rounded-lg overflow-hidden">
        <View className="flex-row py-5 items-center px-4">
         
          <Image source={{ uri: "https://img.lovepik.com/original_origin_pic/18/07/25/bc7952a4187e3ae9dfaa8ed30f727db2.png_wh300.png" }} className="w-20 h-20 rounded-full" />
          <View className="ml-auto">
            <Text className="text-orange-500 font-semibold text-xl">Ananya Singh</Text>
            <Text className="text-black text-lg">UX Designer</Text>
            <Text className="text-black text-lg">127927</Text>
          </View>
          <TouchableOpacity className="ml-auto">
            <Ionicons name="eye-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      
      
      <View className="bg-white py-3 pb-5 mx-2 rounded-sm">

        <View className="flex-row pb-5 justify-between items-center mx-2">
            <Text className="text-black font-bold text-sm">My Attendance</Text>
            <Text className="text-gray-500 text-xs">March 31 Days</Text>
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-forward" size={24} color="orange" />
          </TouchableOpacity>
        </View>
      
      <View className="flex-row justify-between mx-1">

      <View className="bg-blue-200 p-4 rounded-lg shadow-md flex-row items-center">
        <Ionicons name="book" size={20} color="black" className="mr-2" />
        <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total days</Text>
        </View>
       
      </View>
      <View className="bg-lime-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
        <Ionicons name="notifications" size={20} color="black" className="mr-2" />
        <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total Days</Text>
        </View>
      </View>
      <View className="bg-green-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
        <Ionicons name="notifications" size={20} color="black" className="mr-2" />
        <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total days</Text>
        </View>
      </View>
    </View>
  

    
      <View className="flex-row justify-between mx-1 mt-2">
        
      <View className="bg-blue-200 p-4 rounded-lg shadow-md flex-row items-center">
        <Ionicons name="book" size={20} color="black" className="mr-2" />
      <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total days</Text>
      </View>
       
     </View>
      <View className="bg-lime-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
        <Ionicons name="notifications" size={20} color="black" className="mr-2" />
        <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total Days</Text>
        </View>
      </View>
      <View className="bg-green-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
        <Ionicons name="notifications" size={20} color="black" className="mr-2" />
        <View>
        <Text className="ml-2 text-base font-bold text-center">20</Text>
        <Text className=" text-center text-xs">Total days</Text>
        </View>
      </View>
    </View>
    
    <View className="flex-row justify-between mx-1 mt-2">
        
        <View className="bg-blue-200 p-4 rounded-lg shadow-md flex-row items-center">
          <Ionicons name="book" size={20} color="black" className="mr-2" />
          <View>
          <Text className="ml-2 text-base font-bold text-center">20</Text>
          <Text className=" text-center text-xs">Total days</Text>
          </View>
         
        </View>
        <View className="bg-lime-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
          <Ionicons name="notifications" size={20} color="black" className="mr-2" />
          <View>
          <Text className="ml-2 text-base font-bold text-center">20</Text>
          <Text className=" text-center text-xs">Total Days</Text>
          </View>
        </View>
        <View className="bg-green-200 p-4 rounded-lg shadow-md flex-row items-center ml-4">
          <Ionicons name="notifications" size={20} color="black" className="mr-2" />
          <View>
          <Text className="ml-2 text-base font-bold text-center">20</Text>
          <Text className=" text-center text-xs">Total days</Text>
          </View>
        </View>
      </View>
      
    </View>
    {/* My Leave Section */}

    <View className="flex-row justify-between items-center mx-3 mt-2">
    <Text className="text-black font-bold text-sm">My Leave</Text>
          
            <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-forward" size={24} color="orange" />
          </TouchableOpacity>
    </View>
 
  <View className="py-2 mx-2 my-2 flex-row justify-between items-center">
 
  <View className="bg-[#F4EBD0] rounded-lg shadow-md w-6/12">
  <View className="mb-4 bg-orange-500 rounded-t-lg">
    <Text className="text-lg text-white text-center py-2">Earned Leave</Text>
  </View>
  
  <View className="flex flex-col mx-4 mb-2">
  <Text className="font-bold text-xl mb-2 pt-2">12 <Text className="text-xs font-light">Left</Text></Text>
    <View className="flex flex-row justify-between items-center mb-2">
      <Text className="flex-1 text-base text-sm text-gray-500">Current Year</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
    <View className="flex flex-row justify-between items-center mb-2">
      <Text className="flex-1 text-base text-sm text-gray-500">Availed</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />
    <View className="flex flex-row justify-between items-center">
      <Text className="flex-1 text-base text-sm text-gray-500">Balance</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
  </View>
</View>

<View className="bg-[#cffafe] rounded-lg shadow-md ml-1 w-6/12">
  <View className="mb-4 bg-cyan-500 rounded-t-lg">
    <Text className="text-lg text-white text-center py-2">Casual Leave</Text>
  </View>
  <View className="flex flex-col mx-4 mb-2">
    <Text className="font-bold text-xl mb-2 pt-2">12 <Text className="text-xs font-light">Left</Text></Text>

    <View className="flex flex-row justify-between items-center mb-2">
      <Text className="flex-1 text-base text-sm text-gray-500">Current Year</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
    <View className="flex flex-row justify-between items-center mb-2">
      <Text className="flex-1 text-base text-sm text-gray-500">Availed</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />

    <View className="flex flex-row justify-between items-center">
      <Text className="flex-1 text-base text-sm text-gray-500">Balance</Text>
      <Text className="flex-1 text-right text-base">00</Text>
    </View>
  </View>
</View>

   </View>
  
  {/* My holiday Section */}
   
    <View className="bg-pink-100 m-2 h-40 rounded-lg">
     <View className="flex-row justify-between items-center m-2">
      <Text className="font-semibold text-black ">My Holidays</Text>
      <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-forward" size={24} color="orange" />
      </TouchableOpacity>
     </View>
    </View>

    {/* My Task */}
    
    <View className="bg-[#cffafe] blue-200 m-2 h-40 rounded-lg">
     <View className="flex-row justify-between items-center m-2">
      <Text className="font-semibold text-black ">My Task</Text>
      <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-forward" size={24} color="orange" />
      </TouchableOpacity>
     </View>
    </View>
    </ScrollView>

    </View>
   
  );
}
