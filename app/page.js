"use client";
import { useState } from "react";
import { currencyFormatter } from "@/app/lib/utils";
import ExpenseCategoryItem from "@/app/components/ExpenseCategoryItem";
import Modal from "@/app/components/Modal";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    color: "#0f0",
    total: 500,
  },
  {
    id: 2,
    title: "Gas",
    color: "#009",
    total: 200,
  },
  {
    id: 3,
    title: "Fuel",
    color: "#f00",
    total: 1200,
  },
  {
    id: 4,
    title: "Movies",
    color: "#ff0",
    total: 800,
  },
  {
    id: 5,
    title: "Holiday's",
    color: "#808",
    total: 2000,
  },
];

export default function Home() {
  const [modalIsOpen, setModalIsopen] = useState(true);

  return (
    <>
      <Modal show={modalIsOpen} onClose={setModalIsopen}>
        <h3>Hello, Let's Get Started! On your journey to financial freedom!</h3>
      </Modal>
      <main className="container max-w-2xl px-6 mx-auto">
        <section className="py-3">
          <small className="text-gray-400 text-md">My Balance</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
        </section>
        <section className="flex items-center gap-2 py-3">
          <button
            className="btn btn-primary"
            onClick={() => setModalIsopen(true)}
          >
            + Expenses
          </button>
          <button className="btn btn-primary-outline">+ Income</button>
        </section>

        {/* Expenses */}
        <section className="py-6">
          <h3 className="text-2xl">My Expenses</h3>
          <div className="flex flex-col gap-4 mt-6">
            {DUMMY_DATA.map((expense) => {
              return (
                <ExpenseCategoryItem
                  color={expense.color}
                  title={expense.title}
                  total={expense.total}
                />
              );
            })}
          </div>
        </section>
        {/* Charts */}
        <section className="py-6">
          <h3 className="text-2xl">Stats</h3>
          <div className="w-1/2 mx-auto">
            <Doughnut
              data={{
                labels: DUMMY_DATA.map((expense) => expense.title),
                datasets: [
                  {
                    label: "Expenses",
                    data: DUMMY_DATA.map((expense) => expense.total),
                    backgroundColor: DUMMY_DATA.map((expense) => expense.color),
                    borderColor: ["#18181b"],
                    borderWidth: 5,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

//  https://www.youtube.com/watch?v=ItyjlFXL3nE&list=PL4HikwTaYE0Hf-F6jzDF_llm_I1mwtGUf&index=3
