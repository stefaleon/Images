import React from 'react';


const ImageDetail = (props) => {
  return (
      <div className="item">
        <p>{props.imageprop.title}</p>
        <img src={props.imageprop.link} />
      </div>
  );
};

export default ImageDetail;
