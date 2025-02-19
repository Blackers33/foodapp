import {
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Image
					style={styles.bg}
					source={require("./../assets/images/home.jpg")}
				/>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate("DrawerNavigator")}
				>
					<View style={styles.textContainer}>
						<Text style={styles.title}>FoodApp</Text>
						<View style={styles.sub}>
							<Text style={styles.subtitle}>Let's go!</Text>
							<FontAwesome name='arrow-right' size={24} color={"#fff"} />
						</View>
					</View>
				</TouchableWithoutFeedback>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#655074",
	},
	bg: {
		width: "100%",
		height: "80%",
		borderBottomLeftRadius: 150,
	},

	textContainer: {
		width: "100%",
		alignItems: "flex-end",
		padding: 10,
	},

	title: {
		color: "white",
		fontSize: 60,
		fontWeight: 600,
	},
	subtitle: {
		color: "white",
		fontSize: 25,
		fontWeight: 400,
	},

	sub: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15,
	},
});
