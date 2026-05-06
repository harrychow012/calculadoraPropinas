import { useEffect, useState } from "react";

export const useTipCalculator = () => {
  const [amount, setAmount] = useState("0");
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0.1);

  const [tipTotal, setTipTotal] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const [customTip, setCustomTip] = useState("");
  const [isCustomTip, setIsCustomTip] = useState(false);

  const buildNumber = (value: string) => {
    if (isCustomTip) {
      if (value === "." && customTip.includes(".")) return;

      const newValueTip = customTip === "0" ? value : customTip + value;
      setCustomTip(newValueTip);

      if (newValueTip.length >= 2) {
        setIsCustomTip(false);
        setTip((parseFloat(newValueTip) || 0) / 100);
      }
      return;
    }
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
    if (isCustomTip) {
      if (customTip.length <= 1) {
        setCustomTip("0");
        return;
      }

      setCustomTip(customTip.slice(0, -1));
      return;
    }

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

  const handleCustomTip = () => {
    setIsCustomTip(true);
    setCustomTip("");
  };

  useEffect(() => {
    const base = parseFloat(amount) || 0;

    const currentTip = isCustomTip ? parseFloat(customTip) || 0 / 100 : tip;

    const tipAmount = base * currentTip;
    const total = base + tipAmount;

    setTipTotal(tipAmount);
    setTotalPerPerson(total / people);
  }, [amount, tip, people, customTip, isCustomTip]);

  return {
    amount,
    people,
    tip,
    tipTotal,
    totalPerPerson,
    customTip,
    isCustomTip,
    setIsCustomTip,
    setCustomTip,

    buildNumber,
    deleteLast,
    resetAll,
    incrementPeople,
    decrementPeople,
    setTip,
    resetPeople,
    handleCustomTip,
  };
};
