import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const onSubmit = (values) => {
	console.log("Logged", values);
};

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/logo-red.png")}
			/>
			<Form
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Login" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginBottom: 50,
		marginTop: 20,
	},
});
