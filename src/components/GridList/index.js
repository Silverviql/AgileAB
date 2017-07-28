import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import bankOK from 'image/grid-list/bankOK.jpg';
import Online from 'image/grid-list/Online.jpg';
import RD from 'image/grid-list/R&D.jpg';
import Marketplace from 'image/grid-list/Marketplace.jpg';
import prognosis from 'image/grid-list/prognosis.jpg';
import Innovation from 'image/grid-list/Innovation.jpg';
import site from 'image/grid-list/site.jpg';
import WebOK from 'image/grid-list/WebOK.jpg';
import Marketing from 'image/grid-list/Marketing.png';



const styles = {
  root: {


    flexWrap: 'wrap',
    
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    height: Screen.height,

  },
};

const tilesData = [
  {
    img: bankOK,
    title: ' bankOK',
    author: 'Айгуль Абзалова',
  },
  {
    img: WebOK,
    title: 'WebOK',
    author: 'Ярослав Шуваев',
  },
  {
    img: Online,
    title: 'Akbars Online',
    author: 'Эльбек Хабибуллин',
  },
  {
    img: site,
    title: 'Akbars site',
    author: 'Максим Пранов',
  },
  {
    img: RD,
    title: 'R&D',
    author: 'Ярослав Шуваев',
  },
  {
    img: Marketplace,
    title: 'Marketplace',
    author: 'Евгений Иевлев',
  },
  {
    img: prognosis,
    title: 'Прогноз',
    author: 'Unknown',
  },
  {
    img: Innovation,
    title: 'Innovation',
    author: 'Дамир Галиев',
  },
  {
    img: Marketing,
    title: 'Digital-Маркетинг',
    author: 'Вассерман Антон',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Ak Bars Digital Technologies</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;