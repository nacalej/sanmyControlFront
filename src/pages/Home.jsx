import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import '../components/styles/home.css';
import '../components/styles/spinner.css';
import Spinner from 'react-bootstrap/Spinner';
import { getEarningsByMonth,
    getEarningsWifiPerDay,   
} from "../actions";
import ChartData from '../components/chartData/ChartData';

const Home = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
     dispatch(getEarningsByMonth())
    dispatch(getEarningsWifiPerDay())
  },[dispatch]);  

  const { earningsByMonth, 
    earningsWifiPerDay   } = useSelector((state) => state);
 
 let cleanedValueEarningsByMonth = Number(earningsByMonth).toFixed(2);


 

    return (
        
    <div className="container mt-3 mb-3">
        <div className="row">
      
            {/* WIFI PER DAY */}
            <div className="col-md-4">
            <div className="card  p-4 mb-2 shadow p-3 mb-5 bg-light rounded">
                
                <div className="d-flex justify-content-between" >
                    <div className="d-flex flex-row align-items-center">
                        <div class="icon"> <i className='material-icons'>payments</i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Alquiler de red por día</h6> 
                        </div>
                    </div>
                    <div className="badge b5"> <span>Mes actual</span> </div>
                </div>
             
                <div className="mt-4">
                <h4 className="heading text-center">{earningsWifiPerDay
                    && earningsWifiPerDay.totalWifiPerDay === 0 ? 
                    'Valor no disponible' : 
                    earningsWifiPerDay[0]?.totalWifiPerDay 
                        && earningsWifiPerDay[0]?.totalWifiPerDay ?
                         earningsWifiPerDay[0]?.totalWifiPerDay : 'Valor no disponible.'} 
                         {earningsWifiPerDay[0]?.totalWifiPerDay  && ' Bs' }</h4>
                         

                </div>
            </div>
        </div>


        <div className="col-md-4">
            <div className="card  p-3 mb-2 shadow mb-5 bg-light rounded">
                <div className="d-flex justify-content-between" >
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className='material-icons'>local_fire_department</i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Ingresos totales</h6> 
                        </div>
                    </div>
                    <div className="badge"> <span>Mes actual</span> </div>
                </div>
                <div className="mt-4">
                    <h4 className="heading text-center">
                    {cleanedValueEarningsByMonth && 
                    cleanedValueEarningsByMonth === null ? 
                    'No hay datos.' : 
                    cleanedValueEarningsByMonth &&
                    cleanedValueEarningsByMonth ? 
                    cleanedValueEarningsByMonth : 
                    'No hay datos.'}
                    { cleanedValueEarningsByMonth && ' Bs'}
                </h4>
                    <div className="mt-3 ms-2"> 
                    <span className="text1">
                        <Link to="/earnings" className='linkToEarnings'>
                            Ver ingresos netos 
                        </Link>
                    </span>
                    </div>
                </div>
            </div>
        </div>      


        
        </div>
        
   
        <div className="row">
            <div className='col-sm-5'>
        <div className="card p-2 mb-2 shadow p-2 mb-2 bg-light rounded">
            <h5> Alquiler de red por meses</h5>
        <ChartData />
        </div></div>
        </div>   

        </div>


    )
}

export default Home;