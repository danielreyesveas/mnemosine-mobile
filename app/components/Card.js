import React from "react";
import {
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import colors from "../config/colors";
import Text from "./Text";

export default function Card({ title, subtitle, image, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{subtitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	subtitle: {
		color: colors.secondary,
	},
	title: {
		marginBottom: 7,
	},
});
