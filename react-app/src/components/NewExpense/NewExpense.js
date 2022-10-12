// import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </Card>
  );
};

export default NewExpense;
