import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					color={colors.white}
					name="plus-circle"
					size={35}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		borderColor: colors.white,
		borderWidth: 5,
		borderRadius: 35,
		bottom: 20,
		height: 70,
		width: 70,
	},
});

export default NewListingButton;
