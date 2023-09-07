import { CALCULATE_ONCLICK, INPUT_ON_CHANGE } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_ON_CHANGE:
      const { type, value } = action.payload;
      return { ...state, [type]: value };
      case CALCULATE_ONCLICK:
        const{resYearlyExpToday,resYearlyExpRet,resFireNumber}=action.payload
        return{...state,resYearlyExpToday,resYearlyExpRet,resFireNumber}

    default:
      return state;
  }
};
export default reducer;
