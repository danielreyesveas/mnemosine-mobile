import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocation = async () => {
		try {
			const { granted } = await Location.requestPermissionsAsync();
			if (!granted) return;

			const result = await Location.getLastKnownPositionAsync();

			if (!result) return;

			const { latitude, longitude } = result.coords;
			setLocation({ latitude, longitude });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return location;
};
