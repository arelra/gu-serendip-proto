import React from "react";
import { Controls } from './Controls'

const style = {
  backgroundColor: "#052962",
  lineHeight: "2rem",
  color: "white",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
} as React.CSSProperties;

const gStyle = {
  fontSize: "6rem",
  lineHeight: "4rem",
  padding: "1rem",
  fontWeight: 900,
  marginBottom: "2rem",
} as React.CSSProperties;

const Sidebar = () => {
  return (
    <div style={style}>
      <div style={gStyle}>g</div>
      <Controls />
    </div>
  )
};

export { Sidebar };
