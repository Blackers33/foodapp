import React from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

function Card(props) {

	return (
		<TouchableWithoutFeedback
			onPress={() => props.onPress(props.data)}
		>
			<View
				key={props.id}
				style={[styles.card, { backgroundColor: props.data.color }]}
			>
				<Image source={props.data.image} style={styles.image} />
				<View style={{ width: "90%" }}>
					<Text style={styles.name}>{props.data.name}</Text>
					<Text style={styles.desc}>{props.data.desc}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({

    card: {
        width: "45%",
        minWidth: 140,
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

    name: {
        textAlign: "right",
        color: "#655074",
        fontWeight: 600,
    },

    desc: {
        textAlign: "right",
        color: "grey",
        fontSize: 10,
    },
});

export default Card;
