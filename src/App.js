//import logo from './logo.svg';
//import './App.css';
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "New TV", amount: 50000, date: new Date(2023, 2, 1) },
    { title: "Toilet Paper", amount: 500, date: new Date(2023, 1, 5) },
    { title: "New Clothes", amount: 5508, date: new Date(2023, 0, 9) },
    { title: "Car", amount: 900000, date: new Date(2023, 1, 15) },
    { title: "Wooden desk", amount: 4600, date: new Date(2023, 0, 19) },
  ];

  return (
    <div>
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
