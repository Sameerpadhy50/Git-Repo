import { CALCULATE_ONCLICK, INPUT_ON_CHANGE } from "./action";

const handleInputOnChange = (type, value) => {
  return {
    type: INPUT_ON_CHANGE,
    payload: { type, value },
  };
};
const handleCalculatorOnclick = (state) => {
  const {curExp,curAge,retAge,infliation}=state
  //Future value=Present Value *(1+(rate/100))**(ret age-present age)
  //fire=fv*25
  let resYearlyExpToday=(Number(curExp)*12).toFixed(0);
  let resYearlyExpRet=(resYearlyExpToday*(1+(Number(infliation)/100))**((Number(retAge))-(Number(curAge)))).toFixed(0)
  let resFireNumber=(resYearlyExpRet*25).toFixed(0)

  return {
    type:CALCULATE_ONCLICK,
    payload:{
      resYearlyExpToday,
    resYearlyExpRet,
    resFireNumber
    }
    
  };
};
export { handleInputOnChange, handleCalculatorOnclick };
