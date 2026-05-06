import { useEffect, useState } from "react";

export const useTipCalculator = () => {
  const [amount, setAmount] = useState("0");
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0.1);

  const [tipTotal, setTipTotal] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const buildNumber = (value: string) => {
    if (value === "." && amount.includes(".")) return;

    if (amount === "0") {
      if (value === ".") {
        setAmount("0.");
        return;
      }

      setAmount(value);
      return;
    }

    setAmount(amount + value);
  };
  const deleteLast = () => {
    if (amount.length === 1) {
      setAmount("0");
      return;
    }

    setAmount(amount.slice(0, -1));
  };

  const incrementPeople = () => {
    setPeople(people + 1);
  };

  const decrementPeople = () => {
    setPeople((people) => (people > 1 ? people - 1 : 1));
  };

  const resetAll = () => {
    setAmount("0");
    setPeople(1);
    setTip(0.1);
  };

  const resetPeople = () => {
    setPeople(1);
  };

  useEffect(() => {
    const base = parseFloat(amount) || 0;
    const tipAmount = base * tip;
    const total = base + tipAmount;
    setTipTotal(tipAmount);
    setTotalPerPerson(total / people);
  }, [amount, tip, people]);

  return {
    amount,
    people,
    tip,
    tipTotal,
    totalPerPerson,

    buildNumber,
    deleteLast,
    resetAll,
    incrementPeople,
    decrementPeople,
    setTip,
    resetPeople,
  };
};
