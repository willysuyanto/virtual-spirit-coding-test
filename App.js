import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainMenu from './src/screens/MainMenu';
import AddPostScreen from './src/screens/AddPostScreen';

import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from './src/utils/FontSize';

const Stack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MenuStackScreen() {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name="MainMenu" component={MainMenu} />
      <MenuStack.Screen name="NewPost" component={AddPostScreen} />
    </MenuStack.Navigator>
  );
}

function App() {
  const auth = useSelector(state => state.auth);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth.token === '' ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Main Menu') {
                  iconName = focused ? 'menu' : 'menu';
                }

                // You can return any component that you like here!
                return <McIcon name={iconName} size={size} color={color} />;
              },
              tabBarLabelStyle: {
                fontSize: Font.md,
              },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Main Menu" component={MenuStackScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
