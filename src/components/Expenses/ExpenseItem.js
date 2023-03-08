
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  const Date = props.date;
  const Title = props.title;
  const Amount = props.amount;
  const clickHandler = () =>{
    console.log("Clicked!!!");
  }
  const deleteExpense = (props) =>{
   console.log("Remove Expense");
  }
  return (
    
      <Card className="expense-item">
        <ExpenseDate date={Date}/>
        <ExpenseDetail title={Title} amount={Amount}/>
        <button onClick = {clickHandler}>Click</button>
        <button onClick = {deleteExpense}>Delete Expense</button>
     </Card>
  );
}
export default ExpenseItem;
