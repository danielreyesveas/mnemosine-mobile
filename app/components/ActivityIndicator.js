import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;

	return (
		<View style={styles.overlay}>
			<LottieView
				autoPlay
				loop
				source={require("../assets/animations/loader.json")}
				style={styles.spinner}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		zIndex: 1,
		opacity: 0.8,
		backgroundColor: "white",
		height: "100%",
		width: "100%",
	},
	spinner: {
		top: 40,
	},
});

export default ActivityIndicator;
