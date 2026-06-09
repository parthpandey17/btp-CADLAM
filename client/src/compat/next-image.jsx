import React from "react";

export default function Image({ src, alt = "", width, height, style, ...rest }) {
  const mergedStyle = {
    ...(style || {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return <img src={src} alt={alt} style={mergedStyle} {...rest} />;
}
