import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercentage);
    const peopleValue = parseInt(people);
    
    if (!isNaN(billValue) && !isNaN(tipValue) && peopleValue > 0) {
      const tip = (billValue * tipValue) / 100;
      const total = billValue + tip;
      setTipAmount(tip);
      setTotalAmount(total);
      setAmountPerPerson(total / peopleValue);
    }
  };

  return (
    <div>
      <h2>Tip Calculator</h2>
      <div>
        <label>Bill Amount ($): </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <label>Tip Percentage (%): </label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>
      <div>
        <label>Number of People: </label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
      <button onClick={calculateTip}>Calculate</button>
      <div>
        <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <p>Amount Per Person: ${amountPerPerson.toFixed(2)}</p>
      </div>
    </div>
  );
}
