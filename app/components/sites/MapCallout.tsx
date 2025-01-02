import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import { BreedingSite } from "../../types/breedingSite";

type MapCalloutProps = {
  site: BreedingSite;
};

export const MapCallout = ({ site }: MapCalloutProps) => {
  return (
    <View style={styles.callout}>
      <Image
        source={{ uri: site.capturedImage }}
        style={{ width: 100, height: 100, borderRadius: 5 }}
      />
      <Text style={styles.description}>
        {site.description || "No description available."}
      </Text>
      <Text style={{ fontSize: 10, opacity: 0.4 }}>SiteSeeker Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  callout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});

export default MapCallout;
