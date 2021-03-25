import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingsScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={"$" + item.price}
						image={item.image}
						onPress={() =>
							navigation.navigate(routes.LISTING_DETAILS, item)
						}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		backgroundColor: colors.lightgray,
	},
});