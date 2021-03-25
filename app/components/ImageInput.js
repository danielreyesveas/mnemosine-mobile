import React, { useEffect } from "react";
import {
	Alert,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }) {
	const requestPermission = async () => {
		const {
			granted,
		} = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!granted) {
			alert("You need to enable your permissions to access the library.");
		}
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert(
				"Delete",
				"Are your sure you want to delete this image?",
				[
					{
						text: "Yes",
						onPress: () => onChangeImage(null),
					},
					{ text: "No" },
				]
			);
	};

	const selectImage = async () => {
		try {
			const {
				cancelled,
				uri,
			} = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!cancelled) {
				onChangeImage(uri);
			}
		} catch (error) {
			console.log("Error reading image.");
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						color={colors.medium}
						name="camera"
						size={40}
					/>
				)}
				{imageUri && (
					<Image source={{ uri: imageUri }} style={styles.image} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.lightgray,
		borderRadius: 10,
		height: 100,
		justifyContent: "center",
		overflow: "hidden",
		width: 100,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});
