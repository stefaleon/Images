import React from 'react';


const ImageDetail = (props) => {
  return (
      <div>
        {props.imageprop.title}
        <img src={props.imageprop.link} />
      </div>
  );
};

export default ImageDetail;
