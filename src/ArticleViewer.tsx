import React from "react";

const style = {
  position: "absolute",
  top: "-8rem",
  left: "0",
  width: "100%",
  height: "110vh",
} as React.CSSProperties;

const getProxyUrl = (url: string) => {
  // Thank you Fares for 4mats!
  const prefix = "https://4mats.netlify.app/.netlify/functions/proxy?id=";
  const postfix = "&platform=dcr";
  let proxyPath = url.replace("https://www.theguardian.com/", "");
  proxyPath = proxyPath.replaceAll("/", "%2F");
  const newUrl = `${prefix}${proxyPath}${postfix}`;
  return newUrl;
};

const closeStyle = {
  position: "absolute",
  right: "1rem",
  top: "9rem",
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  border: "1px solid #AAA",
  color: "black",
} as React.CSSProperties;

const CloseIcon = ({setShowArticle}: {setShowArticle: any}) => {
  return (
    <div style={closeStyle} onClick={() => setShowArticle(false)}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        enable-background="new 0 0 50 50"
        xmlSpace="preserve"
      >
        <path
          fill="#AAA"
          d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
	l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
	L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
	c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
	C8.625,39.813,8.625,40.447,9.016,40.837z"
        />
      </svg>
    </div>
  );
};

const ArticleViewer = ({ url, show, setShowArticle }: { url: string; show: boolean, setShowArticle: any }) => {
  if (!show) return null;
  const proxyUrl = getProxyUrl(url);
  return (
    <div style={style}>
      <iframe
        src={proxyUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
      <CloseIcon setShowArticle={setShowArticle}/>
    </div>
  );
};

export { ArticleViewer };
