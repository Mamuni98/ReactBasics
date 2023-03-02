
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetails";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  return (
    
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetail title={props.title} amount={props.amount}/>
     </Card>
  );
}
export default ExpenseItem;
