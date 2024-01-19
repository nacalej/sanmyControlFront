import {
    UPDATE_RENTAL,
    GET_EARNINGS_BY_MONTH,
    GET_EARNINGS,
    GET_STATUS_EARNINGS,
    GET_COUNT_RENTALS,
    GET_REVENUE_LAST_MONTH,
    GET_EARNINGS_PER_DAY,
    GET_RENTAL_WIFI, 
    GET_RENTALWIFI_BY_ID,
    POST_RENTAL_WIFI,
    GET_EARNINGS_WIFI_PER_DAY,
    GET_EARNINGS_PER_CASH_PAYMENTS,
    GET_EARNINGS_PER_MOBILE_PAYMENTS,
     /*USERS*/
  GET_USERS,
  GET_USER_BY_NAME,
  GET_EARNINGS_PER_MONTH
  /* END USERS*/
 } from '../actions/const';

//state initial:
const initialState = {
    allRentals: [],
    types: [],
    details: [],
    earnings: [],
    earningsByMonth: [],
    earningsPerMonth: [],
    statusEarnings: [],
    chartData: [],
    earningsPerDay: [],
    allRentalWifi: [],
    detailRentalWifi: [],
    earningsWifiPerDay: [],
     /*USERS*/
     users: [],
    allUsers: []
  /* END USERS*/

};//Cierre initialState

export default function rootReducer(state = initialState, { type, payload }){
    switch(type){

        

            case GET_EARNINGS:
                return {
                    ...state,
                    earnings: payload,
                }; 

                case GET_EARNINGS_BY_MONTH:
                    return {
                        ...state,
                        earningsByMonth: payload,
                    }; 
                    // case GET_STATUS_EARNINGS:
                    //     return {
                    //         ...state,
                    //         statusEarnings: payload,
                    // };
                case GET_EARNINGS_PER_MONTH:
                    return {
                        ...state,
                        earningsPerMonth: payload
                    };
             
                // case GET_EARNINGS_PER_DAY:
                //     return {
                //         ...state,
                //         earningsPerDay: payload
                //     }
                case GET_EARNINGS_WIFI_PER_DAY:
                    return{
                        ...state,
                        earningsWifiPerDay: payload
                    }
              
              
                case GET_RENTAL_WIFI:
                    return{
                        ...state,
                        allRentalWifi: payload
                    }            
              

                case GET_RENTALWIFI_BY_ID:
                    return {
                        ...state,
                        detailRentalWifi: payload
                    }
                case POST_RENTAL_WIFI:
                    return {
                        ...state
                    }
          
            case UPDATE_RENTAL:
                return {
                    ...state
                }
                case GET_COUNT_RENTALS:
                    return {
                        ...state,
                        chartData: payload,
                    };
            /* USERS */
            case GET_USERS:
                return {
                    ...state,
                    allUsers: payload,
                    users: payload
                          
                }; 

                case GET_USER_BY_NAME:
                    return {
                        ...state,
                        users: payload,
                              
                    }; 
            /* END USERS*/
               
           default: 
           return {
               ...state
             };

    }//Cierre switch
};//Cierre rootReducer