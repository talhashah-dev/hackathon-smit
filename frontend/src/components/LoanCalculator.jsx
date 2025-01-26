import { useState } from "react";

const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(0);
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const interestRate = 0.05; // Example rate
    const total = amount + amount * interestRate * period;
    setResult(total);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl">Loan Calculator</h2>
      <div>
        <label>Category:</label>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Select Category</option>
          <option value="Wedding">Wedding</option>
          <option value="Home Construction">Home Construction</option>
          <option value="Business Startup">Business Startup</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />
      </div>
      <div>
        <label>Period (Years):</label>
        <input
          type="number"
          onChange={(e) => setPeriod(Number(e.target.value))}
          value={period}
        />
      </div>
      <button onClick={calculateLoan}>Calculate</button>
      {result && <p>Total Payable Amount: PKR {result}</p>}
    </div>
  );
};

export default LoanCalculator;
