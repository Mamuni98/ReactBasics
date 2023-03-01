import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023, 2 , 1);
    const LocationOfExpenditure = ["Food", "Movies", "Petrol"];
    const expenseAmount = [400, 600, 500];
  return (
    <div>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure[0]}</h2>
          <div className="expense-item__price">Rs.{expenseAmount[0]}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure[1]}</h2>
          <div className="expense-item__price">Rs.{expenseAmount[1]}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure[2]}</h2>
          <div className="expense-item__price">Rs.{expenseAmount[2]}</div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
