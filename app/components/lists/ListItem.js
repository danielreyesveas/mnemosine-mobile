import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../Text";
import colors from "../../config/colors";

export default function ListItem({
	image,
	IconComponent,
	title,
	subtitle,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight
				underlayColor={colors.lightgray}
				onPress={onPress}
			>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image source={image} style={styles.image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subtitle && (
							<AppText style={styles.subtitle} numberOfLines={2}>
								{subtitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subtitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "600",
	},
});
