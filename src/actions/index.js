import axios from "axios";
import Swal from "sweetalert2";

import {

  GET_EARNINGS,

  GET_EARNINGS_BY_MONTH,

  GET_COUNT_RENTALS,

  GET_RENTAL_WIFI,
  GET_RENTALWIFI_BY_ID,
  GET_EARNINGS_WIFI_PER_DAY,
  GET_EARNINGS_PER_MONTH,
  /*USERS*/
  GET_USERS,
  UPDATE_USER,
  GET_USER_BY_NAME
  /* END USERS*/
} from "./const";
import { URL_ADD_RENTAL_WIFI, URL_ADD_USER, URL_GET_ALL_RENTALS_WIFI, URL_GET_ALL_USERS, URL_GET_COUNT_RENTALS, URL_GET_EARNINGS, URL_GET_EARNINGS_BY_MONTH, URL_GET_EARNINGS_PER_MONTH, URL_GET_EARNINGS_WIFI_PER_DAY, URL_UPDATE_RENTAL_WIFI_BY_ID, URL_UPDATE_USER } from "../const/constants";


  //Alert
  const showAlert = (message, icon, type) => {
    Swal.fire({
      title: message,
      type: type,
      icon: icon,
    }).then((result) => {
      window.location.reload();
    });
  };


//Actions:

export const getEarnings = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_EARNINGS)
      .then((response) => {
        dispatch({
          type: GET_EARNINGS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



export const getEarningsWifiPerDay = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_EARNINGS_WIFI_PER_DAY)
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_WIFI_PER_DAY,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};





export const getEarningsByMonth = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_EARNINGS_BY_MONTH)
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_BY_MONTH,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getEarningsPerMonth = () => {
  console.log("Payload in action getEarningsPerMonth: ");
  return async (dispatch) => {
    await axios
      .get(URL_GET_EARNINGS_PER_MONTH)
      .then((response) => {
        dispatch({
          type: GET_EARNINGS_PER_MONTH,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};

export function updateRental(payload){
  console.log("UPDATE RENTAL ACTION -------", payload);
  let id = payload.id;
  return async () => {
      try {
      let response = await axios.put(`${URL_UPDATE_RENTAL_WIFI_BY_ID}/`+id,
      payload);
      // console.log("Response de UPDATE: ", payload);
      showAlert("¡Registro actualizado!", "success", "success");
      return response;
   }catch(error){
    console.log("Error in action UPDATE RENTAL: ", error);
      showAlert("¡No se actualizó!", "error", "error");
      
   }
};
};

export const getCountRentals = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_COUNT_RENTALS)
      .then((response) => {
        dispatch({
          type: GET_COUNT_RENTALS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};




//////////// RENTAL WIFI
export const getAllRentalsWifi = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_ALL_RENTALS_WIFI)
      .then((response) => {
        dispatch({
          type: GET_RENTAL_WIFI,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getRentalWifiById = (id) => {
  return async (dispatch) => {
    await axios
      .get(`${URL}}/rentalWifi/` + id)
      .then((response) => {
        dispatch({
          type: GET_RENTALWIFI_BY_ID,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Detailrental by id, actions ", err);
      });
  };
};


export function postRentalWifi(payload) {
  return async () => {
    try {
      let response = await axios.post(URL_ADD_RENTAL_WIFI, payload);
      console.log("Response de POST: ", payload);
      // alert("Pokemon created! :)");
      return response;
    } catch (error) {
      // alert('Sorry, Pokemon name already exist')
      console.log("Error in action postPoke: ", error);
    }
  };
}


/////////// END RENTAL WIFI 

///////USERS
export const getAllUsers = () => {
  return async function (dispatch) {
    await axios
      .get(URL_GET_ALL_USERS)
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserByName = (payload) => {
  console.log("PAYLOAD NAMEEEEEE: ", payload);
  return async function (dispatch){
      try{
          let aux = await axios.get(`${URL}/users?name=`+payload)
          return dispatch({
              type: GET_USER_BY_NAME,
              payload: aux.data
          })
      }
      catch(e){
          return dispatch({
              type: GET_USER_BY_NAME,
              payload: "Not Found"
          })
      }
  }
}
export function addUser(payload) {
  console.log("PAYLOAD ADDUSEERRRRRRR-----", payload)
  return async () => {
    try {
      let response = await axios.post(URL_ADD_USER, payload);
      console.log("Response de POST: ", payload);
      // alert("Pokemon created! :)");
      return response;
    } catch (error) {
      // alert('Sorry, Pokemon name already exist')
      console.log("Error in action addUser: ", error);
    }
  };
}

export function updateProduct(payload) {
  console.log("UPDATE USER ACTION -------", payload);
  let id = payload.id;
  return async function (dispatch) {
    let request = await axios.put(
      `${URL}/users/`+id,
      payload
    );
    return dispatch({
      type: UPDATE_USER,
      payload: request.data,
    });
  };
}

export function updateUser(payload){
  console.log("UPDATE USER ACTION -------", payload);
  let id = payload.id;
  return async () => {
      try {
      let response = await axios.put(`${URL_UPDATE_USER}/`+id,
      payload);
      // console.log("Response de POST: ", payload);
      // alert("Pokemon created! :)");
      showAlert("¡Registro actualizado!", "success", "success");
      return response;
   }catch(error){
    console.log("Error in action UPDATE USER: ", error);
      showAlert("¡No se actualizó!", "error", "error");
      
   }
};
};
//////END USERS