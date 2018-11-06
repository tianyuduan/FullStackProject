import React from 'react';
import Gallery from 'react-grid-gallery';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "95%",
    height: 450,
    overflowY: 'hidden',
  },
};

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
  {
    img: 'http://res.cloudinary.com/djubcegxh/image/upload/v1500497549/DSC_0251_ew8lig.jpg',
    title: 'Flower',
    author: 'RuthHwang',
  },
];

const IMAGES =
[{
        src: "https://res.cloudinary.com/djubcegxh/image/upload/v1500486778/cwvvwceewd3x1ih5ayhv.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500486778/cwvvwceewd3x1ih5ayhv.jpg",
        thumbnailWidth: 572,
        thumbnailHeight: 375,
        caption: "Sunset"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497541/Beautiful-Tortoise-Photography_gez5t4.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500497541/Beautiful-Tortoise-Photography_gez5t4.jpg",
        thumbnailWidth: 546,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497556/Swimmer-Among-Fishes_g1cmu3.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500497556/Swimmer-Among-Fishes_g1cmu3.jpg",
        thumbnailWidth: 643,
        thumbnailHeight: 375,
},

{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497557/Underwater-Animal-Fish-Photography_ihvxf9.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500497557/Underwater-Animal-Fish-Photography_ihvxf9.jpg",
        thumbnailWidth: 667,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497558/Women-Underwater-Photoshoot_tno4um.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500497558/Women-Underwater-Photoshoot_tno4um.jpg",
        thumbnailWidth: 563,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500486853/gflf73xqquslg0ohotkh.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375,w_625/v1500486853/gflf73xqquslg0ohotkh.jpg",
        thumbnailWidth: 625,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497542/Creatues-Underwater-Photography_klinki.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500497542/Creatues-Underwater-Photography_klinki.jpg",
        thumbnailWidth: 564,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500497558/Underwater-Marine-Life-Photography_llscav.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375,w_563/v1500497558/Underwater-Marine-Life-Photography_llscav.jpg",
        thumbnailWidth: 563,
        thumbnailHeight: 375,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1500490632/Underwater-Fish-Photography_crbs43.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1500490632/Underwater-Fish-Photography_crbs43.jpg",
        thumbnailWidth: 549,
        thumbnailHeight: 375,
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1501246901/Underwater-Boys-Photography_nh9eoj.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1501246901/Underwater-Boys-Photography_nh9eoj.jpg",
        thumbnailWidth: 549,
        thumbnailHeight: 375,
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1501132918/claudio-guglieri-287940-min_yk7k0e.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1501132918/claudio-guglieri-287940-min_yk7k0e.jpg",
        thumbnailWidth: 563,
        thumbnailHeight: 375,
},
{
        src: "http://res.cloudinary.com/djubcegxh/image/upload/v1501246900/Shining-Fish-Underwater-Photography_wpujbq.jpg",
        thumbnail: "http://res.cloudinary.com/djubcegxh/image/upload/c_scale,h_375/v1501246900/Shining-Fish-Underwater-Photography_wpujbq.jpg",
        thumbnailWidth: 488,
        thumbnailHeight: 375,
},

];
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (

    <div className='image-grid' >
    <Gallery images={IMAGES}
      rowHeight={375} margin={5}
      backdropClosesModal={true}
      enableLightbox = {false}
      />
    </div>
);

export default GridListExampleSimple;
