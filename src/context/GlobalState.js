import React, { createContext, useReducer } from 'react';
//Import from Reducer
import AppReducer from './AppReducer';

// Create initial state 
const initialState = {
    transactions: [
            {id: 1, description: "Income 1", transactionAmount: 1000},
            {id: 2, description: "Expense 1", transactionAmount: -100},
            {id: 3, description: "Income 2", transactionAmount: 2000},
            {id: 4, description: "Expense 1", transactionAmount: -500}
    ]
}

// Create the global context
export const GlobalContext = createContext(initialState);

// Create a provider for the Global context
export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(AppReducer,initialState);
    return (
        <GlobalContext.Provider value={
                {
                    transactions: state.transactions
                }
        }>
             {children}
        </GlobalContext.Provider>
    )
}