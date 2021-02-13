import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { CategoryScreen } from "../screens/CategoryScreen";
import { LaunchScreen } from "../screens/FirstScreen";

const Stack = createStackNavigator()

export default function CategoryNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="CategoriesListScreen" 
                component={LaunchScreen} 
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen 
                name="MoviesListScreen" 
                component={CategoryScreen}
                options={
                    {
                        headerTintColor: "#B5A90F",
                        headerStyle: {
                            backgroundColor: "#B00020",
                            height: 68,
                            borderBottomStartRadius: 20,
                            borderBottomEndRadius: 20,
                            elevation: 0,
                            shadowOpacity: 0
                        },
                        headerTitleAlign: 'center',
                    }
                }
            />
        </Stack.Navigator>
    )
}
