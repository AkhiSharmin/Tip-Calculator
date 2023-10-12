import "./App.css";

function App() {
  return <TipCalculator />;
}

export default App;

function TipCalculator() {
  return (
    <>
      <BillInput />
      <SelectPercentage>How Did you like that services?</SelectPercentage>
      <SelectPercentage>
        How Did your friend like that services?
      </SelectPercentage>
      <OutPut />
      <Reset />
    </>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill? </label>
      <input type="text" placeholder="Bill Value" />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div style={{ padding: "5px" }}>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function OutPut() {
  return <h3>You pay X ($A + $B tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}
