import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-web";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";

function PlaceDetails() {
  function showOnMapHandler() {}
  return (
    <ScrollView>
      <Image />
      <View>
        <View>
          <Text>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
