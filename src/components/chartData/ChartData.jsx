import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'chart.js/auto';

import {
  Chart as ChartJS,
  BarElement
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  BarElement,
);

export default function ChartData() {
  const URL = process.env.REACT_APP_BACKEND_URL || 'https://sanmycontrol.alwaysdata.net';

    const [rentals, setRentals] = useState([]);
   
    const reqApi = async() => {
      await axios.get('https://sanmycontrol.alwaysdata.net/chartData')
      .then(response => {
        let res = response.data;        
          setRentals(res);
      });
    };
    
    useEffect(() => {
      reqApi()
    }, []);


    let auxRentals = rentals && rentals ? rentals['0'] : '';
    
    let arrayValues      = auxRentals &&  Object.values(auxRentals);
    let arrayKeysRentals = auxRentals && Object.keys(auxRentals);
    
    let newArray = [];
    
    for(let i=0; i < arrayValues?.length; i++){
      newArray.push(arrayValues[i]);
    }

    let newKeysArray = [];

    for(let j=0; j <arrayKeysRentals?.length; j++){
      newKeysArray.push(arrayKeysRentals[j]);
    }

    const data = {
      labels: newKeysArray?.map(x => x),
      datasets: [{
        label: `Total por mes (Bs.)`,
        data: newArray,
        backgroundColor: [
          'rgba(213, 184, 255, 1)',
        ],
        borderColor: [
          'rgba(213, 184, 255, 2)'        
        ],
        borderWidth: 1,
        borderRadius: 4
      }]
    };

    var options = {
      maintainAspectRatio: false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }

    return (
      <div className='chartCard'>
      <div className='chartBox'>
       { data.labels && data.labels[0] ?
       <Bar
          data={data}
          height={50}
          options={options}
  
        /> :  <div style={{display: 'none'}}> </div>}
      </div>
      </div>
    );
  };
  