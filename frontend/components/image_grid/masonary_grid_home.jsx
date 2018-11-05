import React from 'react';
import Masonry from 'react-masonry-component';

const tilesData = [
  {
    img: 'https://res.cloudinary.com/djubcegxh/image/upload/v1500486778/cwvvwceewd3x1ih5ayhv.jpg',
    title: 'Sunset',
    author: 'jill111',
  },
  {
    img: 'https://res.cloudinary.com/djubcegxh/image/upload/v1500486853/gflf73xqquslg0ohotkh.jpg',
    title: 'I like turtles',
    author: 'pashminu',
  },
  {
    img: 'https://res.cloudinary.com/djubcegxh/image/upload/v1500486832/tu8mtyaprqankdxvzz47.jpg',
    title: 'Finding Nemo',
    author: 'Danson67',
  },
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500490632/Underwater-Fish-Photography_crbs43.jpg',
    title: 'School of Fish!',
    author: 'fancycrave1',
  },
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500497558/Women-Underwater-Photoshoot_tno4um.jpg',
    title: 'DeepWater Dive',
    author: 'jill111',
  },
  {
    img: 'https://res.cloudinary.com/djubcegxh/image/upload/v1500497542/Creatues-Underwater-Photography_klinki.jpg',
    title: 'Barnacles',
    author: 'pashminu',
  },
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500497541/Beautiful-Tortoise-Photography_gez5t4.jpg',
    title: 'I like turtles',
    author: 'Danson67',
  },
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500497557/Underwater-Animal-Fish-Photography_ihvxf9.jpg',
    title: 'Stingray',
    author: 'fancycrave1',
  },
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500497557/DSC_0679_fimifc.jpg',
    title: 'Snow on Tree',
    author: 'RuthHwang',
  },
];

class MasonaryHome extends React.Component {
    constructor(props) {
      super(props);
    }

      render() {
        let masonryOptions = {
            transitionDuration: 0,
            gutter: 20,
            fitWidth: true
          };

        function toTitleCase(str)
        {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }


        let elements = tilesData.map((tile) => (
          <li className="imageGridUser">
            <h1 className="imageGridTitle" key={tile.title}>{toTitleCase(tile.title)}</h1>
              <img src={tile.img}
                key={tile.img}
                ></img>
            </li>
          )
        );


        return (
          <Masonry
              className={'my-gallery-class remove-padding'}
              elementType={'ul'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
          >
              {elements}
          </Masonry>
        );
      };

  }

export default MasonaryHome;
