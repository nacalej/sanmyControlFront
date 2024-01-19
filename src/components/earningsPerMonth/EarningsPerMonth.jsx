import "bootstrap/dist/css/bootstrap.min.css"; 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEarningsPerMonth} from "../../actions";
import '../styles/rentaList.css';
import '../styles/spinner.css';
import Spinner from 'react-bootstrap/Spinner';

   
 function EarningsPerMonth() {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getEarningsPerMonth())
  },[dispatch]);  

  const { earningsPerMonth } = useSelector((state) => state);


  return (
    <div className="container min-vh-100">
    
    <div className="crud shadow-lg p-4 mb-5 mt-4   rounded" style={{ backgroundColor: "#F1F9F9"}}> 
    <div className="row ">
     
     <div className="col-sm-3 mt-5 mb-4 text-gred"></div>  
     <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "#3C3C3D" }}
          >
            <h2>
              <b>Ingresos mensuales</b>
            </h2>
          </div>
    
     </div>  
     { earningsPerMonth && earningsPerMonth.length > 0 ? ( 
      <div className="row w-100" align="center">
          <div className="table-responsive table-sm" size="sm" >
           <table className="table table-striped table-hover text-center table-bordered"
           style={{border: "2px solid #393E46"}}>
              <thead>
                  <tr>
                      <th scope="col">Enero</th>
                      <th scope="col">Febrero</th>
                      <th scope="col">Marzo</th>
                      <th scope="col">Abril</th>
                      <th scope="col">Mayo</th>
                      <th scope="col">Junio</th>
                      <th scope="col">Julio</th>
                      <th scope="col">Agosto</th>
                      <th scope="col">Septiembre</th>
                      <th scope="col">Octubre</th>
                      <th scope="col">Noviembre</th>
                      <th scope="col">Diciembre</th>
                  </tr>
              </thead>
              <tbody>
              {earningsPerMonth.map((item, idx) => {
                            return (
                              <tr key={idx}>
                                {item.Ene === 0 ? (
                                 <td style={{color: 'red'}}>{item.Ene.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Ene.toFixed(2)} Bs.</td>
                            )
                            }    
                                      {item.Feb === 0 ? (
                                 <td style={{color: 'red'}}>{item.Feb.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td>{item.Feb.toFixed(2)}Bs.</td>
                            )
                            }  
                               {item.Mar === 0 ? (
                                 <td style={{color: 'red'}}>{item.Mar.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Mar.toFixed(2)} Bs.</td>
                            )
                            } 
                            {item.Abr === 0 ? (
                                 <td style={{color: 'red'}}>{item.Abr.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Abr.toFixed(2)} Bs.</td>
                            )
                            } 
                               {item.May === 0 ? (
                                 <td style={{color: 'red'}}>{item.May.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.May.toFixed(2)} Bs.</td>
                            )
                            } 
                              {item.Jun === 0 ? (
                                 <td style={{color: 'red'}}>{item.Jun.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Jun.toFixed(2)} Bs.</td>
                            )
                            } 
                               {item.Jul === 0 ? (
                                 <td style={{color: 'red'}}>{item.Jul.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Jul.toFixed(2)} Bs.</td>
                            )
                            } 
                             {item.Ago === 0 ? (
                                 <td style={{color: 'red'}}>{item.Ago.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Ago.toFixed(2)} Bs.</td>
                            )
                            } 
                               {item.Sep === 0 ? (
                                 <td style={{color: 'red'}}>{item.Sep.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Sep.toFixed(2)} Bs.</td>
                            )
                            } 
                               {item.Oct === 0 ? (
                                 <td style={{color: 'red'}}>{item.Oct.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Oct.toFixed(2)} Bs.</td>
                            )
                            } 
                               {item.Nov === 0 ? (
                                 <td style={{color: 'red'}}>{item.Nov.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Nov.toFixed(2)} Bs.</td>
                            )
                            } 
                              {item.Dic === 0 ? (
                                 <td style={{color: 'red'}}>{item.Dic.toFixed(2)} Bs.</td>
                                )
                             : (
                                <td style={{color: 'green'}}>{item.Dic.toFixed(2)} Bs.</td>
                            )
                            } 
                              </tr>
                            )
                          }
                          )}

              </tbody>
          </table>
                
      </div>   
  </div>  
) :
( <div className="fatherDiv">
  <div className="chilDiv">
   <Spinner animation="border" variant="dark" className="spinnerReactstrap" /> 
   
   </div>
   </div>
   )
}
 </div>  
</div>    
);
}
 export default EarningsPerMonth;
