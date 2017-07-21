import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '95%',
    overflowY: "hidden"
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

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (

  <div style={styles.root}>
    <GridList
      cellHeight={500}
      style={styles.gridList}
    >
      <Subheader>Popular</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}>
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
