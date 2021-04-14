import React, { useState } from 'react';

function Menu({ propsName, propsType1, propsTypeHex1, propsType2, propsImg }) {
  return (
    <div className="menu" style={{ background: `${propsTypeHex1}` }}>
      <div className="menu-isi">
        <div className="menu-isi__name">{propsName}</div>
        <div className="menu-isi__type1">{propsType1}</div>
        <div className="menu-isi__type2">{propsType2}</div>
      </div>
      <img src={propsImg} alt="" />
    </div>
  );
}

export default Menu;
