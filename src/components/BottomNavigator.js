import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LaunchScreen } from "../screens/FirstScreen"
import { CategoryScreen } from "../screens/CategoryScreen"
import { Ionicons } from "@expo/vector-icons"
import CategoryNavigator from "./CategoryNavigator"
import SearchScreen from "../screens/SearchScreen"

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					height: 48,
					backgroundColor: "#B00020",
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={CategoryNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="home"
							size={24}
							color={focused ? "#B5A90F" : "#FFFFFF"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="search"
							size={24}
							color={focused ? "#B5A90F" : "#FFFFFF"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}
