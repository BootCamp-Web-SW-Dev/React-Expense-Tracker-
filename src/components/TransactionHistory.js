import React, { useContext } from 'react'

//Import global context 
import { GlobalContext } from '../context/GlobalState'

//Import transactions
import { Transaction } from './Transaction' 

export const TransactionHistory = () => {
    
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map( transactions =>  ( 
                <Transaction key={transactions.id} transaction={transactions}/>
                )
            )}
            </ul>
        </div>
    )
}
