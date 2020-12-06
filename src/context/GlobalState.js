import React, { createContext, useReducer } from 'react';
//Import from Reducer
import AppReducer from './AppReducer';

// Create initial state 
const initialState = {
    transactions: []
}

// Create the global context
export const GlobalContext = createContext(initialState);

// Create a provider for the Global context
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions for Transactions
    function delTransaction(id){
         dispatch({
             type: 'DELETE_TRANSACTION',
             payload: id
         });
    }
    
    //Add new transaction action 
    function addTransaction(transaction){
         dispatch({
             type: 'ADD_TRANSACTION',
             payload: transaction
         })
    }


    return (
        <GlobalContext.Provider value={
                {
                    transactions: state.transactions,
                    delTransaction,
                    addTransaction
                }
        }>
             {children}
        </GlobalContext.Provider>
    )
}