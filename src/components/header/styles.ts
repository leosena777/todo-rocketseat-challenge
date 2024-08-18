import { styled } from "~/styles/stitches.config";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "1rem",
  backgroundColor: "$gray700",
  height: 200,
});

export const LogoContainer = styled("img", {
  width: 126,
  height: 48,
  marginTop: "-30px",
});
