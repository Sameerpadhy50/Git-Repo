import axios from "axios";
import {
  CALCULATE_ONCLICK,
  INPUT_ON_CHANGE,
  LOGIN_FAIL,
  LOGIN_REQ,
  LOGIN_SUCESS,
} from "./action";

const handleInputOnChange = (type, value) => {
  return {
    type: INPUT_ON_CHANGE,
    payload: { type, value },
  };
};
const handleCalculatorOnclick = (state) => {
  const { curExp, curAge, retAge, infliation } = state;
  //Future value=Present Value *(1+(rate/100))**(ret age-present age)
  //fire=fv*25
  let resYearlyExpToday = (Number(curExp) * 12).toFixed(0);
  let resYearlyExpRet = (
    resYearlyExpToday *
    (1 + Number(infliation) / 100) ** (Number(retAge) - Number(curAge))
  ).toFixed(0);
  let resFireNumber = (resYearlyExpRet * 25).toFixed(0);

  return {
    type: CALCULATE_ONCLICK,
    payload: {
      resYearlyExpToday,
      resYearlyExpRet,
      resFireNumber,
    },
  };
};

const handleLogin = ([state, dispatch]) => {
  dispatch({ type: LOGIN_REQ });
  const payload = {
    email: state.email,
    password: state.password,
  };

  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCESS, payload: res.data.token });
      //console.log("token le",res.data.token)
    })
    .catch((err) => dispatch({type:LOGIN_FAIL}));
};
export { handleInputOnChange, handleCalculatorOnclick, handleLogin };
