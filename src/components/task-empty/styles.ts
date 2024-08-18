import { styled } from "~/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem",
});

export const Image = styled("img", {
  width: "56px",
  height: "56px",
  marginBottom: "10px",
});

export const Title = styled("p", {
  color: "$gray300",
  fontWeight: "bold",
});

export const Caption = styled("p", {
  color: "$gray300",
  fontWeight: "100",
});
