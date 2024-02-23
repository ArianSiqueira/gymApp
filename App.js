import {
  View,
  Text
} from "react-native"

import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import Exercises from './src/BottomTab/Exercises';
import Profile from './src/BottomTab/Profile';
import Treinos from './src/BottomTab/Treinos';
import Logs from './src/BottomTab/Logs';
import Workouts from "./src/ExercisesStack/Workouts";



const TreinoStack = createStackNavigator();

function TreinoStackScreen() {
  return (
    <TreinoStack.Navigator>
      <TreinoStack.Screen name="Treinos" component={Treinos} />
    </TreinoStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Perfil"
        component={Profile}
      />
    </ProfileStack.Navigator>
  )
}

const LogsStack = createStackNavigator();

function LogsStackScreen() {
  return (
    <LogsStack.Navigator>
      <LogsStack.Screen
        name="Estatísticas"
        component={Logs}
      />
    </LogsStack.Navigator>
  )
}

const ExercisesStack = createStackNavigator();

function ExercisesStackScreen() {
  return (
    <ExercisesStack.Navigator>
      <ExercisesStack.Screen name="Exercícios" component={Exercises} />
      <ExercisesStack.Screen name="Workouts" component={Workouts} />
    </ExercisesStack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();

function HomeTabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Treino":
              iconName = focused ? "barbell" : "barbell-outline";
              break;
            case "Exercícios":
              iconName = focused ? "book" : "book-outline";
              break;
            case "Histórico":
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
        name="Treino"
        component={TreinoStackScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileStackScreen}
      />

      <Tab.Screen
        name="Histórico"
        component={LogsStackScreen}
      />

      <Tab.Screen
        name="Exercícios"
        component={ExercisesStackScreen}
      />

    </Tab.Navigator >
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeTabsScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
