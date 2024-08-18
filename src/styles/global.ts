import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "$sans",
    backgroundColor: "$gray600",
  },
});
