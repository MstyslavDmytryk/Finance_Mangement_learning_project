import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car",
      amount: 66295,
      date: new Date(2021, 2, 1),
    },
    {
      id: "e2",
      title: "House",
      amount: 2955,
      date: new Date(2021, 2, 5),
    },
    {
      id: "e3",
      title: "Party",
      amount: 125,
      date: new Date(2021, 6, 28),
    },
    {
      id: "e4",
      title: "Holidays",
      amount: 3395,
      date: new Date(2022, 2, 18),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
