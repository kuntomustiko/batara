import React from 'react';

function Detailstats({ propsData }) {
  console.log(propsData);

  const hitungTotal = () => {
    let x = 0;
    // x = propsData.stats.reduce((a, b) => a + b, 0);

    propsData.stats.map((data) => {
      x += data.base_stat;
    });
    console.log(x);
    return x;
  };
  return (
    <div className="detailabout">
      <div className="detailabout-list">
        <p className="listjudul">HP</p>
        <p>{propsData.stats[0].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[0].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[0].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[0].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Attack</p>
        <p>{propsData.stats[1].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[1].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[1].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[1].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Defense</p>
        <p>{propsData.stats[2].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[2].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[2].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[2].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Sp. Atk</p>
        <p>{propsData.stats[3].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[3].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[3].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[3].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Sp. Def</p>
        <p>{propsData.stats[4].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[4].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[4].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[4].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Speed</p>
        <p>{propsData.stats[5].base_stat}</p>
        <div className="line">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              propsData.stats[5].base_stat <= 50
                ? {
                    border: '2px solid red',
                    width: `${propsData.stats[5].base_stat}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${propsData.stats[5].base_stat}%`,
                  }
            }></div>
        </div>
      </div>
      <div className="detailabout-list">
        <p className="listjudul">Total</p>
        <p>{hitungTotal()}</p>
        <div className="line-total">
          <div className="line-luar"></div>
          <div
            className="line-dalam"
            style={
              hitungTotal() <= 300
                ? {
                    border: '2px solid red',
                    width: `${(hitungTotal() / 50) * 10}%`,
                  }
                : {
                    border: '2px solid green',
                    width: `${(hitungTotal() / 50) * 10}%`,
                  }
            }></div>
        </div>
      </div>

      <div className="detailabout-list">
        <p className="listjudul-total">Abilities</p>
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
        <p>{propsData.species.name}</p>
      </div>

      <div className="detailabout-list">
        <p className="listjudul">Egg Group</p>
        <p>{propsData.species.name}</p>
      </div>

      <div className="detailabout-list">
        <p className="listjudul">Egg Cycle</p>
        <p>{propsData.species.name}</p>
      </div>
    </div>
  );
}

export default Detailstats;
