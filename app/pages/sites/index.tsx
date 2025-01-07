import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import Mapbox from "@rnmapbox/maps";
import * as Location from "expo-location";
import marker from "../../../assets/marker.png";
import mockSites from "../../services/sites/mock/mockSites.json";
import { MapCallout } from "../../components/sites/MapCallout";
import styled from "styled-components/native";

Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN || "");

import { BreedingSite } from "../../types/breedingSite";

const PopupContainer = styled(View)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: 50%;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
`;

export default function MapsPage() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [cameraCoordinate, setCameraCoordinate] = useState<
    [number, number] | null
  >(null);
  const [selectedSite, setSelectedSite] = useState<BreedingSite | null>(null);

  useEffect(() => {
    const getUserLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation([location.coords.longitude, location.coords.latitude]);
    };

    getUserLocation();
  }, []);

  const handleMarkerPress = (site: BreedingSite) => {
    setCameraCoordinate([site.longitude, site.latitude]);
    setSelectedSite(site);
  };

  const closePopup = () => {
    setSelectedSite(null);
  };

  useEffect(() => {
    Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN || "");
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
          styleURL="mapbox://styles/mapbox/satellite-streets-v11"
          onPress={closePopup}
        >
          {userLocation && (
            <Mapbox.Camera
              zoomLevel={17}
              centerCoordinate={cameraCoordinate || userLocation}
            />
          )}

          {mockSites.map((site) => {
            if (!site.longitude || !site.latitude) {
              console.warn(`Invalid coordinates for site ID: ${site.id}`);
              return null;
            }

            return (
              <Mapbox.PointAnnotation
                key={site.id}
                id={`marker-${site.id}`}
                coordinate={[site.longitude, site.latitude]}
                onSelected={() =>
                  handleMarkerPress({
                    ...site,
                    detectionTime: new Date(site.detectionTime),
                    createdAt: new Date(site.createdAt),
                    updatedAt: new Date(site.updatedAt),
                  })
                }
              >
                <Image source={marker} style={styles.markerImage} />
              </Mapbox.PointAnnotation>
            );
          })}
        </Mapbox.MapView>
      </View>

      {selectedSite && (
        <PopupContainer>
          <MapCallout site={selectedSite} />
        </PopupContainer>
      )}
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
  markerImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
