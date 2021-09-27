// Imports
import React from "react";
import { Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

// importing user defined components.
import Screen from "../components/Screen";
import colors from "../config/colors";

function ProductScreen({ navigation, route }) {
  // Helper Function.
  function getNElements(arr, n) {
    const answer = [];
    n--;
    for (let i = 0; i < arr.length; i += arr.length / n) {
      answer.push(arr[Math.floor(i)]);
    }
    return answer;
  }
  graphData = getNElements(route.params.price_history, 5);
  
  return (
    <Screen style={styles.graphContainer}>
      <Text style={styles.legend}>{route.params.name}</Text>
      <LineChart
        data={{
          labels: graphData.map((data) =>
            new Date(data.timestamp).toDateString().slice(3)
          ),
          datasets: [
            {
              // Extract the number from the string.
              data: graphData.map((data) =>
                parseFloat(data.price.replace(/[$S]/g, ""))
              ),
            },
          ],
        }}
        width={300}
        height={220}
        yAxisLabel="$"
        verticalLabelRotation={10}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { ...styles.graph },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 16,
    marginBottom: 100,
  },
  graph: {
    borderRadius: 100,
    overflow: "hidden",
  },
  legend: {
    fontSize: 25,
    marginBottom: 30,
    color: colors.primary,
  },
});

export default ProductScreen;
