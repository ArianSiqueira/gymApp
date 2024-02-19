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
import Workouts from './src/Stack/Workouts';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
            let iconName;
            if (route.name === 'Perfil') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Exercícios') {
                iconName = focused ? 'barbell' : 'barbell-outline';
            } else if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            }
            return <Ionicons name={iconName} size={24} color={'#4F6F52'} />;
        },
        tabBarActiveTintColor: '#4F6F52',
        tabBarInactiveTintColor: '#86A789',
    })}
    >
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
        }}
      />

      <Tab.Screen
        name="Home"
        component={StackNavigator} />

      <Tab.Screen
        name="Exercícios"
        component={Exercises} 
        options={{
          tabBarLabel: 'Exercícios',
        }}
        />
        
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Workouts" component={Workouts} />
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
