import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
	const registerForPushNotifications = async () => {
		const { granted } = await Permissions.askAsync(
			Permissions.NOTIFICATIONS
		);
		if (!granted) return;
		try {
			const { data: token } = await Notifications.getExpoPushTokenAsync();
			console.log(token);
			const a = await expoPushTokensApi.register(token);
			console.log(a);
		} catch (error) {
			console.log("Error getting a push token.", error);
		}
	};

	useEffect(() => {
		registerForPushNotifications();

		Notifications.addNotificationReceivedListener((notification) => {
			console.log("Received");
		});
		if (notificationListener) {
			Notifications.addNotificationResponseReceivedListener(
				notificationListener
			);
		}
	}, []);
};
