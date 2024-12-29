import { StyleSheet, View } from "react-native";
import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN || null);

export default function MapsPage() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
          styleURL="mapbox://styles/mapbox/satellite-streets-v12" // Hybrid style (satellite with streets)
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});
