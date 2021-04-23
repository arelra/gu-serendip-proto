import React from "react";
import { Masonry } from "react-masonry";
import articles from "./data.json";

const width = 400;

const common = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
};

const titleStyle = {
  padding: "5rem",
} as React.CSSProperties;

function random(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function random250() {
  return random(0, 255);
}

function getBox() {
  return {
    ...common,
    width: width,
    height: random(300, 450),
    backgroundColor: randomColor(),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
}

function randomColor() {
  return `rgb(${random250()},${random(0, 100)},${random(0, 120)})`;
}

function getImageSrc(height: number) {
  return (
    [
      `https://loremflickr.com/${width}/`,
      `https://www.fillmurray.com/${width}/`,
      `https://placebeard.it/${width}x`,
      `https://www.placecage.com/130/`,
    ][random(0, 2)] + height
  );
}

const Overlay = ({title, url}: {title: string, url: string}) => {
  const style = {
    color: "white",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#333",
    opacity: "0.75",
    padding: "1rem",
  } as React.CSSProperties;
  return (
    <div style={style}>
      <a target="_" href={url}>{title}</a>
    </div>
  )
}

const Content = ({
  stacking,
  numberOfBoxes = 1,
}: {
  stacking: any;
  numberOfBoxes: number;
}) => {
  const numberOfBoxesInt = parseInt(String(numberOfBoxes), 10);
  const boxes = [...Array(numberOfBoxesInt)].map(getBox);

  return (
    <Masonry style={{ height: 500 }} stacking={stacking} transition="fadeMove">
      {boxes.slice(0, numberOfBoxesInt).map((boxStyle, index) => {
        const article = articles[index];
        return (
          <div
            className="box"
            key={index}
            style={{ ...boxStyle, backgroundImage: `url(${article?.images[0]?.src})` }}
          >
            <Overlay title={article?.title || ""} url={article?.url || ""} />
          </div>
      )})}
    </Masonry>
  );
};

export { Content };
