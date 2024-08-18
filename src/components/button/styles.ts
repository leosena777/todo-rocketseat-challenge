import { styled } from "~/styles/stitches.config";

export const ButtonBase = styled("button", {
  all: "unset",
  display: "flex",
  backgroundColor: "$blueDark",
  color: "$gray100",
  padding: "1rem 1.5rem",
  borderRadius: "8px",
  gap: 5,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$blue",
  },
});
