import React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useTheme } from "../infrastructure/theme/ThemeContext";

const Text = (props: TextProps) => {
  const { theme } = useTheme();
  return <RNText {...props} style={[props.style, { color: theme.text }]} />;
};

export default Text;
