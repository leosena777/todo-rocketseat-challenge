import { styled } from "~/styles/stitches.config";

export const BadgeBase = styled("div", {
  color: "$blue",
  fontSize: "0.8rem",
  fontWeight: "bold",
});

export const Counter = styled("span", {
  backgroundColor: "$gray400",
  fontSize: "0.6rem",
  color: "white",
  padding: "0.2rem 0.6rem",
  borderRadius: "9999px",
  marginLeft: "0.5rem",
});
