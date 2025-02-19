import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
	useFonts,
	Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";
import { recipes } from "../data/recipes";
import Card from "../components/Card";

export default function SearchScreen({ navigation }) {
	const [fontsLoaded] = useFonts({
		Merriweather: Merriweather_400Regular,
	});

	function handleCardPress(props){
		navigation.navigate("Recipe", props);
	}

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.title}>What do you want to eat today?</Text>
				<Text style={styles.subtitle}>Our daily healthy meal plans</Text>
			</View>
			<ScrollView>
				<View style={styles.scrollView}>
					{recipes.map((recipe) => (
						<Card key={recipe.id} data={recipe} onPress={handleCardPress} />
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#FFF",
		paddingLeft: 20,
		paddingRight: 20,
	},

	top: {
		marginBottom: 20,
	},

	title: {
		fontFamily: "Merriweather",
		fontSize: 25,
		color: "#655074",
	},

	subtitle: {
		alignContent: "flex-start",
		color: "grey",
	},

	scrollView: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		gap: 30,
	},
});
