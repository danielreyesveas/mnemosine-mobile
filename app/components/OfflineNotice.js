import React from "react";
import { View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

import colors from "../config/colors";
import Text from "./Text";

function OfflineNotice() {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No Internet Connection</Text>
			</View>
		);
	}

	return null;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: Constants.statusBarHeight,
		width: "100%",
		zIndex: 100,
	},
	text: {
		color: colors.white,
	},
});

export default OfflineNotice;
