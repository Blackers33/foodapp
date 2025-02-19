import { useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../reducers/favorites";

export default function RecipeScreen({ navigation, route }) {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites.value);

	const [multiplier, setMultiplier] = useState(1);

	const ingredientCard = (ingredient) => {
		return (
			<View style={styles.ingredient} key={ingredient.name}>
				<Text style={styles.ingredientText}>{ingredient.name}</Text>
				<Text style={styles.ingredientText}>
					{ingredient.amount * multiplier} {ingredient.unit}
				</Text>
			</View>
		);
	};

	function handleFavorite() {
		if (favorites.includes(route.params)) {
			dispatch(removeFavorite(route.params));
		} else {
			dispatch(addFavorite(route.params));
		}
	}

	return (
		<View style={[styles.container, { backgroundColor: route.params.color }]}>
			<View style={styles.top}>
				<View
					style={[styles.topContainer, { backgroundColor: route.params.color }]}
				>
					<Image source={route.params.image} style={styles.image} />
				</View>
			</View>
			<View style={styles.bottom}>
				<View style={styles.bottomContainer}>
					<TouchableWithoutFeedback onPress={() => handleFavorite()}>
						<View style={styles.bookmark}>
							<FontAwesome
								name={
									favorites.includes(route.params) ? "bookmark" : "bookmark-o"
								}
								size={24}
								color={"#fff"}
							/>
						</View>
					</TouchableWithoutFeedback>
					<View style={styles.infoBar}>
						<View style={styles.infoBarElement}>
							<FontAwesome
								name='tachometer'
								size={24}
								color={route.params.color}
							/>
							<Text>{route.params.level}</Text>
						</View>
						<View style={styles.infoBarElement}>
							<Ionicons
								name='timer-sharp'
								size={24}
								color={route.params.color}
							/>
							<Text>{route.params.time}</Text>
						</View>
						<View style={styles.infoBarElement}>
							<FontAwesome name='star' size={24} color={route.params.color} />
							<Text>{route.params.rating}</Text>
						</View>
					</View>
					<View style={styles.titleBar}>
						<Text style={styles.title}>{route.params.name}</Text>
						<Text>{route.params.longDesc}</Text>
					</View>
					<View style={styles.servingsBar}>
						<View>
							<Text>Ingredients</Text>
							<Text>How many servings?</Text>
						</View>
						<View style={styles.button}>
							<TouchableWithoutFeedback
								onPress={() => setMultiplier(multiplier + 1)}
							>
								<View style={styles.touchable}>
									<Text>+</Text>
								</View>
							</TouchableWithoutFeedback>

							<Text>{multiplier}</Text>
							<TouchableWithoutFeedback
								onPress={() => multiplier > 1 && setMultiplier(multiplier - 1)}
							>
								<View style={styles.touchable}>
									<Text>-</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
					<ScrollView>
						<View style={styles.ingredients}>
							{route.params.ingredients.map((ingredient) =>
								ingredientCard(ingredient)
							)}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	top: {
		width: "100%",
		flex: 1,
		backgroundColor: "#FFF",
	},

	topContainer: {
		flex: 1,
		backgroundColor: "#FFEB85",
		borderBottomLeftRadius: 100,
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 10,
	},

	bottom: {
		width: "100%",
		flex: 2,
		borderTopRightRadius: 100,
		backgroundColor: "#FFF",
		alignItems: "center",
	},

	bottomContainer: {
		width: "90%",
	},

	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
	},

	bookmark: {
		width: 60,
		height: 60,
		position: "absolute",
		right: 15,
		top: -20,
		backgroundColor: "#655074",
		borderRadius: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	infoBar: {
		flexDirection: "row",
		width: "100%",
		height: 100,
		alignItems: "flex-end",
		justifyContent: "space-around",
	},

	infoBarElement: {
		justifyContent: "center",
		alignItems: "center",
	},

	titleBar: {
		paddingTop: 10,
		width: "100%",
		justifyContent: "flex-end",
		gap: 5,
	},

	title: {
		fontFamily: "Merriweather",
		fontSize: 25,
		color: "#655074",
	},

	servingsBar: {
		width: "100%",
		height: 80,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	ingredient: {
		height: 70,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	button: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
		borderRadius: 30,
		width: 100,
	},

	touchable: {
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},

	ingredientText: {
		color: "grey"
	}
});
