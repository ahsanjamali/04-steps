import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
let symbol = "X";
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [symbol, setSymbol] = useState("X");

  function handlePrevious() {
    if (step > 1) setStep((currStep) => currStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((currStep) => currStep + 1);
  }
  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
          if (symbol === "X") symbol = "✓";
          else symbol = "X";
        }}
      >
        {symbol}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <MessageStep step={step}> {messages[step - 1]} </MessageStep>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function MessageStep({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
