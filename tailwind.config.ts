import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme
        backgroundLight: '#F5F5F5', // Background
        textLight: '#333333', // Text
        primaryLight: '#2196F3', // Header/Footer (Primary)
        buttonLight: '#FF9800', // Button
        linkLight: '#1976D2', // Link
        // Light Theme - Button & Input Border
        buttonBorderLight: '#FF9800', // Button Border
        inputBorderLight: '#CCCCCC', // Input Border
        // Light Theme - Button & Input Hover
        buttonHoverLight: '#FFB74D', // Button Hover
        inputHoverLight: '#DDDDDD', // Input Hover
        linkHoverLight: '#1565C0', // Link Hover

        // Dark Theme
        backgroundDark: '#212121', // Background
        textDark: '#EEEEEE', // Text
        primaryDark: '#FF5722', // Header/Footer (Primary)
        buttonDark: '#4CAF50', // Button
        linkDark: '#FF9800', // Link
        // Dark Theme - Button & Input Border
        buttonBorderDark: '#4CAF50', // Button Border
        inputBorderDark: '#555555', // Input Border
        // Dark Theme - Button & Input Hover
        buttonHoverDark: '#81C784', // Button Hover
        inputHoverDark: '#444444', // Input Hover
        linkHoverDark: '#FFB74D', // Link Hover

      },
    },
  },
  plugins: [],
};
export default config;
