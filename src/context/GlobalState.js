import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transaction: [
        // {id : 1, text: 'Flowers', amount: -20}
    ]
}

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalPovider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}