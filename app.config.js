import "dotenv/config";

export default {
  expo: {
    name: "siteseeker",
    slug: "siteseeker",
    scheme: "siteseeker",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.aryelll.siteseeker",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: process.env.RN_MAPBOX_MAPS_DOWNLOAD_TOKEN,
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow Siteseeker to use your location.",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "0f2971be-ac1a-44fa-bcb0-0cee86d40f59",
      },
    },
  },
};
