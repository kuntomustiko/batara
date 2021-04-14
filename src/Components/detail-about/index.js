import React from 'react';

function Detailabout({ propsData }) {
  console.log(propsData);
  return (
    <div className="detailabout">
      <div className="detailabout-list">
        <p className="listjudul">Species</p>
        <p>{propsData.species.name}</p>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Height</p>
        <p>{propsData.height}</p>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Weight</p>
        <p>{propsData.weight}</p>
      </div>

      <div className="detailabout-list">
        <p className="listjudul">Abilities</p>
        <p>
          {propsData.abilities[0].ability.name}
          {propsData.abilities[1] == true
            ? propsData.abilities[1].ability.name
            : ''}
        </p>
      </div>

      <h3>Breeding</h3>
      <div className="detailabout-list">
        <p className="listjudul">Gender</p>
        <p>?</p>
      </div>

      <div className="detailabout-list">
        <p className="listjudul">Egg Group</p>
        <p>?</p>
      </div>

      <div className="detailabout-list">
        <p className="listjudul">Egg Cycle</p>
        <p>?</p>
      </div>
    </div>
  );
}

export default Detailabout;
