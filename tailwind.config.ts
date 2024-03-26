import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "c-bg": 'var(--color-main) ', // Background
        "c-primary": 'var(--color-primary)', //  Header/Footer (Primary)
        "c-secondary": 'var(--color-secondary)', //  Header/Footer (Primary)
        "c-text": 'var(--color-text) ', // Text
        "c-button": 'var(--color-button) ', // Button
        "c-link": 'var(--color-link) ', // Link
        "c-text-hover": "var(--color-text-hover)",
        "c-buttonBorder": 'var(--color-buttonBorder) ', // Button Border
        "c-inputBorder": 'var(--color-inputBorder) ', // Input Border
        "c-buttonHover": 'var(--color-buttonHover) ', // Button Hover
        "c-inputHover": 'var(--color-inputHover) ', // Input Hover
        "c-linkHover": 'var(--color-linkHover) ', // Link Hover

      },
    },
  },
  plugins: [],
};
export default config;
