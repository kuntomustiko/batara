import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoArrowBack } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import Detailabout from '../../Components/detail-about';
import Detailstats from '../../Components/detail-stats';
import Detailevo from '../../Components/detail-evo';
import Detailmenu from '../../Components/detail-menu';
import { Link } from 'react-router-dom';

function Detail() {
  const [aboutmenu, setAboutmenu] = useState(true);
  const [statsmenu, setStatsmenu] = useState(false);
  const [evomenu, setEvomenu] = useState(false);
  const [menumenu, setMenumenu] = useState(false);
  const data = useSelector((state) => state.datadetailReducer.datared);

  const btnClick = (nickname) => {
    if (nickname == 'about') {
      console.log('about');
      setAboutmenu(true);
      setStatsmenu(false);
      setEvomenu(false);
      setMenumenu(false);
    } else if (nickname == 'stats') {
      console.log('stats');
      setAboutmenu(false);
      setStatsmenu(true);
      setEvomenu(false);
      setMenumenu(false);
    } else if (nickname == 'evo') {
      console.log('evo');
      setAboutmenu(false);
      setStatsmenu(false);
      setEvomenu(true);
      setMenumenu(false);
    } else if (nickname == 'menu') {
      console.log('menu');
      setAboutmenu(false);
      setStatsmenu(false);
      setEvomenu(false);
      setMenumenu(true);
    }
  };
  const renderData = () => {
    let x = '';
    if (data.types[0].type.name == 'psychic') {
      x = '#9a9a9a';
    } else if (data.types[0].type.name == 'grass') {
      x = '#00ff80';
    } else if (data.types[0].type.name == 'fire') {
      x = '#ff1a1a';
    }

    let tampilMenu;

    if (aboutmenu) {
      tampilMenu = <Detailabout propsData={data} />;
    } else if (statsmenu) {
      tampilMenu = <Detailstats propsData={data} />;
    } else if (evomenu) {
      tampilMenu = <Detailevo propsData={data} />;
    } else if (menumenu) {
      tampilMenu = <Detailmenu propsData={data} />;
    }

    return (
      <div className="detail" style={{ background: `${x}` }}>
        <div className="detail-icon">
          <Link to={'/'}>
            <IoArrowBack />
          </Link>
          <IoMenu />
        </div>
        <div className="detail-contitle">
          <div className="detail-contitle__titleleft">
            <div className="detail-name">{data.name}</div>
            <div className="detail-type">
              <p className="detail-type__type1">{data.types[0].type.name}</p>
              <p className="detail-type__type2">
                {data.types.lenght == 2 ? data.types[1].type.name : ''}
              </p>
            </div>
          </div>
          <div className="detail-contitle__titleright">#{data.id}</div>
        </div>
        <img
          className="detail"
          src={data.sprites.other.dream_world.front_default}
          alt=""
        />
        <div className="detailbody">
          <div className="detailbody-menu">
            <button
              onClick={() => btnClick('about')}
              style={
                aboutmenu
                  ? { borderBottom: '2px solid purple' }
                  : { borderBottom: '' }
              }>
              About
            </button>
            <button
              onClick={() => btnClick('stats')}
              style={
                statsmenu
                  ? { borderBottom: '2px solid purple' }
                  : { borderBottom: '' }
              }>
              Base Stats
            </button>
            <button
              onClick={() => btnClick('evo')}
              style={
                evomenu
                  ? { borderBottom: '2px solid purple' }
                  : { borderBottom: '' }
              }>
              Evolution
            </button>
            <button
              onClick={() => btnClick('menu')}
              style={
                menumenu
                  ? { borderBottom: '2px solid purple' }
                  : { borderBottom: '' }
              }>
              Moves
            </button>
          </div>

          {tampilMenu}
        </div>
      </div>
    );
  };

  return <>{renderData()}</>;
}

export default Detail;
