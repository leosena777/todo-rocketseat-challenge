import { styled } from "~/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  width: "100%",

  backgroundColor: "$gray500",
  border: "1px solid $gray900",
  padding: "1rem",
  borderRadius: "8px",
  boxShadow: "2px 2px 2px $colors$gray700",
});

export const InputBase = styled("input", {
  flex: 1,
  fontSize: "0.9rem",
  fontWeight: 300,
  backgroundColor: "transparent",
  border: "none",
  color: "$gray100",

  "&:focus": {
    outline: "none",
  },
});
