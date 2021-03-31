import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

/* Axios / Network ting ting */
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

/* FormData */
import FormData from 'form-data';

/* Opret const til URL */
let backendUrl = "http://192.168.1.147:4080";

export default function Home() {
  
	const [state, setState] = useState({
		loggedIn: false,
		loginUser: "",
		formUsername: "",
		formPassword: ""
	});

	const [loggedIn, setloggedIn] = useState(false);
	const [loginUser, setloginUser] = useState("");
	const [formUsername, setFormUsername] = useState("");
	const [formPassword, setFormPassword] = useState("");

	const handleGetLogin = () => {
		axios.get(`${backendUrl}/GetLogin`)
		.then(res => res.data)
		.then(data => {
			/* alert(JSON.stringify(data)); */

			// Opdater state
			setState({loggedIn: data.success, loginUser: data.data.USER});
			setloggedIn(data.success);
			setloginUser(data.data.USER);

		});
	}

	// Handle form - Login
	const handleFormSubmit = () => {

		// Post Brugernavn & Adgangskode til login backend
		axios.post(`${backendUrl}/auth`, {username: formUsername, password: formPassword})
		.then(res => {
			// alert(JSON.stringify(res.headers));
			return res.data;
		})
		.then(data => {

			// Debug
			// alert("Data fuck: " + JSON.stringify(data));

			// Tjek svaret modtaget tilbage.
			if (data.success) {
				alert("Logget ind");

				// GetLogin igen
				handleGetLogin();

			}else {
				alert("Kunne ikke logge ind!");
			}

		})
		.catch(function (error) {
			alert(`Error! - ${error}`);
		});

	}

	// Tjek om form er valid - begge felter er udfyldt
	const isFormValid = () => {
		if (!formUsername && !formPassword) {
			return true
		}else {
			return false
		}
	}

	/* Når component mountes */
	useEffect(() => {
		// Get Login Status
		handleGetLogin();
	}, []);

	return (

		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			
			{/* Vis brugernavn osv hvis brugeren er logget ind */}
			{!loggedIn ? (

				<Text>
					Du er ikke logget ind...
				</Text>

			) : (

				<Text>
					Du er logget ind! {loginUser}
				</Text>

			)}

			{/* Logn Form */}
			<View style={styles.formCont}>
				{/* Login Form */}
				<Text>Brugernavn</Text>
				<TextInput
					style={styles.textInput}
					placeholder="palle2328"
					onChangeText={text => setFormUsername(text)}
				/>
				<Text>Password</Text>
				<TextInput
					style={styles.textInput}
					placeholder="********"
					onChangeText={text => setFormPassword(text)}
					secureTextEntry={true}
				/>
				<Button
					onPress={() => handleFormSubmit()}
					title="Login!"
					color="#84154"
					disabled={isFormValid()}
				/>
			</View>

		</View>

  	);
}

const styles = StyleSheet.create({
  	textInput: {
	  height: 40, 
	  backgroundColor: "#bdbdbd", 
	  borderRadius: 6, 
	},
	formCont: { 
		padding: 20, 
		borderRadius: 10, 
		backgroundColor: "#d1d1d1", 
		width: 300, 
		margin: 10, 
	}

});
