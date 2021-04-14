import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Beranda from '../Beranda/Beranda';

function Home() {
  const [dataSemua, setDataSemua] = useState([]);

  useEffect(() => {
    let loadData = [];
    axios.get('/pokemon?limit=50&offset=200').then((res) => {
      res.data.results.map((data, index) => {
        const url = data.url.slice(25, 38);
        axios.get(`${url}`).then((res) => {
          loadData.push(res.data);
          setDataSemua(loadData);
        });
      });
    });
  }, []);

  return (
    <div>
      <Beranda propsData={dataSemua} />
    </div>
  );
}

export default Home;
