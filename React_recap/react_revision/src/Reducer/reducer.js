import {
  CALCULATE_ONCLICK,
  INPUT_ON_CHANGE,
  LOGIN_FAIL,
  LOGIN_REQ,
  LOGIN_SUCESS,
  LOGOUT_REQ,
} from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_ON_CHANGE:
      const { type, value } = action.payload;
      return { ...state, [type]: value };

    case CALCULATE_ONCLICK:
      const { resYearlyExpToday, resYearlyExpRet, resFireNumber } =
        action.payload;
      return { ...state, resYearlyExpToday, resYearlyExpRet, resFireNumber };

    case LOGIN_REQ: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        token: action.payload,
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        isAuth: false,
        isError: true,
        isLoading: false,
        token: null,
      };
    }

    case LOGOUT_REQ: {
      return { ...state, isAuth: false, isLoading: false, token: null };
    }

    default:
      return state;
  }
};
export default reducer;
