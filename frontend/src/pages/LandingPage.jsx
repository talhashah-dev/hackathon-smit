import LoanCalculator from "../components/LoanCalculator";

const LandingPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Saylani Microfinance</h1>
      <p>Choose from the following loan categories:</p>
      <ul className="list-disc pl-6">
        <li>Wedding Loans</li>
        <li>Home Construction Loans</li>
        <li>Business Startup Loans</li>
        <li>Education Loans</li>
      </ul>
      <LoanCalculator />
    </div>
  );
};

export default LandingPage;
