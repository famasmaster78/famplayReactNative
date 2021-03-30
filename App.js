import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// NavBar
import Navigator from "./Navigator";

export default function App() {
  
	const [count, setCount] = useState(0);
	
	return (
		<View style={{flex: 1}}>
			<Navigator />
		</View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
