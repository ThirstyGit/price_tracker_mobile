import React from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

function Card({ imgSrc, name, price, onPress }) {
  return (
    <TouchableHighlight style={styles.touchable} onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imgSrc }} style={styles.cardImage} />
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardPrice}>{price}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: "80%",
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 30,
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  cardName: {
    paddingLeft: 10,
    paddingRight: 10,
    color: "hsl(0, 0%, 21%)",
  },
  cardPrice: {
    color: "hsl(135, 100%, 75%)",
    fontSize: 25,
    marginBottom: 10,
  },
});

export default Card;
