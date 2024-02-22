import { View, Text } from "react-native"

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import Exercises from './src/BottomTab/Exercises';
import Profile from './src/BottomTab/Profile';
import Home from './src/BottomTab/Home';
import Logs from './src/BottomTab/Logs'
import Workouts from './src/Stack/Workouts';
import AddWorkouts from './src/Stack/AddWorkout';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          // if (route.name === 'Perfil') {
          //   iconName = focused ? 'person-circle' : 'person-circle-outline';
          // } else if (route.name === 'Exercícios') {
          //   iconName = focused ? 'barbell' : 'barbell-outline';
          // } else if (route.name === 'Home') {
          //   iconName = focused ? 'home' : 'home-outline';
          // } else if (route.name === 'Logs') {
          //   iconName = focused ? 'calendar' : 'calendar-outline';
          // }
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Exercícios":
              iconName = focused ? "barbell" : "barbell-outline";
              break;
            case "Logs":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Perfil":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={24} color={'#352F44'} />;
        },
        tabBarActiveTintColor: '#352F44',
        tabBarInactiveTintColor: '#B9B4C7',
      })}
    >

      <Tab.Screen
        name="Home"
        component={StackNavigator}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
      />

      <Tab.Screen
        name="Logs"
        component={Logs}
      />

      <Tab.Screen
        name="Exercícios"
        component={Exercises}
      />

    </Tab.Navigator >
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="AddWorkouts" component={AddWorkouts} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
