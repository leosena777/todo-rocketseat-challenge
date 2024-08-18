// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      blueDark: "#1E6F9F",
      blue: "#4EA8DE",
      purpleDark: "#5E60CE",
      purple: "#8284FA",
      gray700: "#0D0D0D",
      gray600: "#1A1A1A",
      gray500: "#262626",
      gray400: "#333333",
      gray300: "#808080",
      gray200: "#d9d9d9",
      gray100: "#f2f2f2",
      feedback: "#E25858",
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "monospace",
    },
  },
  media: {},
  utils: {},
});
