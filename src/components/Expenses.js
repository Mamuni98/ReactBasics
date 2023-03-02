
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    const expense = props.items;
  return (
    <Card className="expenses">
      {expense.map((expns) => {
        return (
          <ExpenseItem
            title={expns.title}
            amount={expns.amount}
            date={expns.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;