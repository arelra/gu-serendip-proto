import React from "react";
import { Masonry } from "react-masonry";

const width = 250;

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
    height: random(160, 640),
    backgroundColor: randomColor(),
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
      {boxes.slice(0, numberOfBoxesInt).map((box, index) => (
        <div
          className="box"
          key={index}
          style={{ ...box, backgroundImage: `url(${getImageSrc(box.height)})` }}
        >
          <div style={titleStyle}>{index}</div>
        </div>
      ))}
    </Masonry>
  );
};

export { Content };
