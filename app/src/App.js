import './App.css';
import { AccountService } from './services';
import { useState } from 'react';

function App() {
  const accountService = new AccountService(process.env.REACT_APP_ACCOUNT_SERVICE_HOST);
  
  var [cardNumber, setCardNumber] = useState('');
  var [balance, setBalance] = useState(null);

  async function getBalance() {
    var resp = {};
    try {
      resp = await accountService.getBalanceByCardNumber(cardNumber);
    } catch (e) {
      console.log(e);
      return;
    }

    if (resp.data.success) {
      setBalance(resp.data.data);
    }
  }
  
  function clearCardNumber() {
    setCardNumber('');
    setBalance(null);
  }

  function updateCardNumber(input) {
    let val = input.target.value;
      console.log(val);
    if (cardNumber !== val) {
      setCardNumber(val);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text"
          value={cardNumber} 
          onChange={updateCardNumber} 
          placeholder="Enter your card number" />
        <button onClick={getBalance}>View Balance</button>
        <button onClick={clearCardNumber}>Clear</button>
        <div>
          {balance !== null ? <p>Your balance is ${balance}</p> : null}
        </div>
      </header>
    </div>
  );
}

export default App;
