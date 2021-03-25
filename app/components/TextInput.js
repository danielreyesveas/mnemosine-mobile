import React from "react";
import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function TextInput({ icon, width = "100%", ...otherProps }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.medium}
					style={styles.icon}
				/>
			)}
			<RNTextInput
				placeholderTextColor={defaultStyles.colors.medium}
				style={[styles.input, defaultStyles.text]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.lightgray,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		width: "100%",
	},
});
