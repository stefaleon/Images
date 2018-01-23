import React from 'react';
import ImageDetail from './image_detail';

// const IMAGES = [
//   { title: "img1", link:"https://i.imgur.com/evTdINz.jpg" },
//   { title: "img2", link:"https://i.imgur.com/jjFv7N7.jpg" },
//   { title: "img3", link:"https://i.imgur.com/thXiQZ9.jpg" },
//   { title: "img4", link:"https://i.imgur.com/evTdINz.jpg" },
//   { title: "img5", link:"https://i.imgur.com/jjFv7N7.jpg" },
//   { title: "img6", link:"https://i.imgur.com/thXiQZ9.jpg" },
//   { title: "img7", link:"https://i.imgur.com/evTdINz.jpg" },
//   { title: "img8", link:"https://i.imgur.com/jjFv7N7.jpg" },
//   { title: "img9", link:"https://i.imgur.com/thXiQZ9.jpg" },
//   { title: "img0", link:"https://i.imgur.com/ViuAwAv.jpg" }
// ];

const ImageList = (props) => {

  // const RenderedImages = IMAGES.map((image) =>{
  //   return <ImageDetail key={image.title} imageprop={image} />
  // });

  const ValidImages = props.imagesprop.filter(x => !x.is_album );

  const RenderedImages = ValidImages.map((image) =>{
    return <ImageDetail key={image.title} imageprop={image} />
  });

  return (
    <div className="wrapper">
      {RenderedImages}
    </div>
  );
};

export default ImageList;
