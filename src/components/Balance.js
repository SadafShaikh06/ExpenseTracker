import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  const {transaction} = useContext(GlobalContext);

  const amounts = transaction.map(transaction => transaction.amount);
  // console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);

  return (
    <>
    <h4>Your Balance</h4>
    <h1>Rs. {total}</h1>
    </>
  )
}

export default Balance;