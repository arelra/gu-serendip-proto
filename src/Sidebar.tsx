import React, { useState } from "react";
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

const Sidebar = ({setShowTitles, showTitles}: {setShowTitles: any, showTitles: any}) => {
  const [showControls, setShowControls] = useState(false);
  return (
    <div style={style}>
      <div style={gStyle}>g</div>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem", cursor: "pointer" }} onClick={(e) => {e.preventDefault(); setShowControls(!showControls);}}>⚙</div>
      {showControls && <Controls setShowTitles={setShowTitles} showTitles={showTitles} />}
    </div>
  )
};

export { Sidebar };
