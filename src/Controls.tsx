import React, { useState } from 'react';
import Switch from "react-switch";

const controlsStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "6rem",
} as React.CSSProperties;

const Controls = ({setShowTitles, showTitles}: {setShowTitles: any, showTitles: any}) => {
    return (
        <div style={controlsStyle}>
            <div>Titles</div>
            <Switch onChange={() => {setShowTitles()}} checked={showTitles} onColor="#888" className="switch-title" />
            <div>News</div>
            <input type="range" data-pillar="news" min="1" max="20" defaultValue="10" className="slider" id="myRange" />
            <div>Opinion</div>
            <input type="range" data-pillar="opinion" min="1" max="20" defaultValue="10" className="slider" id="myRange" />
            <div>Sport</div>
            <input type="range" data-pillar="sport" min="1" max="20" defaultValue="10" className="slider" id="myRange" />
            <div>Culture</div>
            <input type="range" data-pillar="culture" min="1" max="20" defaultValue="10" className="slider" id="myRange" />
            <div>Lifestyle</div>
            <input type="range" data-pillar="lifestyle" min="1" max="20" defaultValue="10" className="slider" id="myRange" />
        </div>
    );
}

export { Controls }