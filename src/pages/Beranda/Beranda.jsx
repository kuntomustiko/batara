import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Menu from '../../Components/menu/index';
import { IoArrowBack } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { detailDataAction } from '../../redux/actions/index';

function Beranda({ propsData }) {
  const [data, setData] = useState(false);
  const dispatch = useDispatch();

  const getData = () => {
    console.log(propsData);
    return propsData.map((data, index) => {
      let x = '';
      if (data.types[0].type.name == 'psychic') {
        x = '#9a9a9a';
      } else if (data.types[0].type.name == 'grass') {
        x = '#00ff80';
      } else if (data.types[0].type.name == 'fire') {
        x = '#ff1a1a';
      }

      dispatch(detailDataAction(data));

      return (
        <Menu
          propsName={data.name}
          propsType1={data.types[0].type.name}
          propsTypeHex1={x}
          propsType2={data.types.lenght == 2 ? data.types[1].type.name : ''}
          propsImg={data.sprites.other.dream_world.front_default}
        />
      );
    });
  };
  return (
    <>
      <div className="beranda-icon">
        <IoArrowBack />
        <IoMenu />
      </div>
      <div className="beranda-title">Pokedex</div>
      <Link to={'/detail'}>
        <div className="beranda-menu">{getData()}</div>
      </Link>
    </>
  );
}

export default Beranda;
