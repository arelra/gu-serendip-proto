import React, { useState, useMemo } from 'react'
import { Masonry } from "react-masonry";
import { ArticleViewer } from "./ArticleViewer";

const width = 400;
const height = 450;

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

function getBox(): React.CSSProperties {
  return {
    ...common,
    width,
    height: random(height - 150, height),
    backgroundColor: randomColor(),
    overflow: "hidden",
    transition: "all 1s",
    position: "relative",
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

const Overlay = ({
  title,
  url,
  pillar,
  setArticleUrl,
  showTitles,
}: {
  title: string;
  url: string;
  pillar: string;
  setArticleUrl: any;
  showTitles: boolean;
}) => {
  let pillarColor = "";
  switch (pillar.toLowerCase()) {
    case "news":
      pillarColor = "#FF5943";
      break;
    case "opinion":
      pillarColor = "#ff7f0f";
      break;
    case "sport":
      pillarColor = "#00b2ff";
      break;
    case "arts":
      pillarColor = "#eacca0";
      break;
    case "lifestyle":
      pillarColor = "#ffabdb";
      break;
  }
  const style = {
    color: "white",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#333",
    opacity: "0.75",
    padding: "1rem",
    borderTop: `2px solid ${pillarColor}`
  } as React.CSSProperties;
  if (!showTitles) return null;
  return (
    <div style={style}>
      <a target="_" onClick={(e) => {e.preventDefault(); setArticleUrl(url)}}>
        {title}
      </a>
    </div>
  );
};

const ImageHolder = ({ src }: { src: string }) => {
  const style = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${src})`,
    backgroundColor: randomColor(),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    transition: "all 0.5s",
    position: "relative",
  } as React.CSSProperties;
  return <div className="article-img" style={style}></div>;
};

const Content = ({
  articles,
  stacking,
  numberOfBoxes = 1,
  showTitles,
}: {
  articles: any;
  stacking: any;
  numberOfBoxes: number;
  showTitles: boolean;
}) => {
  const [articleUrl, setArticleUrl] = useState<string>("");
  const [showArticle, setShowArticle] = useState<boolean>(false);

  const numberOfBoxesInt = parseInt(String(numberOfBoxes), 10);
  const boxes = useMemo(() => [...Array(numberOfBoxesInt)].map(getBox), [numberOfBoxesInt]);

  return (
    <div style={{ position: "relative" }}>
      <Masonry
        style={{ height: 500 }}
        stacking={stacking}
        transition="fadeMove"
      >
        {boxes.slice(0, numberOfBoxesInt).map((boxStyle, index) => {
          const article = articles[index];
          return (
            <div className="box" key={index} style={{ ...boxStyle }}>
              <ImageHolder src={article?.images[0]?.src || ""} />
              <Overlay
                title={article?.title || ""}
                url={article?.url || ""}
                pillar={article?.pillar || ""}
                setArticleUrl={(url: any) => {setArticleUrl(url); setShowArticle(true);}}
                showTitles={showTitles}
              />
            </div>
          );
        })}
      </Masonry>
      <ArticleViewer
        url={articleUrl}
        show={showArticle}
        setShowArticle={setShowArticle}        
      />
    </div>
  );
};

export { Content };
