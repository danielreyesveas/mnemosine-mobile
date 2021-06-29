import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
	const [loginFailed, setLoginFailed] = useState(false);

	const { login } = useAuth();

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);
		login(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/mnemosine.png")}
			/>
			<Form
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error="Invalid email and/or password."
					visible={loginFailed}
				/>

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
