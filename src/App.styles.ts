import { styled } from "./styles/stitches.config";

export const CreateContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: 5,

  maxWidth: "736px",
  margin: "0 auto",
  marginTop: "-30px",
});

export const TasksContainer = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: 736,
  margin: "0 auto",

  flexDirection: "column",
  marginTop: 50,
});

export const TasksStatus = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: 10,
});

export const TasksItemsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 20,
});
