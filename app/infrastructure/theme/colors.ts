const colors = {
  brand: {
    primary: "#696AC3",
    secondary: "#5D6CC6",
    muted: "#C6DAF7",
  },
  ui: {
    primary: "#262626",
    secondary: "#757575",
    tertiary: "#F1F1F1",
    quaternary: "#FFFFFF",
    disabled: "#DEDEDE",
    error: "#D0421B",
    success: "#138000",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#121212",
    header: "#282828",
  },
  text: {
    primary: "#262626",
    secondary: "#74716d",
    disabled: "#9C9C9C",
    inverse: "#FFFFFF",
    error: "#D0421B",
    success: "#138000",
  },
};

// app/infrastructure/theme.js
export const lightTheme = {
  colors: {
    background: "#fff",
    text: "#000",
  },
};

export const darkTheme = {
  colors: {
    background: "#000",
    text: "#fff",
  },
};

export default colors;
lightTheme;
darkTheme;
