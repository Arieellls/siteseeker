import { Text } from "react-native";

const capitalizeFirstLetter = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatStatus = (status: string) => {
  let statusColor;

  switch (status) {
    case "confirmed":
      statusColor = "#358e64";
      break;
    case "resolved":
      statusColor = "#3c6799";
      break;
    case "unresolved":
      statusColor = "#9c6630";
      break;
    default:
      statusColor = "#B0B0B0";
  }

  const formattedStatus = capitalizeFirstLetter(status);

  return <Text style={{ color: statusColor }}>{formattedStatus}</Text>;
};

export default formatStatus;
