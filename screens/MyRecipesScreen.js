import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function MyRecipesScreen({ navigation }) {
	const favorites = useSelector((state) => state.favorites.value);

	function handleCardPress(props) {
		navigation.navigate("Recipe", props);
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.scrollView}>
					{favorites.length > 0 ? (
						favorites.map((recipe) => (
							<Card key={recipe.id} data={recipe} onPress={handleCardPress} />
						))
					) : (
						<Text style={styles.noFavoritesText}>
							You don't have any favorites yet. Click on the bookmark button of a recipe to add favorites.
						</Text>
					)}
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

	card: {
		width: "45%",
		height: 200,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 40,
		borderBottomLeftRadius: 70,
		borderBottomRightRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},

	image: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},

	cardName: {
		textAlign: "right",
		color: "#655074",
		fontWeight: 600,
	},

	cardDesc: {
		textAlign: "right",
		color: "grey",
		fontSize: 10,
	},
});
