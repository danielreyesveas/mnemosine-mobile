import React, { useState } from "react";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function Picker({
	icon,
	items,
	numberOfColumn = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width = "100%",
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback
				onPress={() => setModalVisible(!modalVisible)}
			>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>
							{selectedItem.label}
						</AppText>
					) : (
						<AppText style={styles.placeholder}>
							{placeholder}
						</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => setModalVisible(false)}
					/>

					<FlatList
						data={items}
						keyExtractor={(category) => category.value.toString()}
						numColumns={numberOfColumn}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
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
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
	text: {
		flex: 1,
	},
});
