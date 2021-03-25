import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
		targetScreen: routes.LISTING,
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: routes.MESSAGES,
	},
];

export default function AccountScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Louis Skolnick"
					subtitle="louisskolnick@email.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() =>
								navigation.navigate(item.targetScreen)
							}
						/>
					)}
				/>
			</View>

			<ListItem
				title="Log Out"
				IconComponent={
					<Icon name="logout" backgroundColor={colors.warning} />
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.lightgray,
	},
});
