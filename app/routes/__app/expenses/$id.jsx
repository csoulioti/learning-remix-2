// import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, updateExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
// import { getExpense } from "~/data/expenses.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }
  return <Modal onClose={closeHandler}><ExpenseForm /></Modal>
}

// export async function loader({ params }) {
//   return json(await getExpense(params.id))
// }

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData)
    } catch (error) {
      return error
    }
    await updateExpense(expenseId, expenseData)
    return redirect('/expenses')
  } else if (request.method === 'DELETE') {
    await deleteExpense(expenseId);
    return { deletedId: expenseId }
  }

}

export function meta({ params, location, data, parentsData }) { //window.location.href (URL)
  const expense = parentsData['routes/__app/expenses'].find(expense => expense.id === params.id)
  return {
    title: expense.title,
    description: 'Update Expense.'
  }
}