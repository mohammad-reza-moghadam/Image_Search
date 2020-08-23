import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img
        src={image.urls.regular}
        key={image.id}
        style={{
          width: "250px",
          height: "300px",
          padding: "1rem",
          borderRadius: "10%",
        }}
      />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
