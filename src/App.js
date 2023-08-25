import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalPovider } from './context/GlobalState';

function App() {
  return (
    <GlobalPovider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncExp/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalPovider>
  );
}

export default App;
