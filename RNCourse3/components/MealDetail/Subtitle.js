import { Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#E2B497",
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#E2B497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
