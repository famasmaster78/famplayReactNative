import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/* Import andre components */
import Home from "./Home";
import Film from "./Film";
import Serier from "./Serier";
import Login from "./Login";

function HomeScreen() {
  return (
  		<Home />
  );
}

function FilmScreen() {
	return (
		<Film />
	);
}

function SerierScreen() {
	return (
		<Serier />
	);
}

 function LoginScreen() {
	return (
		<Login />
	);
}


const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Film" component={FilmScreen} />
		<Tab.Screen name="Serier" component={SerierScreen} />
		<Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* export default function NavBar() {
	
	return (
		<View style={styles.navBar}>
			<View style={styles.navBarButton}>
				<Button
					title="Home"
					color="#4a4a4a"
				/>
			</View>
			<View style={styles.navBarButton}>
				<Button
					title="Film"
					color="#4a4a4a"
				/>
			</View>
			<View style={styles.navBarButton}>
				<Button
					title="Serier"
					color="#4a4a4a"
				/>
			</View>
			<View style={styles.navBarButtonLast}>
				<Button
					title="Login"
					color="#4a4a4a"
				/>
			</View>
		</View>
  	);
} */

const styles = StyleSheet.create({
  navBar: {
    padding: 5,
	flexDirection: 'row',
	backgroundColor: "#333333",
	justifyContent: "center"
  },
  navBarButton: {
	  margin: 10
  },
  navBarButtonLast: {
	  margin: 10,
  }
});
