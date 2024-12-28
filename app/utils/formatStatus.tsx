import React from "react";
import { Text } from "react-native";

const capitalizeFirstLetter = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatStatus = (status: string) => {
  let statusColor;

  switch (status) {
    case "confirmed":
      statusColor = "green";
      break;
    case "resolved":
      statusColor = "blue";
      break;
    case "unconfirmed":
      statusColor = "orange";
      break;
    default:
      statusColor = "gray";
  }

  const formattedStatus = capitalizeFirstLetter(status);

  return <Text style={{ color: statusColor }}>{formattedStatus}</Text>;
};

export default formatStatus;
