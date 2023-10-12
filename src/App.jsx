import { useState } from "react";
import "./App.css";

function App() {
  return <TipCalculator />;
}

export default App;

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handelReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage parentage={percentage1} onSelect={setPercentage1}>
        How Did you like that services?
      </SelectPercentage>
      <SelectPercentage parentage={percentage2} onSelect={setPercentage2}>
        How Did your friend like that services?
      </SelectPercentage>
      <OutPut bill={bill} tip={tip} />
      <Reset handelReset={handelReset} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, parentage, onSelect }) {
  return (
    <div style={{ padding: "5px" }}>
      <label>{children}</label>
      <select
        value={parentage.toString()} // Convert parentage to a string
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ handelReset }) {
  return <button onClick={handelReset}>Reset</button>;
}
