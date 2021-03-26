import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

import listingsApi from "../api/listings";
import Button from "../components/Button";
import Text from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListings
	);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<>
			<ActivityIndicator visible={loading} />
			<Screen style={styles.screen}>
				{error && (
					<>
						<Text>Couldn't retrieve the listings.</Text>
						<Button title="Retry" onPress={loadListings} />
					</>
				)}
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subtitle={"$" + item.price}
							imageUrl={item.images[0].url}
							onPress={() =>
								navigation.navigate(
									routes.LISTING_DETAILS,
									item
								)
							}
							thumbnailUrl={item.images[0].thumbnailUrl}
						/>
					)}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		backgroundColor: colors.lightgray,
	},
});
