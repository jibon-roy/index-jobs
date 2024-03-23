"use client"
import { createContext, useState } from "react";

export const ColorContext = createContext({})

const ColorProvider = ({ children }: any) => {

    const [isDark, setIsDark] = useState(false)

    interface themeColors {
        background: String,
        text: String,
        primary: String,
        button: String,
        link: String,
        buttonBorder: String,
        inputBorder: String,
        buttonHover: String,
        inputHover: String,
        linkHover: String,
    }

    const lightClors: themeColors = {
        // Light Theme
        background: '#F5F5F5',
        // Background
        text: '#333333', // Text
        primary: '#2196F3', // Header/Footer (Primary)
        button: '#FF9800', // Button
        link: '#1976D2', // Link
        // Light Theme - Button & Input Border
        buttonBorder: '#FF9800', // Button Border
        inputBorder: '#CCCCCC', // Input Border
        // Light Theme - Button & Input Hover
        buttonHover: '#FFB74D', // Button Hover
        inputHover: '#DDDDDD', // Input Hover
        linkHover: '#1565C0', // Link Hover
    }

    const darkClors: themeColors = {
        // Dark Theme
        background: '#212121', // Background
        text: '#EEEEEE', // Text
        primary: '#FF5722', // Header/Footer (Primary)
        button: '#4CAF50', // Button
        link: '#FF9800', // Link
        // Dark Theme - Button & Input Border
        buttonBorder: '#4CAF50', // Button Border
        inputBorder: '#555555', // Input Border
        // Dark Theme - Button & Input Hover
        buttonHover: '#81C784', // Button Hover
        inputHover: '#444444', // Input Hover
        linkHover: '#FFB74D', // Link Hover
    }

    return (
        <ColorContext.Provider value={isDark ? darkClors : lightClors}>
            {children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;