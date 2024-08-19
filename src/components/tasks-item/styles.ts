import { styled } from "~/styles/stitches.config";

export const Container = styled("div", {
  backgroundColor: "$gray500",
  borderRadius: "8px",
  padding: "20px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export const Description = styled("p", {
  flex: 1,
  color: "white",
  fontWeight: "normal",
  fontSize: "0.8rem",
  textDecoration: "line-through",
  variants: {
    done: {
      true: {
        textDecoration: "line-through",
        color: "$gray300",
      },
      false: {
        textDecoration: "none",
        color: "white",
      },
    },
  },
});

export const Status = styled("div", {
  border: "2px solid $blue",
  width: "18px",
  height: "18px",
  borderRadius: "20px",
  cursor: "pointer",
});

export const StatusDone = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$purple",
  width: "18px",
  height: "18px",
  borderRadius: "20px",
  cursor: "pointer",
});

export const ButtonAction = styled("button", {
  all: "unset",
  cursor: "pointer",

  borderRadius: "200px",
  padding: "2px",
});
