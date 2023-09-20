import { createContext, useReducer } from "react";
import reducer from "../Reducer/reducer";
import store from "../Reducer/store";

export const AppContextwithReducer=createContext()

export const AppContextwithReducerProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,store)
    return(

    <AppContextwithReducer.Provider value={[state,dispatch]}>
        {children}
    </AppContextwithReducer.Provider>
    )
}