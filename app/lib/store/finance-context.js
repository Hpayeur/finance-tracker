"use client";
import { createContext, useState } from "react";

const financeContext = createContext({
  income: [],
  addIncomeItem: async () => {},
  removeIncomeItem: async () => {},
});

export default function FinanceContextProvider({ children }) {
  const [income, setIncome] = useState([]);

  const addIncomeItem = async (newIncome) => {
    const collectionRef = collection(db, "income");

    try {
      const docSnap = await addDoc(collectionRef, newIncome);
      // Update State
      setIncome((prevState) => {
        return [
          ...prevState,
          {
            id: docSnap.id,
            ...newIncome,
          },
        ];
      });
      descriptionRef.current.value = "";
      amountRef.current.value = "";
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
}
const removeIncomeItem = async (incomeId) => {
  const docRef = doc(db, "income", incomeId);
  try {
    await deleteDoc(docRef);
    setIncome((prevState) => {
      return prevState.filter((i) => i.id !== incomeId);
    });
    // Update State
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const values = { income, addIncomeItem, removeIncomeItem };
return (
  <financeContext.Provider value={values}>{children}</financeContext.Provider>
);
