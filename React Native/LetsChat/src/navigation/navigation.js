import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from '../screens/Home';
import LOGIN from '../screens/Login';
const Stack = createStackNavigator();
export default function App(){


    return (
        <NavigationContainer>
          <Stack.Navigator>
          
          <Stack.Screen
              options={{ headerShown: false }}
              name='Home'
              component={HOME}
            />

          <Stack.Screen
              options={{ headerShown: false }}
              name='Login'
              component={LOGIN}
            />

         
          
          </Stack.Navigator>
        </NavigationContainer>
      );

}